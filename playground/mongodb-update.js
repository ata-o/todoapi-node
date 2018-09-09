const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b9569a323bf3af18470cd4e')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b956a8623bf3af18470cda9')
  }, {$inc: {age: 1}, $set: {name: 'Beyza'}}, {returnOriginal: false}).then((result) => {
    console.log(result);
  })

  db.close();
});
