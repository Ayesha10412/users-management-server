const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [

    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'bobita', email: 'bobita@gmail.com' },
    { id: 3, name: 'champa', email: 'champa@gmail.com' },
    { id: 3, name: 'Subnur', email: 'subnur@gmail.com' },
    { id: 4, name: 'dithi', email: 'dithigmail.com' },
    
]

app.get('/users', (req,res)=>{
    res.send(users);
})

app.get('/', (req, res) => {
    res.send('Users management server running')

})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})