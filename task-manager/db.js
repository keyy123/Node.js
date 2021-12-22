


const chalk = require('chalk')
const {MongoClient, ObjectId} = require('mongodb')
//const MongoClient = mongodb.MongoClient this is the same as above
const url = "mongodb://127.0.0.1:27017"
const dbName = "task-manager"



MongoClient.connect(url,{useNewUrlParser:true}, (error,client)=>{
    if(error){
        return console.log(chalk.bgRed(`Unable to link to database: ${error.message}`))
    }
    const db = client.db(dbName)
    
    // db.collection('tasks').insertMany([
    //     {task: "Clean Room", done: false},
    //     {task: "Buy Food", done: true},
    //     {task: "Shower", done: false},
    //     {task: "Hang up clean clothes", done: false},
    //     {task: "Workout", done: false}
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents into collection')
    //     }
    //     return console.log(`Inserted ${result.insertedCount} documents into collection`)
    // })

    // db.collection('tasks').find({done:false}).toArray((error, result)=>{
    //     if(error){
    //         return console.log('Unable to find documents matching that query')
    //     }
    //     console.log(result)
    // })

    // db.collection('tasks').findOne(new ObjectId('61c2c9b366a650e7fe7a9cd7'), (error,result)=>{
    //     if(error){
    //         return console.log('Unable to find a document with that ID')
    //     }
    //     console.log(result)
    // })


// const dbPromise = db.collection('users').updateOne({_id: new ObjectId("61c2b8d249ef765899052852")},{$set:{name:"Bryant Mitchell", age:50}})

// dbPromise.then((result)=>{
//     return console.log(chalk.bgGreen('updated document successfully. Check Robo3T! :)',Object.entries(result)))
// }).catch((error)=>{
//     return console.log(chalk.bgRedBright('Unable to update the document...', error))
// })
// })
// db.collection('users')
// .updateOne({_id: new ObjectId("61c2b8d249ef765899052852")},
// {$set:{name:"Bryant Mitchell", age:50}})
// .then((result)=>{
// return console.log(chalk.bgGreen("updated document successfully. Check Robo3T! :)", Object.entries(result)))
// }).catch((error)=>{
// return console.log(chalk.bgRed("Unable to update the document...", error))
// })

db.collection('tasks').updateMany({done:false},{$set:{done:true}})
.then((result)=>{
    return console.log(chalk.blueBright.underline.inverse('You did your tasks!Woo!!', result.acknowledged))
}
).catch((error)=>{
    return console.log(chalk.bgRedBright('Error',error))
})



})