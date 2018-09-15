const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var userID = '5b957c40998129841ab477d8';

var id = '5b9d5ec8c1bd832418be41b3';
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User By Id: ', JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e))
