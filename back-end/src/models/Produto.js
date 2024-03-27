import mongoose from "mongoose";

const esquema = mongoose.Schema({
    // _id é automático no mongoose
    descricao: { type: String, required: true },
    unidade_medida: { type: String, required: true },
    quantidade: { type: Number, required: true },
    valor_unitario: { type: Number, required: true },
    //subdocumento fornecedor
    fornecedor: {
        type: mongoose.ObjectId,
        ref: 'Fornecedor', // Nome do model referenciado
        required: true
    }
})

/*
    Parâmetros de mongoose.model
    1° -> Nome do model (inicial maiúscula)
    2° -> O esquema definido acima
    3° -> Nome da collection no BD (inicial minúscula, plural)

*/
export default mongoose.model('Produto', esquema, 'produtos')