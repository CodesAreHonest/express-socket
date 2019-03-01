import Mongoose from 'mongoose';
import config from '../core/config';

Mongoose.Promise = global.Promise;

class MongoConnection {
    constructor() {}

    connect() {
        const {dbHost, dbPort, dbName} = config;

        const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;

        Mongoose.connect(connectionString, {
            useNewUrlParser : true
        });

        return Mongoose;
    }
}

export default MongoConnection;