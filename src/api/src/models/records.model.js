// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const records = sequelizeClient.define("records", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    condition: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      allowNull: false
    },
    pcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ccomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    audio_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    curve_id: {
      type: DataTypes.UUID,
      allowNull: true
    }

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  records.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    records.belongsTo(models["users"], { foreignKey: "user_id" });
    records.belongsTo(models["audio"], { foreignKey: "audio_id" });
    records.belongsTo(models["curve"], { foreignKey: "curve_id" });
  };

  return records;
};
