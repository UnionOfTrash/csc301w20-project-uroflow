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
      primaryKey: true
    },
    condition: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      allowNull: false
    },
    pcomment: {
      type: DataTypes.TEXT
    },
    ccomment: {
      type: DataTypes.TEXT
    },
    user_id: {
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
  };

  return records;
};
