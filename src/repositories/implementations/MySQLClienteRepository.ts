import { Cliente } from "../../entities/Cliente";
import { IClientRepository } from "../IClienteRepository";

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_backend",
});

export class MySQLClienteRepository implements IClientRepository {
  getById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Cliente[]> {
    let sql = "SELECT cliente.* FROM cliente LIMIT 10;";
    return new Promise((resolve, reject) => {
      db.query(sql, (err: any, result: any) => {
        if (err) return reject(err);
        else return resolve(result);
      });
    });
  }
  create(cliente: Cliente): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(cliente: Cliente): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(cliente: Cliente): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  buscar(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
