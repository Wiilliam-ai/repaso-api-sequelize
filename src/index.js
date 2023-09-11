import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import sequelize from "./db/conect.js"
import Veterinario from "./models/Veterinario.js"
import veterinaioRoutes from "./routes/veterninario.routes.js"
const app = express()

try {
    //await sequelize.sync();
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors())
app.use(express.json())
app.use("/api",veterinaioRoutes)
app.listen(3001,()=>{
    console.log('listen on port http://localhost:3001');
})