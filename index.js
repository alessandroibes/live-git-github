const express = require('express');

const app = express();

app.get('/teste2', (req, res) => {
    return res.json({ hello: 'World 1' });
});

app.listen(3333);