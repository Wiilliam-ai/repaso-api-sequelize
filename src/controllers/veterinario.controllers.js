import Veterinario from "../models/Veterinario.js";

const obtenerVeterinario = async (req,res)=>{
    const { id } = req.params
    const veterinario = await Veterinario.findByPk(id)
    res.status(200).json(veterinario)
}

const obtenerVeterinarios = async (req,res)=>{
    const veterinarios = await Veterinario.findAll()
    res.status(200).json(veterinarios)
}

const crearVeterinario = async (req,res)=>{
    const {firstName,lastName,celphone,dni} = req.body
    try {
        const veterinarioNuevo = await Veterinario.create({
            firstName,
            lastName,
            celphone,
            dni
        })
        if (!veterinarioNuevo) {
            return res.status(403).json({msg:"No se creo el registro"})
        }
        res.status(200).json({msg:"Veterninario creado"})
    } catch (error) {
        console.log(error);
    }
}

const actualizarVeterinario = async (req,res)=>{
    const { id } = req.params
    const {firstName,lastName,celphone,dni} = req.body
    try {
        const veterinarioNuevo = await Veterinario.update({
            firstName,
            lastName,
            celphone,
            dni
        },{
            where:{
                id: id
            }
        })
        if (!veterinarioNuevo) {
            return res.status(403).json({msg:"No se creo el registro"})
        }
        res.status(200).json({msg:"Veterninario actualizo"})
    } catch (error) {
        console.log(error);
    }
}


export {
    obtenerVeterinario,
    obtenerVeterinarios,
    crearVeterinario,
    actualizarVeterinario
}