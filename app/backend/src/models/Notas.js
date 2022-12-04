const crypto = require("crypto");
const { Model, DataTypes } = require("sequelize");

class Notas extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        trimestre: {
          type: DataTypes.ENUM("PRIMEIRO", "SEGUNDO", "TERCEIRO"),
          allowNull: false,
        },
        nota_1: DataTypes.TINYINT(2),
        nota_2: DataTypes.TINYINT(2),
        nota_3: DataTypes.TINYINT(2),
      },
      {
        sequelize,
        hooks: {
          beforeCreate: (nota, _) => {
            nota.id = crypto.randomBytes(16).toString("base64url");
          },
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Alunos, {
      foreignKey: "aluno_id",
      as: "aluno",
    });
    this.belongsTo(models.Disciplinas, {
      foreignKey: "disciplina_id",
      as: "disciplina",
    });
  }
}

module.exports = Notas;
