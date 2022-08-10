import { Cliente } from "../entities/Cliente";

export interface IClientRepository {
  create(cliente: Cliente): Promise<boolean>;
  delete(cliente: Cliente): Promise<boolean>;
  update(cliente: Cliente): Promise<boolean>;
  getById(id: string): Promise<boolean>;
  getAll(): Promise<Cliente[]>;
}
