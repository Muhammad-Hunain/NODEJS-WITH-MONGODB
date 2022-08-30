let dbConnect = require('./mongodb')

const delet = async () =>{
    let db = await dbConnect()
    let result = await db.deleteOne({name:"3310"})
    console.log(result)
    if( result.acknowledged){
        console.log("Deleted")
    }
}
delet()