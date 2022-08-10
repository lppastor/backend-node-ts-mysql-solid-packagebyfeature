import { MySQLClienteRepository } from "../../repositories/implementations/MySQLClienteRepository";
import { ListarClientesController } from "./ListarClientesController";
import { ListarClientesUseCase } from "./ListarClientesUseCase";

const mysqlClienteRepository = new MySQLClienteRepository();

const listarClientesUseCase = new ListarClientesUseCase(mysqlClienteRepository);

const listarClientesController = new ListarClientesController(
  listarClientesUseCase
);

export { listarClientesUseCase, listarClientesController };
