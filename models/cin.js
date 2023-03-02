'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cin.init({
    cin: { type: DataTypes.STRING, references: {
      model: 'CinDin',
      key: 'cin'
    }}
  }, {
    sequelize,
    modelName: 'Cin',
  });
  // /CinDinCin
  Cin.associate = function(models) {
    Cin.hasMany(models.CinDin, { foreignKey: 'cin', otherKey:'cin', sourceKey:'cin'})
  };
  return Cin;
};