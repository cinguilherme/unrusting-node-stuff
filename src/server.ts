import express from 'express';
import UserRoutes from './users/ports/UserRoutes';

const app = express();

app.get('/', (req, res) => {
    return res.json({});
})

app.use('/users', UserRoutes);

app.listen(3333, () => {
    console.log('server running on 3333');
    
});

