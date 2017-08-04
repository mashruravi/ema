const express = require('express');

const app = express();

// app.use();

app.listen(4321, () => {
  console.log('Listening on port 4321...');
});

app.get('/ema/data/services/current-user.xsjs', (req, res) => {
  res.status(200).json({
    username: 'MASHRU',
    fullName: 'Ravi Mashru'
  });
});