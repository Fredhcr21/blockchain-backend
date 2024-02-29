import { Application } from "express";
import { getBlockRoute } from "./getBlock.routes";


export default function routes(app: Application) {
    app.use('/block', getBlockRoute)
}