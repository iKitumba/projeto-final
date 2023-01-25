const Notas = require("../models/Notas");
const trimestreTypes = require("../constants/tiposTrimestres");
const Alunos = require("../models/Alunos");
const Disciplinas = require("../models/Disciplinas");
const connection = require("../database");
const { QueryTypes, Op } = require("sequelize");

class NotasController {
  async index(req, res) {
    const { aluno_id } = req.params;
    const aluno = await Alunos.findByPk(aluno_id);

    if (!aluno) {
      return res.status(404).json({ message: "Esse aluno nao existe" });
    }

    const notas = await Notas.findAll({
      where: { aluno_id },
      include: [{ association: "disciplina" }],
    });

    return res.json({ aluno, notas });
  }

  async store(req, res) {
    const { trimestre, nota_1, nota_2, nota_3 } = req.body;
    const { tipo_usuario, usuario_id } = req;
    const { disciplina_id, aluno_id } = req.params;
    console.table({ tipo_usuario, usuario_id });
    if (tipo_usuario !== "PROFESSOR" && tipo_usuario !== "PROFESSOR_ADMIN") {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }

    if (!trimestreTypes.includes(String(trimestre).toUpperCase())) {
      return res.status(400).json({ message: "Trimestre invalido" });
    }

    const aluno = await Alunos.findByPk(aluno_id);
    const disciplina = await Disciplinas.findByPk(disciplina_id);

    if (!aluno) {
      return res.status(404).json({ message: "Esse aluno nao existe" });
    }

    if (!disciplina) {
      return res.status(404).json({ message: "Essa disciplina nao existe" });
    }

    let results = await connection.query(
      "SELECT * FROM professor_disciplina_turma WHERE professor_id = ? AND disciplina_id = ? AND turma_id = ?",
      {
        type: QueryTypes.SELECT,
        replacements: [usuario_id, disciplina_id, aluno.turma_id],
      }
    );

    if (!results.length) {
      return res.status(400).json({
        message: "Esse professor nao leciona essa disciplina nessa turma",
      });
    }

    try {
      let nota = await Notas.findOne({
        where: { disciplina_id, aluno_id, trimestre },
      });

      if (nota) {
        return res.json(nota);
      } else {
        nota = await Notas.create({
          nota_1,
          nota_2,
          nota_3,
          disciplina_id,
          aluno_id,
          trimestre,
        });
        return res.status(201).json(nota);
      }
    } catch (error) {
      return res
        .status(409)
        .json({
          message: "Houve um erro no lançamento das notas, tente novamente",
          error,
        });
    }
  }

  async update(req, res) {
    const { nota_1, nota_2, nota_3 } = req.body;
    const { aluno_id, nota_id } = req.params;
    const { tipo_usuario, usuario_id } = req;

    if (tipo_usuario !== "PROFESSOR" && tipo_usuario !== "PROFESSOR_ADMIN") {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }

    const aluno = await Alunos.findByPk(aluno_id);

    if (!aluno) {
      return res.status(404).json({ message: "Esse aluno nao existe" });
    }

    const nota = await Notas.findOne({
      where: { [Op.and]: [{ id: nota_id }, { aluno_id }] },
    });

    if (!nota) {
      return res.status(404).json({ message: "Notas nao encontrada" });
    }

    const results = await connection.query(
      "SELECT * FROM professor_disciplina_turma WHERE turma_id = ? AND professor_id = ? AND disciplina_id = ? LIMIT 1",
      {
        type: QueryTypes.SELECT,
        replacements: [aluno.turma_id, usuario_id, nota.disciplina_id],
      }
    );

    if (!results.length) {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }

    try {
      await nota.update({ nota_1, nota_2, nota_3 });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Todas as notas devem estar no intervalo de 0 à 20" });
    }

    return res.json(nota);
  }
}

module.exports = new NotasController();
