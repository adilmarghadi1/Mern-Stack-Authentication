const express = require('express');
 
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');


const app = express();

const uri = process.env.MONGODB_URL
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
//middlewares
app.use(bodyParser.json());
app.use(cors());


//routes middleware
app.use('/api', authRoutes);

app.get('/', (req, res)=>{
    res.end("Hello adil")
})

const port =   8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




 
 



 
 