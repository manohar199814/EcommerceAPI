const mongoose = require('mongoose');

main().catch((err)=> {console.log(err)});

async function main() {
    await mongoose.connect(`mongodb://127.0.0.1/ecommerceAPI`);
    console.log('connection successful to DB');
}