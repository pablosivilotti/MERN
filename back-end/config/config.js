module.exports = {
    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb+srv://pablosivilotti:INET-MERN@mytinerary-sjs0f.mongodb.net/sprint2db?retryWrites=true&w=majority',
    TOKEN_SECRET: process.env.TOKEN_SECRET || "secret",
    GOOGLE_ID: process.env.GOOGLE_ID || "971727407159-8cmaolsh9memlfkb3ped2duihqsa80g1.apps.googleusercontent.com",
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || "pIAk2qp-z9ifUbBeqaBXPfjd"
}