const  Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require('../../../Models/Retirements/Client/Client');
const ClientSchema = require('../../../Schema/Retirements/Client/Client');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Retirement', async(req, res) => {
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

MyRouter.patch('/Update-Client-Retirement/:Email/:_id', async(req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdateClientRetirement.Email = req.body.Email,
    UpdateClientRetirement.Super = req.body.Super,
    UpdateClientRetirement.AccountPension = req.body.AccountPension,
    UpdateClientRetirement.Annuities = req.body.Annuities,
    UpdateClientRetirement.LifetimePension = req.body.LifetimePension,
    UpdateClientRetirement.Super2 = req.body.Super2,
    UpdateClientRetirement.AccountPension2 = req.body.AccountPension2,
    UpdateClientRetirement.Annuities2 = req.body.Annuities2,
    UpdateClientRetirement.LifetimePension2 = req.body.LifetimePension2

    try{
        const C = await UpdateClientRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-Retirement/:Email/:_id', async(req, res) => {
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