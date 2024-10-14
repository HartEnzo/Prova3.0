import e from "express";
import "dotenv/config";
import "./db.js";
import workshopRouter from "./router/workshopRouter.js";
import vehicleRouter from "./router/vehicleRouter.js";
import maintenanceRouter from "./router/maintenanceRoute.js";

const app = e();

app.use(e.json());

app.use("/workshop", workshopRouter);
app.use("/vehicle", vehicleRouter);
app.use("/maintenance", maintenanceRouter);

app.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`);
});