// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const patients = sequelizeClient.define("patients", {

    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    study_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_records: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    has_new: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    condition: {
      type: DataTypes.TEXT,
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
  };

  return records;
};
