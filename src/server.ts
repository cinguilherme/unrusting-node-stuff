import express from 'express';


const app = express();

app.get('/', (req, res) => {
    return res.json({});
})



app.listen(3333, () => {
    console.log('server running on 3333');
});

