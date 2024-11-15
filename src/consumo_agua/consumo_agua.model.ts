import * as mongoose from 'mongoose';

export const ConsumoSchema = new mongoose.Schema({
    id: { type: String, required: true },
    qtade_consumo: { type: Number, required: true },
    data_consumo: { type: Date, required: true}
})

export interface Consumo {
    id: string,
    qtade_consumo: Number,
    data_consumo: string
}