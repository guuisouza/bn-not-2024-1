import mongoose from "mongoose";

const esquema = mongoose.Schema({
    nome: { type: String, required: true},
    cpf: { type: String, required: true, index: { unique:true }},
    data_nascimento: { type: Date, required: false},
    logradouro: { type: String, required: true},
    num_casa: { type: String, required: true},
    bairro: { type: String, required: true},
    complemento: { type: String, required: false},
    municipio: { type: String, required: true},
    uf: { type: String, required: true},
    telefone: { type: String, required: true},
    email: { type: String, required: true, index: { unique:true }},
})

/*
    Parâmetros de mongoose.model
    1° -> Nome do model (inicial maiúscula)
    2° -> O esquema definido acima
    3° -> Nome da collection no BD (inicial minúscula, plural)

*/
export default mongoose.model('Cliente', esquema, 'clientes')