const Express = require("express");
const PartnerDetails = require("../../../Models/ExpenseIncome/Partner/centreLink");
const PartnerSchema = require("../../../Schema/ExpenseIncome/Partner/centreLink");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = PartnerSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new PartnerDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateCentreLink = await PartnerDetails.findOne({ Email: req.params.Email });
        
         UpdateCentreLink.Email = req.body.Email

     UpdateCentreLink.partnerCLApa = req.body.partnerCLApa,
     UpdateCentreLink.partnerCLCDate = req.body.partnerCLCDate,
     UpdateCentreLink.partnerCLCard = req.body.partnerCLCard,
     UpdateCentreLink.partnerCLCarerAllowance = req.body.partnerCLCarerAllowance,
     UpdateCentreLink.partnerCLClp = req.body.partnerCLClp,
     UpdateCentreLink.partnerCLCrn = req.body.partnerCLCrn,
     UpdateCentreLink.partnerCLFamilyTax = req.body.partnerCLFamilyTax,
     UpdateCentreLink.partnerCLGifts = req.body.partnerCLGifts,
     UpdateCentreLink.partnerCLHowMuch = req.body.partnerCLHowMuch,
     UpdateCentreLink.partnerCLOwner = req.body.partnerCLOwner,
     UpdateCentreLink.partnerCLPa = req.body.partnerCLPa,
     UpdateCentreLink.partnerCLYears = req.body.partnerCLYears,

     UpdateCentreLink.partnerCLRent = req.body.partnerCLRent,
     UpdateCentreLink.partnerCLFtb = req.body.partnerCLFtb
    
    
//******************************** End of Expense ********************************
        try{
            const C = await  UpdateCentreLink.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete/:Email', async(req, res) => {
    const DeleteExpenseIncome = await PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;