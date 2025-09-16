// importando elementos
import * as  SQLite from 'expo-sqlite';

// conexão
let db: SQLite.SQLiteDatabase | null = null;

// conectar
async function Conexao() {
  try {
    if(!db){
      db = await SQLite.openDatabaseAsync('PAM2');
      console.log('Banco aberto');
    }
    return db;
  } catch (error) {
    console.log('Erro ao abrir banco: ' + error);
  }
}

// criando banco de dados
async function createTable(db: SQLite.SQLiteDatabase) {
  try {
    await db.execAsync(
      `PRAGMA journal_mode = WAL;
       CREATE TABLE IF NOT EXISTS Funcionarios ( 
          Id_fun INTEGER PRIMARY KEY AUTOINCREMENT, 
          nome_fun VARCHAR(50),
          email_fun VARCHAR(50),
          depto_fun VARCHAR(30),
          cargo_fun VARCHAR(20)
       );` 
    );
    console.log('Tabela Funcionarios criada ou já existente');
  } catch (erro) {
    console.log('Erro ao criar tabela: ' + erro);           
  }
}


// deletando banco de dados
async function dropTable(db: SQLite.SQLiteDatabase, tableName: string) {
  try { 
    await db.execAsync(`DROP TABLE IF EXISTS ${tableName};`);
    console.log(`Tabela ${tableName} excluída com sucesso.`);
  } catch (error) {
    console.log(`Erro ao excluir a tabela ${tableName}: ` + error);
  }
}

// add
async function inserirFunc(db: SQLite.SQLiteDatabase, nome:string, email:string, depto:string, cargo:string) {
  try {
    await db.runAsync(
      "INSERT INTO Funcionarios ( nome_fun, email_fun, depto_fun, cargo_fun  ) VALUES(?, ?, ?, ?) ", [nome, email, depto, cargo]
    );
  } catch (error) {
    console.log('Erro ao inserir funcionário ' + error);
  }
}

// geral
async function selectFunc(db: SQLite.SQLiteDatabase) {
  try {
    const result = await db.getAllAsync(`
      SELECT 
        Id_fun as id, 
        nome_fun as nome, 
        email_fun as email, 
        depto_fun as depto, 
        cargo_fun as cargo
      FROM Funcionarios
    `);
    return result;
  } catch (error) {
    console.log('Erro ao buscar funcionários:', error);
    return [];
  }
}

// view
async function selectFuncId(db: SQLite.SQLiteDatabase, id: number) {
  try {
    const result = await db.getFirstAsync(
      'SELECT Id_fun as id, nome_fun as nome, email_fun as email, depto_fun as depto, cargo_fun as cargo FROM Funcionarios WHERE Id_fun = ?', 
      [id]  
    );
    return result;
  } catch (error) {
    console.log('Erro ao buscar funcionário: ' + error);
  }
}

// edit
async function updateFunc(db:SQLite.SQLiteDatabase, id:number, nome:string, email:string, depto:string, cargo:string) {
  try {
    await db.runAsync('UPDATE Funcionarios SET nome_fun = ?, email_fun = ?, depto_fun = ?, cargo_fun = ? WHERE Id_fun = ?', nome, email, depto, cargo, id);
    console.log(`Funcionário com ID ${id} atualizado com sucesso.`);
  } catch (error) {
    console.log(`Erro ao atualizar funcionário com ID ${id}: ` + error);
  }
}

// delete 
async function deleteFunc(db:SQLite.SQLiteDatabase, id:number) {
  try {
    await db.runAsync('DELETE FROM Funcionarios WHERE Id_fun = ?', id);
  } catch (error) {
    console.log(`Erro ao excluir funcionário com ID ${id}: ` + error);
  }
}

// exportando funções
export { Conexao, createTable, inserirFunc, selectFunc, selectFuncId, dropTable, deleteFunc, updateFunc };
