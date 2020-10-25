
import express from 'express';
import userRouter from './controllers/user/Routes';

const app = express();

app.get('/', (req, res) => {
    return res.json({status: 'UP'});
});

app.use(userRouter);

app.listen(3000);