const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


//Todo.findOneAndRemove
//Todo.findByIdAndRemov

Todo.findByIdAndRemove('5b9d716f1f4028bb635bc1ac').then((todo) => {
  console.log(todo);
})
