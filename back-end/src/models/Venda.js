import mongoose from "mongoose";

const esquema = mongoose.Schema({
    num_venda: { type: Number, required: true },
    data_venda: { type: Date, required: true },
    cliente: {
        type: mongoose.ObjectId,
        ref: 'Cliente', // Nome do model referenciado
        required: true
    },
    // Itens da venda como subdocumentos
    itens: [{
        num_item: { type: Number, required: true},
        produto: {
            type: mongoose.ObjectId,
            ref: 'Produto', // Nome do model referenciado
            required: true
        },
        quantidade: { type: Number, required: true }
    }]
})

/*
    Parâmetros de mongoose.model
    1° -> Nome do model (inicial maiúscula)
    2° -> O esquema definido acima
    3° -> Nome da collection no BD (inicial minúscula, plural)

*/
export default mongoose.model('Venda', esquema, 'vendas')