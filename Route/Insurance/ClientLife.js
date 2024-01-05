const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require('../../Models/Insurance/ClientLife');
const ClientSchema = require('../../Schema/Insurance/ClientLife');

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Insurance-Life', async(req, res) => {
    const NewClientInsurance = (req.body);
    const { error } = ClientSchema(NewClientInsurance);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientInsurance = new ClientDetails(NewClientInsurance);
        AddClientInsurance = await AddClientInsurance.save();
        res.send(AddClientInsurance);
    }
});

MyRouter.patch('/Update-Client-Insurance-Life/:Email/:_id', async(req, res) => {
    const UpdateClientInsurance = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInsurance.Email = req.body.Email,
    UpdateClientInsurance.Life_PolicyID = req.body.Life_PolicyID,
    // UpdateClientInsurance.Life_Health = req.body.Life_Health,
    UpdateClientInsurance.Life= req.body.Life,
    UpdateClientInsurance.LifeInput= req.body.LifeInput,
    UpdateClientInsurance.TPD= req.body.TPD,
    UpdateClientInsurance.TPDInput= req.body.TPDInput,
    UpdateClientInsurance.Trauma = req.body.Trauma,
    UpdateClientInsurance.TraumaInput = req.body.TraumaInput,

    UpdateClientInsurance.Life_PolicyOwner = req.body.Life_PolicyOwner,
    UpdateClientInsurance.Life_Insured = req.body.Life_Insured,
    UpdateClientInsurance.Life_InsuranceCompany = req.body.Life_InsuranceCompany,
    UpdateClientInsurance.Life_InsuranceProduct = req.body.Life_InsuranceProduct,
    UpdateClientInsurance.Life_PolicyNumber = req.body.Life_PolicyNumber,
    UpdateClientInsurance.Life_PolicyDateCommenced = req.body.Life_PolicyDateCommenced,
    UpdateClientInsurance.Life_PolicyDateRenewal = req.body.Life_PolicyDateRenewal,
    UpdateClientInsurance.Life_Smoker = req.body.Life_Smoker,
    UpdateClientInsurance.Life_PremiumType = req.body.Life_PremiumType,
    UpdateClientInsurance.Life_PremiumPA = req.body.Life_PremiumPA,
    UpdateClientInsurance.Life_CPI_Indexed = req.body.Life_CPI_Indexed,
    UpdateClientInsurance.Life_SuperannuationPolicy = req.body.Life_SuperannuationPolicy,
    UpdateClientInsurance.Life_ContinuationPolicy = req.body.Life_ContinuationPolicy,
    UpdateClientInsurance.Life_LoadingExecutions = req.body.Life_LoadingExecutions,
    UpdateClientInsurance.Life_Details_LoadingExecutions = req.body.Life_Details_LoadingExecutions
// ****************************** End of Life/TPD/Trauma Policy Details ******************************

    try{
        const C = await UpdateClientInsurance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

MyRouter.delete('/Delete-Client-Insurance-Life/:Email/:_id', async(req, res) => {
    const DeleteClientInsurance = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    try{
        const C = await DeleteClientInsurance.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

module.exports = MyRouter;