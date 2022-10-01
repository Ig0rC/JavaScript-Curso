const express = require('express');
const app = express();





app.get('/', (req, res) => {
    res.send(`
        <form action=" method="post">
        Nome: <input type="text" name="nome":
        <button>enviar</button>
        </form>
    `);
});


app.get('/contato', (req, res) => res.send('Obrigado'))
app.listen(3000, () => console.log('Server On'))


// CRUD => Create = Post, Read = Get, Update = Put e Delete ==Delete;
