import sequelize from 'sequelize';

import db from '../connection.js/connection.js';

const Image = db.define('imagens', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: sequelize.STRING
    }
});

//Criar a tabela
//Image.sync();

export default  Image;