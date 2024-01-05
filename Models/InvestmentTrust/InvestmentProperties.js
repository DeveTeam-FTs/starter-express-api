const Mongoose = require('mongoose');

const InvestmentPropertiesSchema = new Mongoose.Schema({
    
    Email:{
        type: String
    },
    CurrentValue:{
        type: Number
    },
    CostBase:{
        type: Number
    },
    PropertyAddress:{
        type: String
    },
    PostCode: {
        type: Number
    },
    RentalIncome:{
        type: Number
    },
    Frequency: {
        type: String
    },
    TotalAnnualIncome: {
        type: Number
    },
    ExpensesPA: {
        type: Number
    },
    LoanAttached:{
        type:String
    },
    CurrentBalance:{
        type: Number
    },
    Lender: {
        type: String
    },
    RepaymentAmount: {
        type: Number
    },
    Frequency2: {
        type: String
    },
    AnnualRepayments: {
        type: Number
    },
    InterestRatePA: {
        type: Number
    },
    LoanTerm: {
        type: String
    },
    LoanType: {
        type: String
    },
    DebtAmountLoan: {
        type: Number
    },
    YearsRemaining: {
        type: String
    }
});

module.exports = Mongoose.model("InvestmentPropertiesDetails2", InvestmentPropertiesSchema);