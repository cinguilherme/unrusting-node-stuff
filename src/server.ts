import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({hello: "world"});
});


app.get('/home', (req, res) => {
    return res.json({home: "page"});
});


app.get('/extra', (req,res) => {
    return res.json({just:"sayit"});
})

app.listen(3333, () => {
    console.log('app listening 3333');
});
