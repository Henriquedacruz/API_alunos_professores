const Sequelize = require('sequelize');
const db = require('./db');

const File = db.define('File', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    file: {
        type: Sequelize.STRING
    }
});

//Criar a tabela
//File.sync();

module.exports = File;