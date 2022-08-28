let {MongoClient} = require('mongodb');
let url = 'mongodb://localhost:27017';
const database = 'ecomm'
const client = new MongoClient(url);

 async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database)
    return db.collection('products');
}
module.exports=dbConnect;