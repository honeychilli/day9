const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  const userData = {
    name: 'Arpit',
    id: 1,
    phoneNumber: '999999999'
  };
  res.json(userData);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});