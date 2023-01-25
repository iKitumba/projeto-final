const { QueryTypes } = require("sequelize");
const crypto = require("crypto");
const Usuarios = require("../models/Usuarios");
const Disciplinas = require("../models/Disciplinas");
const Turmas = require("../models/Turmas");

const {
  GET_PROFESSOR_DISCIPLINA_TURMA_ALL_DATA,
  GET_A_PROFESSOR_DISCIPLINA_TURMA,
  INSERT_A_PROFESSOR_DISCIPLINA_TURMA,
} = require("../row-querys/professor-disciplina-turma");

const connection = require("../database");

class ProfessorDisciplinaController {
  async index(req, res) {
    const query = await connection.query(
      GET_PROFESSOR_DISCIPLINA_TURMA_ALL_DATA,
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.json(query);
  }

  async store(req, res) {
    const { tipo_usuario, usuario_id } = req;
    const { professor_id, disciplina_id, turma_id } = req.params;

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
        }

        const disciplina = await Disciplinas.findByPk(disciplina_id);

        if (!disciplina) {
          return res
            .status(404)
            .json({ message: "Essa disciplina nao existe" });
        }

        const id = crypto.randomBytes(16).toString("base64url");
        let results = await connection.query(GET_A_PROFESSOR_DISCIPLINA_TURMA, {
          type: QueryTypes.SELECT,
          replacements: [professor_id, disciplina_id, turma_id],
        });

        if (results.length) {
          return res.status(200).json();
        } else {
          results = await connection.query(
            INSERT_A_PROFESSOR_DISCIPLINA_TURMA,
            {
              type: QueryTypes.INSERT,
              replacements: [id, professor_id, disciplina_id, turma_id],
            }
          );

          return res.status(201).json();
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
