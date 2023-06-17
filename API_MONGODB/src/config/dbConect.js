import mongoose from "mongoose";
// pby6IK4NAIbAPW9u
mongoose.connect("mongodb+srv://lucasabrantes25:pby6IK4NAIbAPW9u@cluster0.lein4u5.mongodb.net/");

let db = mongoose.connection;

export default db;