import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({filename: "./my-northwind.sqlite", driver: sqlite3.Database});

// your work here
const customers = await db.all("SELECT * FROM Customer WHERE Region = $region", {
    $region: "South America"
});
for (const c of customers)
    console.log(c.ContactName);
console.log(`${customers.length} customers`)

await db.close();