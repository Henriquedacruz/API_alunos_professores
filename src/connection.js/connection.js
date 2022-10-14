import sequelize from 'sequelize';

//banco usuario senha
const dbsequelize = new sequelize('observatorio', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

dbsequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

export default  dbsequelize;