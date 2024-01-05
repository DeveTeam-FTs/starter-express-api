const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/ProfessionalAdvisor/Client/Client");
const ClientSchema = require("../../../Schema/ProfessionalAdvisor/Client/Client");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-ClientAdvisor', async(req, res) => {
    const NewClientAdvisor = (req.body);
    const { error } = ClientSchema(NewClientAdvisor);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClient = new ClientDetails(NewClientAdvisor);
        AddClient = await AddClient.save();
        res.send(AddClient);
    }
});

MyRouter.patch("/Update-ClientAdvisor/:Email", async(req, res) => {
    const UpdateClientAdvisor = await ClientDetails.findOne({ Email: req.params.Email });
    UpdateClientAdvisor.Email = req.body.Email,
    UpdateClientAdvisor.ProfessionalAdvisor = req.body.ProfessionalAdvisor

    try{
        const C = await UpdateClientAdvisor.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-ClientAdvisor/:Email", async(req, res) => {
    const DeleteClientAdvisor = ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClientAdvisor.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;