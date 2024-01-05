const Express = require("express");
const ClientDetails = require("../../Models/Assets/Client");
const ClientAssetsSchema = require("../../Schema/Assets/Client");
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

MyRouter.post("/Add-Client-Assets", async(req, res) => {
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

MyRouter.patch("/Update-Client-Assets/:Email", async(req, res) => {
    const UpdateClientAssets = await ClientDetails.findOne({ Email: req.params.Email });
    
    // UpdateClientAssets.Email = req.body.Email,
    UpdateClientAssets.Email = req.body.Email,
    UpdateClientAssets.FamilyHome = req.body.FamilyHome,
    UpdateClientAssets.PersonalAssets = req.body.PersonalAssets,
    UpdateClientAssets.PersonalDebts = req.body.PersonalDebts 
    
    try{
        const C = await UpdateClientAssets.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-Assets/:Email", async(req, res) => {
    const DeleteClientAssets = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClientAssets.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;