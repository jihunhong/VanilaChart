const express = require('express');
const path = require('path');
const app = express();
const chartRouter = require('./router/chartApi');
const youtubeRouter = require('./router/youtubeApi');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use('/api/chart', chartRouter);

if( process.env.NODE_ENV == 'production'){
    // deploy server setting

    console.log('Production MODE resolved');

    app.use(express.static(path.join(__dirname, './client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'))
    })
}

mongoose.connect(
    'mongodb+srv://<NAME>:<PASSWORD>@cluster0-v0qur.mongodb.net/VanillaChart?retryWrites=true&w=majority', 
    { useNewUrlParser: true },
    () =>   console.log('connected')
)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => 
    console.log("Express server has started on port 8080")
);

