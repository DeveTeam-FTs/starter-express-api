const Express = require("express");
const PartnerDetails = require("../../../Models/ExpenseIncome/Partner/expenses");
const PartnerSchema = require("../../../Schema/ExpenseIncome/Partner/expenses");
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
    const NewExpense = (req.body);
    const { error } = PartnerSchema(NewExpense);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpense = new PartnerDetails(NewExpense);
        AddExpense = await AddExpense.save();
        res.send(AddExpense);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateExpense = await PartnerDetails.findOne({ Email: req.params.Email });
        
     UpdateExpense.Email = req.body.Email
     UpdateExpense.partnerExpenseType = req.body.partnerExpenseType,
     UpdateExpense.partnerExpensesItem = req.body.partnerExpensesItem,
     UpdateExpense.partnerExpenseAmount = req.body.partnerExpenseAmount,
     UpdateExpense.partnerExpenseYear = req.body.partnerExpenseYear

    
//******************************** End of Expense ********************************
        try{
            const C = await  UpdateExpense.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete/:Email', async(req, res) => {
    const DeleteExpense = await PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpense.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;