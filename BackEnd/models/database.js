import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

class Database {

    constructor () {
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);

        this.#initDatebase()
    }


    async createAccount (user, senha) {

        const db = await this.#getDB()

        await db.run('INSERT INTO users (user, senha) VALUES (?, ?)', [user, senha]);

        db.close()

    }

    async readAllAccounts () {

        const db = await this.#getDB()

        const rows = await db.all("SELECT * FROM users")

        db.close()

        return rows

    }

    async deleteUserFromUser (user) {

        const db = await this.#getDB()

        await db.run("DELETE FROM users WHERE user = ?", [user])

        db.close()

    }


    async #initDatebase() {
        const db = await this.#getDB();
        
        await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            senha TEXT NOT NULL
        )
        `);
    
        console.log('Banco de dados e tabela criados com sucesso!');
        await db.close();
    }

    async #getDB() {
        return open({
          filename: path.join(this.__dirname, '../datas/usuarios.db'),
          driver: sqlite3.Database
        });
    }

}

const database = new Database()

export default database
