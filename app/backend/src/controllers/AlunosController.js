const Alunos = require("../models/Alunos");
const path = require("path");
const fs = require("fs");
const generoTpes = require("../constants/tiposGeneros");
const Turmas = require("../models/Turmas");

class AlunosController {
  async index(req, res) {
    const tipo_usuario = req.tipo_usuario;
    const { turma_id } = req.params;

    if (tipo_usuario) {
      const turma = await Turmas.findByPk(turma_id);

      if (!turma) {
        return res.status(404).json({ message: "Essa turma nao existe" });
      }

      const alunos = await Alunos.findAll({
        where: { turma_id },
        attributes: ["id", "nome_completo", "foto_perfil", "genero"],
      });

      return res.json(alunos);
    } else {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }
  }

  async store(req, res) {
    const {
      nome_completo,
      genero,
      nome_pai,
      nome_mae,
      telefone_1,
      telefone_2,
      bi,
      endereco,
      nascimento,
    } = req.body;
    const { filename: foto_perfil } = req.file;
    const { tipo_usuario, usuario_id } = req;
    const { turma_id } = req.params;

    const possibleAluno = await Alunos.findOne({ where: { bi } });

    if (possibleAluno) {
      return fs.unlink(
        path.resolve(__dirname, "..", "..", "uploads", "profile", foto_perfil),
        (err) => {
          if (err) {
            console.log(err);
          }
          return res.status(409).send({ message: "Esse aluno ja existe" });
        }
      );
    }

    const turma = await Turmas.findByPk(turma_id);

    if (!turma) {
      return res.status(404).json({ message: "Essa turma nao existe" });
    }

    if (tipo_usuario === "ADMIN" || tipo_usuario === "PROFESSOR_ADMIN") {
      if (!generoTpes.includes(String(genero).toUpperCase())) {
        return fs.unlink(
          path.resolve(
            __dirname,
            "..",
            "..",
            "uploads",
            "profile",
            foto_perfil
          ),
          (err) => {
            if (err) {
              console.log(err);
            }
            return res.status(400).send({ message: "Tipo de genero invalido" });
          }
        );
      }

      try {
        const aluno = await Alunos.create({
          nome_completo,
          genero: genero.toUpperCase(),
          nome_pai,
          nome_mae,
          telefone_1,
          telefone_2,
          foto_perfil,
          bi,
          endereco,
          nascimento,
          turma_id,
          criado_por: usuario_id,
        });

        return res.status(201).json(aluno);
      } catch (error) {
        return fs.unlink(
          path.resolve(
            __dirname,
            "..",
            "..",
            "uploads",
            "profile",
            foto_perfil
          ),
          (err) => {
            if (err) {
              console.log(err);
            }

            const errorMessage = new Error(error).message;
            console.clear();
            console.log(errorMessage);
            return res.status(409).send({
              message: `Esse aluno ja existe`,
            });
          }
        );
      }
    } else {
      return fs.unlink(
        path.resolve(__dirname, "..", "..", "uploads", "profile", foto_perfil),
        (err) => {
          if (err) {
            console.log(err);
          }
          return res
            .status(401)
            .json({ message: "Nao pode realizar essa operacao" });
        }
      );
    }
  }
}

module.exports = new AlunosController();
