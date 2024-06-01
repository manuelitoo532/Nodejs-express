const sql = require('mssql');

async function connectDatabase(){
  try{
    await sql.connect({
      user: 'cmortez',
      password: '12345678',
      server: 'localhost',
      database: 'TaskManager',
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    });
    console.log('Connected to database')
  }catch(e){
    console.error('Error connecting to database: ' + e.mes)
  }
}

module.exports = {
  connectDatabase
}