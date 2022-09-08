const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true, //obrigatorio caixa baixa
    },
    password:{
        type: String,
        required: true,
        select: false, //quando fizer uma busca, essa busca nao retornará a senha
    },

    passwordResetToken: {
        type: String,
        select: false,
    },

    passwordResetExpires:{
        type: Date,
        select: false,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function(next) {//o pre é pra indicar que antes de salvar aconteça algo
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;

    next();

});
const User = mongoose.model('User', UserSchema);

module.exports = User;