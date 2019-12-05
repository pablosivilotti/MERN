module.exports = {
    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb+srv://pablosivilotti:INET-MERN@mytinerary-sjs0f.mongodb.net/sprint2db?retryWrites=true&w=majority',
    TOKEN_SECRET: process.env.TOKEN_SECRET || "secret"
}