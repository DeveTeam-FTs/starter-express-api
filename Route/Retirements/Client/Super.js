const  Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require('../../../Models/Retirements/Client/Super');
const ClientSchema = require('../../../Schema/Retirements/Client/Super');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-SuperAccount', async(req, res) => {
    const NewClientRetirment = (req.body);
    const { error } = ClientSchema(NewClientRetirment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClient = new RetirementClientDetails(NewClientRetirment);
        AddClient = await AddClient.save();
        res.send(AddClient);
    }
});

MyRouter.patch('/Update-Client-SuperAccount/:Email/:_id', async(req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdateClientRetirement.Email = req.body.Email,
    UpdateClientRetirement.Super_FundName = req.body.Super_FundName,
    UpdateClientRetirement.Super_MemberNO = req.body.Super_MemberNO,
    UpdateClientRetirement.Super_FundType = req.body.Super_FundType
    UpdateClientRetirement.Super_ContactNO = req.body.Super_ContactNO,
    UpdateClientRetirement.Super_FaxNO = req.body.Super_FaxNO,
    UpdateClientRetirement.Super_PostalAddress = req.body.Super_PostalAddress,
    UpdateClientRetirement.Super_ABN = req.body.Super_ABN,
    UpdateClientRetirement.Super_SPIN = req.body.Super_SPIN,
    UpdateClientRetirement.Super_Website = req.body.Super_Website,
    UpdateClientRetirement.Super_Email = req.body.Super_Email,
    UpdateClientRetirement.Super_FundType_2 = req.body.Super_FundType_2,
    UpdateClientRetirement.Super_CommencementDate = req.body.Super_CommencementDate,
    UpdateClientRetirement.Super_EligibleServiceDate = req.body.Super_EligibleServiceDate,
    UpdateClientRetirement.Super_TFN = req.body.Super_TFN,
    UpdateClientRetirement.Super_CurrentBalance = req.body.Super_CurrentBalance,
    UpdateClientRetirement.Super_TaxFree = req.body.Super_TaxFree,
    UpdateClientRetirement.Super_Taxed = req.body.Super_Taxed,
    UpdateClientRetirement.Super_Restricted = req.body.Super_Restricted,
    UpdateClientRetirement.Super_Unrestricted = req.body.Super_Unrestricted,
    UpdateClientRetirement.Super_PreservedAmount = req.body.Super_PreservedAmount

    try{
        const C = await UpdateClientRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-SuperAccount/:Email/:_id', async(req, res) => {
    const DeleteClientRetirement = await RetirementClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClientRetirement.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;