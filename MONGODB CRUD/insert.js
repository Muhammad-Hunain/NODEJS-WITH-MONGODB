let dbConnect = require('./mongodb')

const insert = async () =>{
    let data = await dbConnect();
    const result = data.insert(
        [
        {
            name:'3310',
            brand:'Nokia',
            category:'Mobile',
            price:500
        },
        {
            name:'3322',
            brand:'Nokia',
            category:'Mobile',
            price:700
        },
        {
            name:'3322',
            brand:'Nokia',
            category:'Mobile',
            price:800
        }
        
    ]
    )
}
insert()