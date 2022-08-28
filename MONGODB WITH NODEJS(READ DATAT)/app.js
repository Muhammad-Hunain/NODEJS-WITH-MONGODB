// let {MongoClient} = require('mongodb');
// let url = 'mongodb://localhost:27017';
// const database = 'ecomm'
// const client = new MongoClient(url);
let dbConnect = require('./mongodb')
// =============================
// First way to Read the Data
// =====================

// async function getdata(){
//     let result = await client.connect();
//     let  db = result.db(database);
//     let collection = db.collection('products');
//     let response =  await collection.find({}).toArray();
//     console.log(response);
// } 
// getdata();

// 
// ================================
// Second way to Read the Data
// =================

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database)
//     return db.collection('products');
// }

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })


// ================================
// Third way to Read the Data  by External File
// =================

const main = async () => {
let data = await dbConnect();
data = await data.find().toArray()
console.log(data)
}
main()