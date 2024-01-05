const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/Joined");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/Joined");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data Get successfully ",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Joined-Investment', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
        return res.json ({message:"Data Post successfully ", AddJoinedInvestment })

    }
});


MyRouter.patch('/Update-Joined-Investment/:id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ _id: req.params.id });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email = req.body.Email,

    UpdateJoinedInvestment.BankAccounts = req.body.BankAccounts,
    UpdateJoinedInvestment.TermDeposits = req.body.TermDeposits,
    UpdateJoinedInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateJoinedInvestment.AustralianSharePortfolio = req.body.AustralianSharePortfolio,
    UpdateJoinedInvestment.ManagedFunds = req.body.ManagedFunds,
    UpdateJoinedInvestment.ManagedFundsPortfolio = req.body.ManagedFundsPortfolio,
    UpdateJoinedInvestment.InvestmentBonds = req.body.InvestmentBonds,
    UpdateJoinedInvestment.InvestmentProperties = req.body.InvestmentProperties,
    UpdateJoinedInvestment.Others = req.body.Others

    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data Updated successfully ", C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-Investment/:id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ _id: req.params.id });
    
    try{
        const C = await DeleteJoinedInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data Deleted successfully ", C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;