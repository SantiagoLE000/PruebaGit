const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

   //Mayuscula y singular         minuscula y singular          
const Movie = sequelize.define('movie', {
 // Se definen las columnas
 name: { // Nombre de la columna
    type: DataTypes.TEXT, // Tipo de dato
    allowNull: false, // Opcional, por defecto es true y permite que el campo este vacio
  //  unique: true // Opcional por defecto es false y permite que se repitan registros 
},
    image: { // Nombre de la columna
        type: DataTypes.TEXT, // Tipo de dato
        allowNull: false, // Opcional, por defecto es true y permite que el campo este vacio
      //  unique: true // Opcional por defecto es false y permite que se repitan registros 
    },
    sypnosis: { // Nombre de la columna
        type: DataTypes.STRING, // Tipo de dato
        allowNull: false, // Opcional, por defecto es true y permite que el campo este vacio
      //  unique: true // Opcional por defecto es false y permite que se repitan registros 
    },
    releaseYear: { // Nombre de la columna
        type: DataTypes.INTEGER, // Tipo de dato
        allowNull: false, // Opcional, por defecto es true y permite que el campo este vacio
      //  unique: true // Opcional por defecto es false y permite que se repitan registros 
    },
},
   {
   timestamps: false, // Opcional, por defecto true y permite que se generen los campos “createdAt” y “updatedAt”
   });

module.exports = Movie;