const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location : {
        type : String,
        required : true
    },
    tanggal : {
        type : String,
        required : true
    },
    Time : {
        type : String,
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    image : {
        type : String,
        required : true
    }

});


module.exports = mongoose.model('Product', productSchema);
