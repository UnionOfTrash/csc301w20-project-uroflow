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
    patient_id: {
      type: DataTypes.UUID,
      allowNull: false
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
    records.belongsTo(models["patients"], { foreignKey: "patient_id" });
  };

  return records;
};
