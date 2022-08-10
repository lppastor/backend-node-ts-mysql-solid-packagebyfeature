import { IClientRepository } from "../../repositories/IClienteRepository";

export class ListarClientesUseCase {
  constructor(private clienteRepository: IClientRepository) {}

  async execute() {
    return this.clienteRepository.getAll();
  }
}
