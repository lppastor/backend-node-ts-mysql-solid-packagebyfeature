import { Router } from "express";
import { listarClientesController } from "./useCases/ListarClientes";

const router = Router();

router.get("/cliente/all", (req, res) => {
  return listarClientesController.handle(req, res);
});

export { router };
