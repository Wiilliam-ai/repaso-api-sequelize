import { Router } from "express";
import Veterinario from "../models/Veterinario.js";
import { actualizarVeterinario, crearVeterinario, obtenerVeterinario, obtenerVeterinarios } from "../controllers/veterinario.controllers.js";

const router = Router()

router.get("/veterinarios/:id",obtenerVeterinario)
router.get("/veterinarios",obtenerVeterinarios)
router.post("/veterinarios",crearVeterinario)
router.put("/veterinarios/:id",actualizarVeterinario)
router.delete("/veterinarios/:id",async (req,res)=>{
    const { id } = req.params
    try {
        await Veterinario.destroy({
            where: {
                id: id
            }
        })
        res.status(200).json({
            msg:"Veterinario eliminado"
        })
    } catch (error) {
        console.log(error);
    }
})


export default router