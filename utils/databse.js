//////////////////////////////////////////////// IMPORTED DEPENDENCIES/////////////////////////////////////////////////////////////////////////////////
import { openDatabase } from "expo-sqlite";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// THE CODE FOUND ON THIS PAGE HAS BEEN MODIFIED BY REMOVING TWO const functions, otherwise remains the same, all rights to this ///////
///// database belong to OMAR ATARI AND THE EASY SCAN PROJECT AND HAS BEEN USED IN THIS PROJECT WITH CREDIT TO THE ORIGINAL DEVELOPER /////////
//////////////////////////////////// which can be found here https://github.com/OmarATARI/EasyScan ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const initialising the databse Pre-existing application database for easy scan, to add to the growing data in its library
const db = openDatabase("EasyScan.db");

// const initialising the initdatabase
const initDatabase = () => {
  db.transaction(tx => {
    // execute sql and output this message
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY NOT NULL, 
        is_in_history BOOLEAN, 
        is_favorite BOOLEAN);`,
        // symbol means database initialised
      [],
      () => console.log("Database initialized !"),
      // if not then error messaged outputted with the error
      (_, error) => console.error(`SQLite - database initalization error : ${error}`)
    );
  })
}

// const initialising the insert product variable and data
const insertProduct = (id_product, is_in_history, is_favorite) => {
  db.transaction(tx => {
    // execute sql
    tx.executeSql(
      // output said message
      `INSERT OR REPLACE INTO Products (
        id, 
        is_in_history, 
        is_favorite) values (?, ?, ?);`,
        // input into such IDs
      [id_product, is_in_history, is_favorite],
      (_, { rows: { _array } }) => console.log(JSON.stringify(_array)),
      // otherwise output error message
      // (_, error) => console.error(`SQLite - error when inserting new product: ${error}`)
    );
  });
}

// const initialising the get product history
const getProductsHistory = (getProductMethod) => {
  db.transaction(tx => {
    // execute sql and output following message
    tx.executeSql(
      `SELECT * FROM Products WHERE is_in_history = 1`,
      [],
      (_, { rows: { _array } }) => getProductMethod(_array),
      // otherwise output following error message
      (_, error) => console.error(`SQLite - error fetching products from history : ${error}`)
    );
  });
}

// const initialising get products variable
const getProducts = () => {
  db.transaction(tx => {
    // execute sql
    tx.executeSql(
      `SELECT * FROM Products`,
      [],
      (_, { rows: { _array } }) => console.log(_array),
      // otherwise output following error message
      (_, error) => console.error(`SQLite - error fetching products from history : ${error}`)
    );
  });
}

// const initialising clear history variable
const clearHistory = () => {
  db.transaction(tx => tx.executeSql("DELETE FROM Products WHERE is_in_history = 1"));
}

// export all variables to be used in other functions
export { 
  initDatabase,
  insertProduct,
  getProductsHistory,
  getProducts,
  clearHistory }