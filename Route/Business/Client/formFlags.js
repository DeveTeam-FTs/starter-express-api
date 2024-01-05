const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/formFlags");
const ClientSchema = require("../../../Schema/Business/Client/formFlags");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-formFlags', async(req, res) => {
    const NewClient = (req.body);
    const { error } = ClientSchema(NewClient);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClient = new ClientDetails(NewClient);
        AddClient = await AddClient.save();
        res.send(AddClient);
    }
});

MyRouter.patch("/Update-Client-formFlags/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    
    UpdateClient.Email = req.body.Email,

    //******************************** fromFlags - Business Details ********************************
    UpdateClient.BC = req.body.BC ,
    UpdateClient.BT = req.body.BT ,
    UpdateClient.PartnerShip = req.body.PartnerShip ,
    UpdateClient.ST = req.body.ST ,
    UpdateClient.TC = req.body.TC 

    
    
    //******************************** End of formFlags - Business Details ********************************

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-formFlags/:Email", async(req, res) => {
    const DeleteClient = ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;