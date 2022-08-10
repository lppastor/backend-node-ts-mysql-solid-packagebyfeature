import { Request, Response } from "express";
import { ListarClientesUseCase } from "./ListarClientesUseCase";

export class ListarClientesController {
  constructor(private listarClientesUseCase: ListarClientesUseCase) {}
  //private listarClientesUseCase: ListarClientesUseCase;

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const clientes = await this.listarClientesUseCase.execute();
      return response.json(clientes);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Erro inesperado.",
      });
    }
  }
}

//export default new ListarClientesController();
