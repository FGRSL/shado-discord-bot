const Sequelize = require("sequelize");
const sequelize = new Sequelize('miyuki_shiba', 'root', '', {
    host: "localhost",
    dialect: 'mysql'

});

function inicialize() {
    sequelize.authenticate().then(function () {
        console.log("|-----------------------------------------------------------------------------------------------------------------|");
        console.log("|- BANCO DE DADOS ONLINE!" + " HORARIO DE INICIALIZAÇÃO " + new Date() + "-|");
        console.log("|-----------------------------------------------------------------------------------------------------------------|");
    }).catch(function (error) {
        console.log("FALHA NA CONEXÃO!!!" + "HORA DE FALHA " + new Date() + "ERRO: " + +error);
    });
}
function updateDataBase(dataName, property, change){

}

const user = sequelize.define('guild', {
    id: {
        type: Sequelize.STRING(30),
        primaryKey: true
    },
    guild_name: {
        type: Sequelize.STRING(30)
    }
});


module.exports = { inicialize, updateDataBase };