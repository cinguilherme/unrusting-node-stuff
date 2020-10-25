import "reflect-metadata";
import express from 'express';
import { useExpressServer } from "routing-controllers";

const app = express();

useExpressServer(app, {
    routePrefix: "/api",
    controllers: ['UserController']
});

app.listen(3000);