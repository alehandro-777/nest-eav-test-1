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

    const json = await this.processQuery(""); // test test data

    const excelTemplatePath = path.resolve(__dirname, '../json/template1.xlsx');  //template
    const outExcelPath = path.resolve(__dirname, '../json/data1.xlsx');         //output xlsx


    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelTemplatePath);
    const worksheet = workbook.worksheets[0];
    
    this.processJson(worksheet, json);
   
    await workbook.xlsx.writeFile(outExcelPath);

    return "OK";
  }

  //temp temp 
  async processQuery(json:  string) {
    const testData1Map = path.resolve(__dirname, '../json/data2.json');
    const data = JSON.parse(await readFile(testData1Map, 'utf8'));
    return data;
  }

  //insert json - excel table
  processJson(sheet: ExcelJS.Worksheet, json: string) {
    const startSym = "#";
    const ds0: Map<string,any> = new Map(Object.entries(json)); //temp test
    const dsKeys = Array.from(ds0.keys()); // массив ключей

    const rowCount = ds0.size;  //dataset row count,  insert-1 ?

    for (let rowId = 1; rowId <= sheet.rowCount; rowId++) {
      const row: ExcelJS.Row = sheet.getRow(rowId);
  
      //1 проверить нужно ли размножить строку ? если да - размножить
      if(this.testIsMultiRow(row))  {
        this.insertEmptyRows(sheet, rowId, rowCount);
        this.shiftFormulasAfterInsert(sheet, rowId, rowCount);  //test temp
      }

      //2 привязать данные строки
      for (let colId = 1; colId <= row.cellCount; colId++) {
        const cell = row.getCell(colId);

        //console.log('Cell ' + colNumber + ' = ' + cell.value);        
        //cell format: #0.*.key,...	#0.*.1_1
        if(cell && typeof cell.value == "string" && cell.value.startsWith(startSym)) {
          //{ds, id, key} 
          let bind = this.parseCellBinding(cell.value);

          if(bind.key == "key")  {
            row.getCell(colId).value  = dsKeys[+bind.id]; //test temp

          } else {

            let fieldKey = bind.key;
            let dsRow = ds0.get(dsKeys[+bind.id]);

            if(dsRow && dsRow[fieldKey]) {

              let newVal = dsRow[fieldKey].numberVal; //temp

              row.getCell(colId).value  = newVal; //dsKeys[i]
            } else {
              row.getCell(colId).value  = "";     //dsKeys[i]
            }

          }
        }
      }

    }

    //
  }

  //#0.*.key   replace rowId * with real dataset rowId
  replaceDsRowId(row: ExcelJS.Row, dsRowId: number) {
    for (let colId = 1; colId <= row.cellCount; colId++) {
      const cell = row.getCell(colId);
      if(cell && typeof cell.value == "string") {
        cell.value = cell.value.replace("*", dsRowId.toString());
        //console.log(dsRowId, cell.value)
      }
    }
  }
  //#0.*.key
  testIsMultiRow(row: ExcelJS.Row) {
    for (let colId = 1; colId <= row.cellCount; colId++) {
      const cell = row.getCell(colId);
      
      if(cell && typeof cell.value == "string" && cell.value.includes("*")) {
        return true;
      }
      return false;
    }
  }

  setRowValues(row: ExcelJS.Row, data:any) {
    for (let i = 1; i <= row.cellCount; i++) {
      //row.getCell(col+i).value = data[i].numberVal;
      //console.log(row, col+i, sheet.getCell(row, col+i).value)
    }
    
  }

  //insert + copy styles
  insertEmptyRows(sheet: ExcelJS.Worksheet, pos: number, num: number) {
    for (let id = 0; id < num - 1; id++) {      //нужно вставить на 1 меньше т.к. одна уже есть !
        const emptyRow = sheet.getRow(pos);   //она станет пустой после вставки
        const oldRow = sheet.getRow(pos+1);  //сюда сдвигается старая строка
        // Вставляем пустую строку
        sheet.spliceRows(pos, 0, []);
        this.copyValueAndRowStyle( oldRow, emptyRow); 
        //в старой строке подставить реальный номер строки датасета, но 1 самый последний!
        this.replaceDsRowId(oldRow, num-id-1);
    }
    //самая верхняя строка с 0 индексом
    const topRow = sheet.getRow(pos);
    this.replaceDsRowId(topRow, 0);
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
        
        //console.log("shift v:"+cell.value, "f:",cell.value); // excel  englisch formulas start mit '='

        if (cell && cell.value && typeof cell.value === "string" && cell.value.startsWith("=")) {
          //replace regex A1...-> A100
          const newFormula = cell.value.replace(rangeRegex, ref => {
            const { col, row } = this.parseCellRef(ref);
            if (row > insertIndex) {
              // Сдвигаем строки, но не трогаем колонки
              return ref.replace(/\d+/, (row + count -2).toString());
            }
            let s = ref;
            return s;
          });
          console.log(newFormula)//  remove '='
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

  //#0.*.key
  parseCellBinding(bind: string)  {
    const delim = ".";

    let parts = bind.split(delim);

    return {
            ds: parts[0].substring(1), 
            id:  parts[1],
            key: parts[2],
    }
  }

}

