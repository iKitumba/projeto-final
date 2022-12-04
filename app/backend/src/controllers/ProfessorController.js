const Usuarios = require("../models/Usuarios");
const connection = require("../database");
const { QueryTypes } = require("sequelize");

class ProfessorController {
  async show(req, res) {
    const { tipo_usuario, usuario_id } = req;
    if (tipo_usuario === "PROFESSOR" || tipo_usuario === "PROFESSOR_ADMIN") {
      const results = await connection.query(
        "SELECT professor_disciplina_turma.id AS pdt_id, professor_disciplina_turma.professor_id, professor_disciplina_turma.disciplina_id, professor_disciplina_turma.turma_id, turmas.letra AS t_letra, turmas.classe AS t_classe, turmas.turno AS t_turno, usuarios.nome_completo AS p_nome_completo, usuarios.genero AS p_genero, usuarios.telefone AS p_telefone, disciplinas.titulo AS d_titulo, disciplinas.diminuitivo AS d_diminuitivo, cursos.titulo as c_titulo, cursos.diminuitivo as c_diminuitivo FROM professor_disciplina_turma INNER JOIN turmas ON professor_disciplina_turma.turma_id = turmas.id INNER JOIN usuarios ON professor_disciplina_turma.professor_id = usuarios.id INNER JOIN disciplinas ON professor_disciplina_turma.disciplina_id = disciplinas.id INNER JOIN cursos ON turmas.curso_id = cursos.id WHERE professor_disciplina_turma.professor_id = ?",
        {
          type: QueryTypes.SELECT,
          replacements: [usuario_id],
        }
      );
      return res.json(results);
    } else {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }
  }
}

module.exports = new ProfessorController();
