const catchError = require('../utils/catchError');
const genreModel = require('../models/Genre');

//Nota: En caso de querer enviar un mensaje como respuesta se debe modificar el sendStatus() por status() y concatenar .json({message:'MENSAJE DE RESPUESTA'})

const getAll = catchError(async(req, res) => { // Controlador para leer todos los registros
    const results = await genreModel.findAll(); // el metodo .finAll() para retornar toda la informacion
    return res.json(results); // Respuesta del controlador .json de todos los registros
});

const create = catchError(async(req, res) => { // Controlador para crear registros
    const result = await genreModel.create(req.body); // el metodo .create(<registro a crear>) para crear
    return res.status(201).json(result); // Respuesta del controlador con status 201 para creacion correcta y .json del registro creado
});

const getOne = catchError(async(req, res) => { // Controlador para leer un registro por id
    const { id } = req.params; // Accedo al id por parametros
    const result = await genreModel.findByPk(id); // El metodo .findByPk(<id del registro a actualizar>) para actualizar por id
    if(!result) return res.sendStatus(404); // Verificacion si el id a leer no existe, devuelve codigo 404
    return res.json(result); // Respuesta del controlador .json del registro leido segun el id
});

const remove = catchError(async(req, res) => { // Controlador para eliminar registros por id
    const { id } = req.params; // Accedo al id por parametros
    const remove = await genreModel.destroy({ where: {id} }); // El metodo .destroy({ where: {<id del registro a eliminar>} }) para eliminar por id
    if(!remove) return res.sendStatus(404); // Verificacion si el id a remover no existe, devuelve codigo 404
    return res.sendStatus(204); // Respuesta del controlador senStatus(204) cuando se elimina correctamente
});

const update = catchError(async(req, res) => { // Controlador para actualizar un registro por id
    const { id } = req.params; // Accedo al id por parametros 
    const result = await genreModel.update(
        req.body,
        { where: {id}, returning: true }
    ); // El metodo .update(<registro creado>, {where: {<id del registro a actualizar>}, returning: true}) para actualizar por id, returning: true se usa para retornar lo que actualiza
    if(result[0] === 0) return res.sendStatus(404); // Verificacion si el id a actualizar en la pocicion [0] es === 0, devuelve codigo 404
    return res.json(result[1][0]); // Respuesta del controlador .json en la posicion [1][0]
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}