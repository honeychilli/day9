const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/api/user', (req, res) => {
  const userData = {
    name: 'Arpit',
    
    phoneNumber: '999999999'
  };
  //send data to mongoDB
  mongoose.connect('mongodb+srv://arpitpandeyyyy:arpitpandey@deloitte.daxpn.mongodb.net/', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');    
  }).catch((err) => {
    console.log(err);
  })
  const User = mongoose.model('User', { name: String, id:{
    type: Number,
    required: true
  }, phoneNumber: String });
  const user = new User(userData);
  user.save();
  res.json(userData);

});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});