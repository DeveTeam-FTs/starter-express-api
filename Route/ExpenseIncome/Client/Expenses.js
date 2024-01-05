const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/expenses");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/expenses");
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
    const NewExpense = (req.body);
    const { error } = ClientSchema(NewExpense);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpense = new ClientDetails(NewExpense);
        AddExpense = await AddExpense.save();
        res.send(AddExpense);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const  UpdateExpense = await ClientDetails.findOne({ Email: req.params.Email });
        
     UpdateExpense.Email = req.body.Email
     UpdateExpense.clientExpenseType = req.body.clientExpenseType,
     UpdateExpense.clientExpensesItem = req.body.clientExpensesItem,
     UpdateExpense.clientExpenseAmount = req.body.clientExpenseAmount,
     UpdateExpense.clientExpenseYear = req.body.clientExpenseYear

    
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
    const DeleteExpense = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpense.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;