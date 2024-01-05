const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/ProfessionalAdvisor/Partner/Partner");
const PartnerSchema = require("../../../Schema/ProfessionalAdvisor/Partner/Partner");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-PartnerAdvisor', async(req, res) => {
    const NewPartnerAdvisor = (req.body);
    const { error } = PartnerSchema(NewPartnerAdvisor);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartner = new PartnerDetails(NewPartnerAdvisor);
        AddPartner = await AddPartner.save();
        res.send(AddPartner);
    }
});

MyRouter.patch("/Update-PartnerAdvisor/:Email", async(req, res) => {
    const UpdatePartnerAdvisor = await PartnerDetails.findOne({ Email: req.params.Email });
    // UpdatePartnerAdvisor.Email = req.body.Email,
    UpdatePartnerAdvisor.ProfessionalAdvisor = req.body.ProfessionalAdvisor

    try{
        const C = await UpdatePartnerAdvisor.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-PartnerAdvisor/:Email", async(req, res) => {
    const DeletePartnerAdvisor = PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeletePartnerAdvisor.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;