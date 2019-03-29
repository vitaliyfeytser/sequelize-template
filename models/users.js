
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      firstName: {
        type: DataTypes.STRING,
        defaultValue: 'Hello',
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: 'World',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INT,
        allowNull: false,
      }
    });
    return Users;
  };


//   module.exports = function(sequelize, DataTypes) {
//     var Users = sequelize.define("Users", {
//       firstName: {
//         type: DataTypes.STRING,
//         // AllowNull is a flag that restricts a todo from being entered if it doesn't
//         // have a text value
//         allowNull: false,
//         // len is a validation that checks that our todo is between 1 and 140 characters
//         validate: {
//           len: [1, 140]
//         }
//       },
//       complete: {
//         type: DataTypes.BOOLEAN,
//         // defaultValue is a flag that defaults a new todos complete value to false if
//         // it isn't supplied one
//         defaultValue: false
//       }
//     });
//     return Todo;
//   };