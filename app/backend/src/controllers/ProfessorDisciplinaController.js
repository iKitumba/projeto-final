const { QueryTypes } = require("sequelize");
const crypto = require("crypto");
const Usuarios = require("../models/Usuarios");
const Disciplinas = require("../models/Disciplinas");
const Turmas = require("../models/Turmas");

const connection = require("../database");

class ProfessorDisciplinaController {
  async index(req, res) {
    const query = await connection.query(
      "SELECT professor_disciplina_turma.id AS pdt_id, professor_disciplina_turma.professor_id, professor_disciplina_turma.disciplina_id, professor_disciplina_turma.turma_id, turmas.letra AS t_letra, turmas.classe AS t_classe, turmas.turno AS t_turno, usuarios.nome_completo AS p_nome_completo, usuarios.genero AS p_genero, usuarios.telefone AS p_telefone, disciplinas.titulo AS d_titulo, disciplinas.diminuitivo AS d_diminuitivo FROM professor_disciplina_turma INNER JOIN turmas ON professor_disciplina_turma.turma_id = turmas.id INNER JOIN usuarios ON professor_disciplina_turma.professor_id = usuarios.id INNER JOIN disciplinas ON professor_disciplina_turma.disciplina_id = disciplinas.id;",
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.json(query);
  }

  async store(req, res) {
    const { tipo_usuario, usuario_id } = req;
    const { turma_id, professor_id } = req.params;
    const { titulo, diminuitivo } = req.body;

    if (tipo_usuario === "ADMIN" || tipo_usuario === "PROFESSOR_ADMIN") {
      const professor = await Usuarios.findByPk(professor_id);

      if (!professor) {
        return res.status(404).json({ message: "Esse professor nao existe" });
      }

      if (
        professor.tipo_usuario === "PROFESSOR" ||
        professor.tipo_usuario === "PROFESSOR_ADMIN"
      ) {
        const turma = await Turmas.findByPk(turma_id);

        if (!turma) {
          return res.status(404).json({ message: "Essa turma nao existe" });
        } else {
          const [disciplina] = await Disciplinas.findOrCreate({
            where: { titulo, diminuitivo },
          });

          // await professor.addTurmasAndDisciplinas([turma, disciplina]);
          const id = crypto.randomBytes(16).toString("base64url");
          let results = await connection.query(
            "SELECT * FROM professor_disciplina_turma WHERE professor_id = ? AND disciplina_id = ? AND turma_id = ?",
            {
              type: QueryTypes.SELECT,
              replacements: [professor_id, disciplina.id, turma_id],
            }
          );

          if (results.length) {
            return res.status(200).json();
          } else {
            results = await connection.query(
              `INSERT INTO professor_disciplina_turma(id, professor_id, disciplina_id, turma_id) VALUES(?, ?, ?, ?)`,
              {
                type: QueryTypes.INSERT,
                replacements: [id, professor_id, disciplina.id, turma_id],
              }
            );

            return res.status(201).json();
          }
        }
      } else {
        return res
          .status(400)
          .json({ message: "Esse usuario nao e um professor" });
      }
    } else {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }
  }
}

module.exports = new ProfessorDisciplinaController();
