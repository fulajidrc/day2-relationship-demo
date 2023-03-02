'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CinDin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CinDin.init({
    din: DataTypes.STRING,
    cin: {type: DataTypes.STRING, references: {
      model: 'Cin',
      key: 'cin'
    }}
  }, {
    sequelize,
    modelName: 'CinDin',
  });

  CinDin.associate = function(models) {
    CinDin.belongsTo(models.Cin,  {targetKey:'cin', foreignKey: 'cin'})
  };

  return CinDin;
};