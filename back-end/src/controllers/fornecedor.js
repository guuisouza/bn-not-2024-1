import Fornecedor from "../models/Fornecedor";

const controller = {} // Objeto vazio

controller.create = async function (req, res) {
    try {
        await Fornecedor.create(req.body)

        //Envia uma resposta de sucesso ao front-end
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveAll = async function (req, res) {
    try {
        const result = await Fornecedor.find().sort({razao_social: 'asc' })
        // HTTP 200: OK (implicito)
        res.send(result)
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveOne = async function (req, res) {
    try {
        const result = await Fornecedor.findById(req.params.id)
        // Documento encontrado -> HTTP 200: OK (implícito)
        if (result) res.send(result)
        // Documento não encontrado -> HTPP 404: NOT FOUND
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.update = async function (req, res) {
    try {
        const result = await Fornecedor.findByIdAndUpdate(req.params.id, req.body)
        // Documento encontrado e atualizado -> HTTP 204: No Content
        if (result) res.status(204).end()
        // Documento não encontrado (e não atualizado) -> HTTP 404: Not Found
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.delete = async function (req, res) {
    try {
        const result = await Fornecedor.findByIdAndDelete(req.params.id)
        // Documento encontrado e excluído -> HTTP 204: No Content
        if (result) res.status(204).end()
        // Documento não encontrado (e não excluído) -> HTTP 404: Not Found
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}
export default controller