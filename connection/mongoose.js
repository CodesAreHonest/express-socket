import Mongoose from 'mongoose';
import config from '../core/config';

Mongoose.Promise = global.Promise;

class MongoConnection {
    constructor() {}

    connect() {

        const {dbHost, dbPort, dbName} = config;

        try {
            const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;

            Mongoose.connect(connectionString, {
                useNewUrlParser : true
            });

        }
        catch (err) {
            console.log (`error connection to mongodb ${err}`)
        }

        return Mongoose;
    }
}

export default MongoConnection;