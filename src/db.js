import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'containers-us-west-34.railway.app',
    user: 'root',
    password: '4NwBUQpZAt5qGpBEFogZ',
    port: '6109',
    database: 'railway'
})