const Comunicados = require("../models/Comunicados");

class ComunicadosController {
  async index(req, res) {
    const comunicados = await Comunicados.findAll({
      attributes: ["id", "titulo", "conteudo", "created_at"],
      include: { association: "usuario", attributes: ["id", "nome_completo"] },
    });

    return res.json(comunicados);
  }

  async store(req, res) {
    const { titulo, conteudo } = req.body;
    const { tipo_usuario, usuario_id } = req;

    if (tipo_usuario === "ADMIN" || tipo_usuario === "PROFESSOR_ADMIN") {
      if (!titulo) {
        return res
          .status(400)
          .json({ message: "O titulo do comunicado é obrigatorio" });
      }

      try {
        const comunicado = await Comunicados.create({
          titulo,
          conteudo,
          criado_por: usuario_id,
        });

        return res.status(201).json(comunicado);
      } catch (error) {
        return res.status(409).json({
          message: "Ja existe um comunicado com esse titulo",
        });
      }
    } else {
      return res
        .status(401)
        .json({ message: "Nao pode realizar essa operacao" });
    }
  }
}

module.exports = new ComunicadosController();
