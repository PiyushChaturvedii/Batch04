const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    
    MongoClient.connect('mongodb+srv://aeeronbatch04:batchaeeron04@cluster0.jscrwfy.mongodb.net/shop?retryWrites=true')
        .then(client => {
            console.log("Database Connected");
            _db=client.db()
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })    
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;