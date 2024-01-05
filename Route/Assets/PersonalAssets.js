const Express = require("express");
const ClientDetails = require("../../Models/Assets/PersonalAssets");
const ClientAssetsSchema = require("../../Schema/Assets/PersonalAssets");
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

MyRouter.patch("/Update/:Email", async(req, res) => {
    const UpdateClientAssets = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClientAssets.Email = req.body.Email,
// ******************************** Personal Assets - Assets ********************************
    UpdateClientAssets.ContentsPA = req.body.ContentsPA,
    UpdateClientAssets.MotorVehicle1PA = req.body.MotorVehicle1PA,
    UpdateClientAssets.MotorVehicle2PA = req.body.MotorVehicle2PA,
    UpdateClientAssets.BoatPA = req.body.BoatPA,
    UpdateClientAssets.CaravanPA = req.body.CaravanPA,
    UpdateClientAssets.OtherPA = req.body.OtherPA
   
// ******************************** End of Personal Assets - Assets ********************************   
    
    try{
        const C = await UpdateClientAssets.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete/:Email", async(req, res) => {
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