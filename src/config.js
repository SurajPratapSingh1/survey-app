module.exports = {
    port : process.env.PORT || 3000,
    db : {
        url : process.env.DATABASE_URL,
    },
    secret : process.env.SECRET_KEY || "your-secret-key"
}