// yo chai user model export garna ho
module.exports = (sequelize, DataTypes) => {

    // yo chai "user" naam ko table define garna ho
    const User = sequelize.define("user", {

      email: { 
        type: DataTypes.STRING, // yo chai email ko data type string ho
        allowNull: false, // yo chai email empty hunu hudaina
      },

      password: {
        type: DataTypes.STRING, // yo chai password string ma store hunxa
        allowNull : false // yo chai password compulsory ho
      },

      username: {
        type: DataTypes.STRING, // yo chai username string ho
        allowNull:false // yo chai username pani empty hunu hudaina
      }

    });

    return User; // yo chai model return garna ho jasko use aru file ma hunxa
};

