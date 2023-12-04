import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLiteConnection, CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  _connection: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  _dbConnection!: SQLiteDBConnection; 

  constructor() { }

  public async connect(){

    try {
      this._dbConnection = await this._connection.createConnection(
        environment.databaseName,
        false,
        'no-encryption',
        1,
        false      
      );
      await this._dbConnection.open();
      console.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!CONEXIÓN EXITOSA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    } catch (error) {
      console.error('Error en la conexión a la base de datos: ', error);
    }
    
  }


}
