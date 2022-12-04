const crypto = require("crypto");
const { Model, DataTypes } = require("sequelize");

class Alunos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome_completo: DataTypes.STRING,
        nome_pai: DataTypes.STRING,
        nome_mae: DataTypes.STRING,
        genero: {
          type: DataTypes.ENUM("M", "F"),
          allowNull: false,
          default: "F",
        },
        foto_perfil: DataTypes.STRING,
        telefone_1: DataTypes.STRING(20),
        telefone_2: DataTypes.STRING(20),
        bi: DataTypes.STRING(14),
        endereco: DataTypes.STRING,
        nascimento: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuarios, {
      foreignKey: "criado_por",
      as: "usuario",
    });

    this.belongsTo(models.Turmas, { foreignKey: "turma_id", as: "turma" });
  }
}

module.exports = Alunos;
