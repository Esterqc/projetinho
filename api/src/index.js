
import 'dotenv/config';

import loginClienteController from './controller/loginClienteController.js';
import OrcamentoController from './controller/OrcamentoController.js';

import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.use(loginClienteController);
server.use(OrcamentoController);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta " + PORT));