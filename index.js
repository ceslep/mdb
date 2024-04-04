import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("BloodCell.mdb");
const reader = new MDBReader(buffer);

const tables=reader.getTableNames(); // ['Cats', 'Dogs', 'Cars']
console.log(tables);

 const table = reader.getTable("LJQCRunResult");
const columns=table.getColumnNames(); // ['id', 'name', 'color']
console.log(columns);
const data=table.getData();
console.log(data); 