
import mysql from 'mysql2/promise'

export function MySQLAdapter() {
    return {
        async getUser(id){
            const conn = await mysql.createConnection({
                host : 'localhost',
                user : 'nodejs',
                password : 'mypassword',
                database : 'workbench'
            })

            const sql = 'SELECT * FROM users'
            
            const [rows, fields] = await conn.query(sql)
            if(rows) return rows
            return null
        }
    }
}