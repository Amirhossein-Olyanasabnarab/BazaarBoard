const express = require('express');

async function main(){
    const app = express()
    require('dotenv').config();

    const PORT = process.env.PORT;
    const DB_HOST = process.env.DB_HOST;
    
    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))
};
main();
