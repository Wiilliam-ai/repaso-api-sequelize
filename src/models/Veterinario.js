import {DataTypes} from "sequelize"
import sequelize from "../db/conect.js";

const Veterinario = sequelize.define('Veterinario', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    celphone:{
        type: DataTypes.CHAR(10)
    },
    dni: {
        type: DataTypes.CHAR(8)
    }
  }, {
    // Other model options go here
});

export default Veterinario