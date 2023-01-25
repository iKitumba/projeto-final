const Usuarios = require("../models/Usuarios");
const connection = require("../database");
const { QueryTypes } = require("sequelize");

const {
  GET_A_PROFESSOR_ALL_DATA,
} = require("../row-querys/professor-dashboard");

class ProfessorController {
  async show(req, res) {
    const { tipo_usuario, usuario_id } = req;
    if (tipo_usuario === "PROFESSOR" || tipo_usuario === "PROFESSOR_ADMIN") {
      const results = await connection.query(GET_A_PROFESSOR_ALL_DATA, {
        type: QueryTypes.SELECT,
        replacements: [usuario_id],
      });
      console.log(results);
      return res.json(results);
    } else {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }
  }
}

module.exports = new ProfessorController();
