const express = require('express')
const app = express();
const PORT = 3500;

const mediaRoute = require('./routes/mediaRoute')

app.get('/', (request, response) => {
    response.status(200).send({ message: 'Server Working' });
})

app.use('/api/v1/media',mediaRoute)

app.listen(PORT, console.log(`Server Started and running at http://localhost:${PORT}/api/v1/media`))