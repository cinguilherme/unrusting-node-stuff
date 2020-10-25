import "reflect-metadata";
import express from 'express';
import { useExpressServer, RoutingControllersOptions } from "routing-controllers";

const app = express();

const options: RoutingControllersOptions = {
    routePrefix: '/api',
    controllers: [__dirname + "/controllers/**/*.js"],
};

useExpressServer(app, options);

app.get('/', (req, res) => {
    return res.json({status: 'UP'});
});

app.listen(3000);