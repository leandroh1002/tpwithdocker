const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoSchema = new Schema({// en esta parte se saco el id, para que mongo controle la generacion de un id unico por default
    imagen: String,
    color: String,
    marca: String,
    modelo: String,
}, { versionKey: false }); // Esto deshabilita el campo __v

autoSchema.set('toJSON', { // este fragmento es solamente para que en vez de que salga _id. diga id solo
    transform: function (doc, ret) {
        ret.id = ret._id;
        ret.id = ret.id ? ret.id + 1 : 1;
        delete ret._id;
    }
});

module.exports = mongoose.model("auto", autoSchema);
