const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require('../../../Models/EstatePlanning/Partner/PartnerModal');
const PartnerSchema = require('../../../Schema/EstatePlanning/Partner/PartnerModal');

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-ModalEstatePlanning', async(req, res) => {
    const NewPartnerEstate = (req.body);
    const { error } = PartnerSchema(NewPartnerEstate);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerEstate = new PartnerDetails(NewPartnerEstate);
        AddPartnerEstate = await AddPartnerEstate.save();
        res.send(AddPartnerEstate);
    }
});

MyRouter.patch('/Update-Partner-ModalEstatePlanning/:Email/:_id', async(req, res) => {
    const UpdatePartnerEstate = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdatePartnerEstate.Email = req.body.Email,
    UpdatePartnerEstate.POA_Type = req.body.POA_Type,
    UpdatePartnerEstate.POA_OtherDescription = req.body.POA_OtherDescription,
    UpdatePartnerEstate.POA_ReviewDate = req.body.POA_ReviewDate,
    UpdatePartnerEstate.POA_Location = req.body.POA_Location,
    UpdatePartnerEstate.POA_1 = req.body.POA_1,
    UpdatePartnerEstate.POA_2 = req.body.POA_2,
    UpdatePartnerEstate.POA_3 = req.body.POA_3,
    UpdatePartnerEstate.POA_4 = req.body.POA_4,
    UpdatePartnerEstate.POA_5 = req.body.POA_5,
    UpdatePartnerEstate.Relationship_1 = req.body.Relationship_1,
    UpdatePartnerEstate.Relationship_2 = req.body.Relationship_2,
    UpdatePartnerEstate.Relationship_3 = req.body.Relationship_3,
    UpdatePartnerEstate.Relationship_4 = req.body.Relationship_4,
    UpdatePartnerEstate.Relationship_5 = req.body.Relationship_5

    try{
        const C = await UpdatePartnerEstate.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-ModalEstatePlanning/:Email/:_id', async(req, res) => {
    const DeletePartnerEstate = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerEstate.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;