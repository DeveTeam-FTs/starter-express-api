const Express = require("express");
const PartnerDetails = require("../../../Models/ExpenseIncome/Partner/otherIncome");
const PartnerSchema = require("../../../Schema/ExpenseIncome/Partner/otherIncome");
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
    const NewOtherIncome = (req.body);
    const { error } = PartnerSchema(NewOtherIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddOtherIncome = new PartnerDetails(NewOtherIncome);
        AddOtherIncome = await AddOtherIncome.save();
        res.send(AddOtherIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateOtherIncome = await PartnerDetails.findOne({ Email: req.params.Email });
        
     UpdateOtherIncome.Email = req.body.Email
     UpdateOtherIncome.partnerOtherOwner = req.body.partnerOtherOwner,
     UpdateOtherIncome.partnerOtherIncomeType = req.body.partnerOtherIncomeType,
     UpdateOtherIncome.partnerOtherAmount = req.body.partnerOtherAmount
     
    
    
//******************************** End of Expense ********************************
        try{
            const C = await  UpdateOtherIncome.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete/:Email', async(req, res) => {
    const DeleteOtherIncome = await PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteOtherIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;