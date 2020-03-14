const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'))

//routes
const authRouter = require('./routes/auth')
app.use("/auth", authRouter)


const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log('Server listen on port', port);
})