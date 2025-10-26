import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaService } from '../prisma/prisma.service';
import { readFile } from 'fs/promises';
import * as path from 'path';
import * as ExcelJS from 'exceljs';


@Injectable()
export class TemplateService {

  constructor(private prisma: PrismaService) {}

  create(createTemplateDto: CreateTemplateDto) {
    return this.prisma.template.create({data:createTemplateDto})
  }

  findAll() {
    return this.prisma.template.findMany({take:1000});
  }

  findOne(id: number) {
    return this.prisma.template.findFirst({ where:{id:id}});
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return this.prisma.template.update(
      { 
        where:{ id:id },
        data: updateTemplateDto,
      });
  }

  remove(id: number) {
    return this.prisma.template.delete({ where:{id:id} });
  }
  //--------------------------------------------------------------------

    async test() {

    const excelTemplatePath = path.resolve(__dirname, '../json/template1.xlsx');  //template
    const outExcelPath = path.resolve(__dirname, '../json/data1.xlsx');         //output xlsx


    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelTemplatePath);
    const worksheet = workbook.worksheets[0];

    for (let rowNumber = 1; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber);
      for (let colNumber = 1; colNumber <= row.cellCount; colNumber++) {

        const cell = row.getCell(colNumber);
        //console.log('Cell ' + colNumber + ' = ' + cell.value);
        
        //  query cell == json object !
        if(cell && typeof cell.value == "string" && cell.value.startsWith("{")) {
          const cmd = cell.value;
          cell.value = "";  //clear cmd
          const json = await this.processQuery(cmd);
          await this.processJson(worksheet, rowNumber, colNumber, json);
        }
      }
    }
    
    await workbook.xlsx.writeFile(outExcelPath);

    return "OK";
  }

  //temp temp 
  async processQuery(json:  string) {
    const query = JSON.parse(json); //parse query
    const testData1Map = path.resolve(__dirname, '../json/data1.json');
    const data = JSON.parse(await readFile(testData1Map, 'utf8'));
    return data;
  }

  //insert json - excel table
  async processJson(sheet: ExcelJS.Worksheet, row:number, col:number, json:string) {
    
    let i =0;

    const map1 = new Map(Object.entries(json));

    const rowCount = map1.size -2;  //

    this.insertEmptyRows(sheet, row+1, rowCount);// ?

     for (const [key, value] of map1) {
      //console.log(i,key)//, value)
      sheet.getCell(row+i, 1).value = key;
      this.setRowValues(sheet, row+i, col, value);
      i++;
    }
    //sheet.commit()
    this.shiftFormulasAfterInsert(sheet,row+1, rowCount); // 23
  }

  setRowValues(sheet: ExcelJS.Worksheet, row:number, col:number, data:any) {
    for (let i = 1; i < 6; i++) {
      sheet.getCell(row, col+i).value = data[i].numberVal;
      //console.log(row, col+i, sheet.getCell(row, col+i).value)
    }
    
  }

  //insert + copy styles
  insertEmptyRows(sheet: ExcelJS.Worksheet, pos: number, num: number) {
    for (let id = 0; id < num; id++) {
        const emptyRow = sheet.getRow(pos);   //она станет пустой после вставки
        const oldRow = sheet.getRow(pos+1);  //сюда сдвигается старая строка
        // Вставляем пустую строку
        sheet.spliceRows(pos, 0, []);
        this.copyValueAndRowStyle( oldRow, emptyRow);       
    }
  }

  copyValueAndRowStyle(sourceRow: ExcelJS.Row, targetRow: ExcelJS.Row) {
    targetRow.height = sourceRow.height;
    sourceRow.eachCell({ includeEmpty: true }, (cell, colNumber) => {
    const targetCell = targetRow.getCell(colNumber);
    targetCell.style = JSON.parse(JSON.stringify(cell.style)); // глубокая копия
    targetCell.numFmt = cell.numFmt;
    targetCell.value = cell.value;
    //console.log(colNumber, targetCell.style)
  });
  }

  async saveOnDisk()  {
        //const buffer = await this.workbook.xlsx.writeBuffer();
        //saveAs(new Blob([buffer]), 'edited.xlsx');
  }
  //schift A1:A2 -> A1:A100   englisch formulas start mit '='
  shiftFormulasAfterInsert(sheet: ExcelJS.Worksheet, insertIndex: number, count = 1) {
    
    //   /[A-Z]{1,3}\d+:[A-Z]{1,3}\d+/g        // все A1:В100 диапазоны
    const rangeRegex = /\$?[A-Z]{1,3}\$?\d+/g; // все A1-ссылки

    for (let rowIndex = 1; rowIndex <= sheet.rowCount; rowIndex++) {
      const r = sheet.getRow(rowIndex);
      for (let colIndex = 1; colIndex <= r.cellCount; colIndex++) {
        const cell = r.getCell(colIndex);
        
        console.log("shift v:"+cell.value, "f:",cell.value); // excel  englisch formulas start mit '='

        if (cell && cell.value && typeof cell.value === "string" && cell.value.startsWith("=")) {
          //replace regex A1...-> A100
          const newFormula = cell.value.replace(rangeRegex, ref => {
            const { col, row } = this.parseCellRef(ref);
            if (row >= insertIndex) {
              // Сдвигаем строки, но не трогаем колонки
              return ref.replace(/\d+/, (row + count).toString());
            }
            let s = ref;
            return s;
          });
          //console.log(newFormula)//  remove '='
          cell.value = {formula: newFormula.substring(1), };
        }
      }
    }


  }

  /*
  [..  "B1", // match[0] — полное совпадение
  "B",  // match[1] — буквы (колонка)
  "1"   // match[2] — цифры (строка)   ..]
  */
  parseCellRef(ref: string): { col: string; row: number } {
    const match = ref.match(/\$?([A-Z]{1,3})\$?(\d+)/);
    return match ? { col: match[1], row: parseInt(match[2], 10) } : { col: "", row: 0 };
  }


}

