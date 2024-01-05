const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/otherIncome");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/otherIncome");
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
    const NewOtherIncome = (req.body);
    const { error } = ClientSchema(NewOtherIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddOtherIncome = new ClientDetails(NewOtherIncome);
        AddOtherIncome = await AddOtherIncome.save();
        res.send(AddOtherIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateOtherIncome = await ClientDetails.findOne({ Email: req.params.Email });
        
     UpdateOtherIncome.Email = req.body.Email
     UpdateOtherIncome.clientOtherOwner = req.body.clientOtherOwner,
     UpdateOtherIncome.clientOtherIncomeType = req.body.clientOtherIncomeType,
     UpdateOtherIncome.clientOtherAmount = req.body.clientOtherAmount
     
    
    
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
    const DeleteOtherIncome = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteOtherIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;