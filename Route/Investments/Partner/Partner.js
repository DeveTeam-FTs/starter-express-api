const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/Partner");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/Partner");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data Get successfully ",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Investment', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        // res.send(AddPartnerInvestment);
        return res.json ({message:"Data Post successfully ", AddPartnerInvestment })

    }
});


MyRouter.patch('/Update-Partner-Investment/:id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ _id: req.params.id });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email = req.body.Email,

    UpdatePartnerInvestment.BankAccounts = req.body.BankAccounts,
    UpdatePartnerInvestment.TermDeposits = req.body.TermDeposits,
    UpdatePartnerInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdatePartnerInvestment.AustralianSharePortfolio = req.body.AustralianSharePortfolio,
    UpdatePartnerInvestment.ManagedFunds = req.body.ManagedFunds,
    UpdatePartnerInvestment.ManagedFundsPortfolio = req.body.ManagedFundsPortfolio,
    UpdatePartnerInvestment.InvestmentBonds = req.body.InvestmentBonds,
    UpdatePartnerInvestment.InvestmentProperties = req.body.InvestmentProperties,
    UpdatePartnerInvestment.Others = req.body.Others

    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data Updated successfully ", C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-Investment/:id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ _id: req.params.id });
    
    try{
        const C = await DeletePartnerInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data Deleted successfully ", C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;