
module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
      name: {
        type: DataTypes.STRING,
        defaultValue: 'Chernobyl Hot Wings',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: 'Spicy',
        allowNull: false,
      },
      price: {
        type: DataTypes.INT,
        allowNull: false,
      }
    });
    return Food;
  };
