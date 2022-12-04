const { Router } = require("express");
const multer = require("multer");
const UsuariosController = require("./controllers/UsuariosController");
const SessaoController = require("./controllers/SessaoController");
const CursosController = require("./controllers/CursosController");
const TurmasController = require("./controllers/TurmasController");
const DisciplinasController = require("./controllers/DisciplinasController");
const ComunicadosController = require("./controllers/ComunicadosController");
const ProfessorDisciplinaController = require("./controllers/ProfessorDisciplinaController");
const ProfessorController = require("./controllers/ProfessorController");
const AlunosController = require("./controllers/AlunosController");

const authMiddleware = require("./middlewares/auth");

const uploadConfig = require("./config/upload");
const NotasController = require("./controllers/NotasController");

const routes = Router();

routes.post("/usuarios/sessao", SessaoController.store);
routes.get("/usuarios", authMiddleware, UsuariosController.index);
routes.post(
  "/usuarios",
  authMiddleware,
  multer(uploadConfig).single("foto_perfil"),
  UsuariosController.store
);

/**
 * Rotas sobre Cursos
 */

routes.get("/cursos", CursosController.index);
routes.post("/cursos", authMiddleware, CursosController.store);

routes.get("/cursos/:curso_id/turmas", TurmasController.index);
routes.post("/cursos/:curso_id/turmas", authMiddleware, TurmasController.store);
routes.get("/turmas/:turma_id", authMiddleware, TurmasController.show);

routes.get("/disciplinas", DisciplinasController.index);
routes.post("/disciplinas", authMiddleware, DisciplinasController.store);

routes.get("/comunicados", ComunicadosController.index);
routes.post("/comunicados", authMiddleware, ComunicadosController.store);

routes.get(
  "/professores_disciplinas_turmas",
  authMiddleware,
  ProfessorDisciplinaController.index
);
routes.post(
  "/turmas/:turma_id/disciplinas/:professor_id",
  authMiddleware,
  ProfessorDisciplinaController.store
);

routes.get("/professores/dashboard", authMiddleware, ProfessorController.show);

routes.get("/turmas/:turma_id/alunos", authMiddleware, AlunosController.index);
routes.post(
  "/turmas/:turma_id/alunos",
  authMiddleware,
  multer(uploadConfig).single("foto_perfil"),
  AlunosController.store
);

routes.get("/alunos/:aluno_id/notas", NotasController.index);
routes.post(
  "/disciplinas/:disciplina_id/alunos/:aluno_id/notas",
  authMiddleware,
  NotasController.store
);

routes.patch(
  "/notas/:nota_id/alunos/:aluno_id",
  authMiddleware,
  NotasController.update
);

module.exports = routes;
