import { uuid } from "uuidv4";

export class Cliente {
  public readonly id: string;
  public nomerazaosocial: string;
  public endereco: string;
  public numero: string;

  constructor(props: Omit<Cliente, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      id = uuid();
    }
  }
}
