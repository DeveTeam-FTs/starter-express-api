const Mongoose = require("mongoose");

const Client_EstateSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
    Email:{
        type: String
    },
    POA_Type:{
        type: String
    },
    POA_OtherDescription:{
        type: String
    },    
    POA_ReviewDate:{
        type: String
    },
    POA_Location:{
        type: String
    },
    POA_1:{
        type: String
    },
    POA_2:{
        type: String
    },
    POA_3:{
        type: String
    },
    POA_4:{
        type: String
    },
    POA_5:{
        type: String
    },
    Relationship_1:{
        type: String
    },
    Relationship_2:{
        type: String
    },
    Relationship_3:{
        type: String
    },
    Relationship_4:{
        type: String
    },
    Relationship_5:{
        type: String
    }
});

module.exports = Mongoose.model("ClientModalEstateDetails", Client_EstateSchema);