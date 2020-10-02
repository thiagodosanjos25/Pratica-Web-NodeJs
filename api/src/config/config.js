module.exports = {
  development : {
          database : {
              host: 'localhost', // O host do banco. Ex: localhost
              port: '3307', // Porta a ser utilizada para conexão com o banco
              user: 'root', // Um usuário do banco.  
              password: '', // A senha do usuário. 
              database: 'agendamento' // Nome da base de dados que vai ser utilizada
      }
  }

};

// CREATE TABLE IF NOT EXISTS `agendamento` (
//  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//  email varchar(255) NOT NULL,
//  nome varchar(255) NOT NULL,
///  ativo BOOLEAN DEFAULT false
//) ENGINE=InnoDB DEFAULT CHARSET=utf8;