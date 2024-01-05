const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require('../../../Models/EstatePlanning/Client/Client');
const ClientSchema = require('../../../Schema/EstatePlanning/Client/Client');

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
    const NewClientEstate = (req.body);
    const { error } = ClientSchema(NewClientEstate);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientEstate = new ClientDetails(NewClientEstate);
        AddClientEstate = await AddClientEstate.save();
        res.send(AddClientEstate);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const UpdateClientEstate = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClientEstate.Email = req.body.Email,
    UpdateClientEstate.clientEPOwner = req.body.clientEPOwner,
    UpdateClientEstate.clientEPYear = req.body.clientEPYear,
    UpdateClientEstate.clientEPCurrentWill = req.body.clientEPCurrentWill,
    UpdateClientEstate.clientEPExecutor = req.body.clientEPExecutor,
    UpdateClientEstate.clientEPGuardianship = req.body.clientEPGuardianship,
    UpdateClientEstate.clientEPTrust = req.body.clientEPTrust,
    UpdateClientEstate.clientEPFuneralPlan = req.body.clientEPFuneralPlan,
    UpdateClientEstate.clientEPExpense = req.body.clientEPExpense,
    UpdateClientEstate.clientEPNeeds = req.body.clientEPNeeds,
    UpdateClientEstate.clientEPPOA = req.body.clientEPPOA,
    UpdateClientEstate.clientEPPOAType = req.body.clientEPPOAType,
    UpdateClientEstate.clientEPPOANumber = req.body.clientEPPOANumber,
    UpdateClientEstate.clientEPPOAName1 = req.body.clientEPPOAName1,
    UpdateClientEstate.clientEPPOAName2 = req.body.clientEPPOAName2,
    UpdateClientEstate.clientEPPOAName3 = req.body.clientEPPOAName3,
    UpdateClientEstate.clientEPPOAName4 = req.body.clientEPPOAName4,
    UpdateClientEstate.clientEPPOAName5 = req.body.clientEPPOAName5


    try{
        const C = await UpdateClientEstate.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete/:Email', async(req, res) => {
    const DeleteClientEstate = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClientEstate.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;