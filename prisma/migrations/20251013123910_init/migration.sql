-- CreateTable
CREATE TABLE "public"."Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Attribute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "rangeId" INTEGER,
    "KVSetId" INTEGER,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Value" (
    "id" SERIAL NOT NULL,
    "ts" TIMESTAMP(3) NOT NULL,
    "entityId" INTEGER NOT NULL,
    "attributeId" INTEGER NOT NULL,
    "stringVal" TEXT NOT NULL,
    "numberVal" DOUBLE PRECISION,
    "boolVal" BOOLEAN,
    "dateVal" TIMESTAMP(3),

    CONSTRAINT "Value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."KVSet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "KVSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."KV" (
    "id" SERIAL NOT NULL,
    "setId" INTEGER NOT NULL,
    "key" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "KV_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Range" (
    "id" SERIAL NOT NULL,
    "min" DOUBLE PRECISION,
    "max" DOUBLE PRECISION,

    CONSTRAINT "Range_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AttrType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AttrType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Value_entityId_attributeId_ts_key" ON "public"."Value"("entityId", "attributeId", "ts");

-- CreateIndex
CREATE UNIQUE INDEX "KV_setId_key_key" ON "public"."KV"("setId", "key");

-- AddForeignKey
ALTER TABLE "public"."Attribute" ADD CONSTRAINT "Attribute_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."AttrType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attribute" ADD CONSTRAINT "Attribute_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "public"."Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attribute" ADD CONSTRAINT "Attribute_KVSetId_fkey" FOREIGN KEY ("KVSetId") REFERENCES "public"."KVSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Value" ADD CONSTRAINT "Value_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "public"."Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Value" ADD CONSTRAINT "Value_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "public"."Attribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KV" ADD CONSTRAINT "KV_setId_fkey" FOREIGN KEY ("setId") REFERENCES "public"."KVSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
