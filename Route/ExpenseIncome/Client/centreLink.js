const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/centreLink");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/centreLink");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = ClientSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new ClientDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateCentreLink = await ClientDetails.findOne({ Email: req.params.Email });
        
         UpdateCentreLink.Email = req.body.Email

     UpdateCentreLink.clientCLApa = req.body.clientCLApa,
     UpdateCentreLink.clientCLCDate = req.body.clientCLCDate,
     UpdateCentreLink.clientCLCard = req.body.clientCLCard,
     UpdateCentreLink.clientCLCarerAllowance = req.body.clientCLCarerAllowance,
     UpdateCentreLink.clientCLClp = req.body.clientCLClp,
     UpdateCentreLink.clientCLCrn = req.body.clientCLCrn,
     UpdateCentreLink.clientCLFamilyTax = req.body.clientCLFamilyTax,
     UpdateCentreLink.clientCLGifts = req.body.clientCLGifts,
     UpdateCentreLink.clientCLHowMuch = req.body.clientCLHowMuch,
     UpdateCentreLink.clientCLOwner = req.body.clientCLOwner,
     UpdateCentreLink.clientCLPa = req.body.clientCLPa,
     UpdateCentreLink.clientCLYears = req.body.clientCLYears,

     UpdateCentreLink.clientCLRent = req.body.clientCLRent,
     UpdateCentreLink.clientCLFtb = req.body.clientCLFtb
    
    
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
    const DeleteExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;