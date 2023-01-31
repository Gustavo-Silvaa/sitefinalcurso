const db = require('./db');

const Comentario = db.sequelize.define('Comentario', {
    nome: {type : db.Sequelize.STRING(50)},
    email: {type : db.Sequelize.STRING(50)},
    comentario: {type : db.Sequelize.STRING(350)}
});

module.exports = Comentario;

// Comentario.sync({force:true}); 
Comentario.sync({force:false}); 