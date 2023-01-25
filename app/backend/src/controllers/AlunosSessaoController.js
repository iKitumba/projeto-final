const Alunos = require("../models/Alunos");

class AlunosSessionController {
  async store(req, res) {
    const { nome_completo, bi } = req.body;
    const aluno = await Alunos.findOne({ where: { nome_completo } });

    if (!aluno) {
      return res.status(404).json({ message: "Aluno nao encontrado" });
    }

    if (aluno.bi !== bi) {
      return res.status(401).json({ message: "BI invalido" });
    }

    return res.json({ aluno });
  }
}

module.exports = new AlunosSessionController();
