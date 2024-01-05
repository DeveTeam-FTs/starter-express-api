const Express = require("express");
const ClientDetails = require("../../Models/Assets/PersonalDebts");
const ClientAssetsSchema = require("../../Schema/Assets/PersonalDebts");
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

MyRouter.post("/Add", async(req, res) => {
    const NewClientAssets = (req.body);
    const { error } = ClientAssetsSchema(NewClientAssets);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientAssets = new ClientDetails(NewClientAssets);
        AddClientAssets = await AddClientAssets.save();
        res.send(AddClientAssets);
    }
});

MyRouter.patch("/Update/:Email/:_id", async(req, res) => {
    const UpdateClientAssets = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateClientAssets.Email = req.body.Email,
// ******************************** Personal Debts - Assets ********************************
    UpdateClientAssets.PLDebtType = req.body.PLDebtType,
    UpdateClientAssets.PLCurrentBalance = req.body.PLCurrentBalance,
    UpdateClientAssets.PLRepaymentAmount = req.body.PLRepaymentAmount,
    UpdateClientAssets.PLFrequency = req.body.PLFrequency,
    UpdateClientAssets.PLAnnualRepayment = req.body.PLAnnualRepayment,
    UpdateClientAssets.PLInterestRate = req.body.PLInterestRate,
    UpdateClientAssets.PLLoanTerm = req.body.PLLoanTerm,
    UpdateClientAssets.PLLoanType = req.body.PLLoanType,
    UpdateClientAssets.PLYearRemaining = req.body.PLYearRemaining
// ******************************** End of Personal Debts - Assets ********************************    
    
    try{
        const C = await UpdateClientAssets.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete/:Email/:_id", async(req, res) => {
    const DeleteClientAssets = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id});
    try{
        const C = await DeleteClientAssets.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;