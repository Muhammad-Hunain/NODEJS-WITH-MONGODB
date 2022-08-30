let dbConnect = require('./mongodb')

const insert = async () =>{
    let data = await dbConnect();
    const result = await data.update(
        {name:"Nokia 3310"},{
        $set :{price:600}}
    )
    console.log(result)
 
}
insert()