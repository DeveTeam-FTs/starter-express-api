const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require('../../Models/Insurance/ClientIncome');
const ClientSchema = require('../../Schema/Insurance/ClientIncome');

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Insurance-Income', async(req, res) => {
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

MyRouter.patch('/Update-Client-Insurance-Income/:Email/:_id', async(req, res) => {
    const UpdateClientInsurance = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInsurance.Email = req.body.Email,   
    UpdateClientInsurance.Income_PolicyID = req.body.Income_PolicyID,
    UpdateClientInsurance.Income_PolicyOwner = req.body.Income_PolicyNumber,
    UpdateClientInsurance.Income_LifeInsured = req.body.Income_LifeInsured
    UpdateClientInsurance.Income_InsuranceCompany = req.body.Income_InsuranceCompany
    UpdateClientInsurance.Income_InsuranceProduct = req.body.Income_InsuranceProduct,
    UpdateClientInsurance.Income_PolicyNumber = req.body.Income_PolicyNumber,
    UpdateClientInsurance.Income_PolicyDateCommenced = req.body.Income_PolicyDateCommenced,
    UpdateClientInsurance.Income_PolicyDateRenewal = req.body.Income_PolicyDateRenewal,
    UpdateClientInsurance.Income_Smoker = req.body.Income_Smoker,
    UpdateClientInsurance.Income_MonthlyBenefit = req.body.Income_MonthlyBenefit,
    UpdateClientInsurance.Income_ContinuanceAmount = req.body.Income_ContinuanceAmount,
    UpdateClientInsurance.Income_WaitingPeriod = req.body.Income_WaitingPeriod,
    UpdateClientInsurance.Income_BenefitPeriod = req.body.Income_BenefitPeriod,
    UpdateClientInsurance.Income_Agreed = req.body.Income_Agreed,
    UpdateClientInsurance.Income_PremiumType = req.body.Income_PremiumType,
    UpdateClientInsurance.Income_PremiumPA = req.body.Income_PremiumPA,
    UpdateClientInsurance.Income_SuperannuationPolicy = req.body.Income_SuperannuationPolicy,
    UpdateClientInsurance.Income_Accident = req.body.Income_Accident,
    UpdateClientInsurance.Income_IncreasingClaim = req.body.Income_IncreasingClaim,
    UpdateClientInsurance.Income_TPD = req.body.Income_TPD,
    UpdateClientInsurance.Income_BenefitIndexed = req.body.Income_BenefitIndexed,
    UpdateClientInsurance.Income_LoadingExecutions = req.body.Income_LoadingExecutions,
    UpdateClientInsurance.Income_Details_LoadingExecutions = req.body.Income_Details_LoadingExecutions
// ****************************** End of Income Protection Details ******************************

    try{
        const C = await UpdateClientInsurance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

MyRouter.delete('/Delete-Client-Insurance/:Email/:_id', async(req, res) => {
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