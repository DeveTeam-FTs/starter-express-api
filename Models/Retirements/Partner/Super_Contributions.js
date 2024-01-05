const Mongoose = require('mongoose');

const SuperContributionSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    ContributeFund:{
        type: String
    },
    NonConcessional1:{
        type: Number
    },
    Other1:{
        type: Number
    },
    EmployerContributions1:{
        type: Number
    },
    SalaryPersonalDed1:{
        type: Number
    },
    NonConcessional2:{
        type: Number
    },
    Other2:{
        type: Number
    },
    EmployerContributions2:{
        type: Number
    },
    SalaryPersonalDed2:{
        type: Number
    },
    NonConcessional3:{
        type: Number
    },
    Other3:{
        type: Number
    },
    EmployerContributions3:{
        type: Number
    },
    SalaryPersonalDed3:{
        type: Number
    }
});

module.exports = Mongoose.model("Partner_SuperContributionDetails", SuperContributionSchema);