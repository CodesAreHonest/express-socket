const config = {
    serverPort  : process.env.serverPort || 3070,
    dbHost      : process.env.dbHost || 'localhost',
    dbPort      : process.env.dbPort || '27017',
    dbName      : process.env.dbName || 'socket'
}

export default config;