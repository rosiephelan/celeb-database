const {MongoClient} = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const url = "mongodb://127.0.0.1:27017"
 

    const client = new MongoClient(url);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);

        client.collection('celebrities', function (err, collection) {
        
            collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
            collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
            collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
            
            
    
            db.collection('Persons').count(function (err, count) {
                if (err) throw err;
                
                console.log('Total Rows: ' + count);
            });
        });
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://127.0.0.1:27017';

// const dbName = 'celebrities'
// let db

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err)

//   // Storing a reference to the database so you can use it later
//   db = client.db(dbName)
//   console.log(`Connected MongoDB: ${url}`)
//   console.log(`Database: ${dbName}`)
//   console.log(db);
// })