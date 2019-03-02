const config = {
    serverPort  : process.env.serverPort || 3070,
    dbHost      : process.env.dbHost || '127.0.0.1',
    dbPort      : process.env.dbPort || '27017',
    dbName      : process.env.dbName || 'socket'
}

export default config;