import mongoose from 'mongoose';
import MongoConnection from '../../connection/mongoose';

const schema = mongoose.Schema;
const mongo = new MongoConnection;
const mongo_connection = mongo.connect();

const actionSchema = schema ({
    event_code: String,
    apikey: String,
})

const Action = mongo_connection.model('action', actionSchema);

export default Action;