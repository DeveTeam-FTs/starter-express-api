const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require('../../../Models/EstatePlanning/Client/ClientModal');
const ClientSchema = require('../../../Schema/EstatePlanning/Client/ClientModal');

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-ModalEstatePlanning', async(req, res) => {
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

MyRouter.patch('/Update-Client-ModalEstatePlanning/:Email/:_id', async(req, res) => {
    const UpdateClientEstate = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateClientEstate.Email = req.body.Email,
    UpdateClientEstate.POA_Type = req.body.POA_Type,
    UpdateClientEstate.POA_OtherDescription = req.body.POA_OtherDescription,
    UpdateClientEstate.POA_ReviewDate = req.body.POA_ReviewDate,
    UpdateClientEstate.POA_Location = req.body.POA_Location,
    UpdateClientEstate.POA_1 = req.body.POA_1,
    UpdateClientEstate.POA_2 = req.body.POA_2,
    UpdateClientEstate.POA_3 = req.body.POA_3,
    UpdateClientEstate.POA_4 = req.body.POA_4,
    UpdateClientEstate.POA_5 = req.body.POA_5,
    UpdateClientEstate.Relationship_1 = req.body.Relationship_1,
    UpdateClientEstate.Relationship_2 = req.body.Relationship_2,
    UpdateClientEstate.Relationship_3 = req.body.Relationship_3,
    UpdateClientEstate.Relationship_4 = req.body.Relationship_4,
    UpdateClientEstate.Relationship_5 = req.body.Relationship_5

    try{
        const C = await UpdateClientEstate.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-ModalEstatePlanning/:Email/:_id', async(req, res) => {
    const DeleteClientEstate = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClientEstate.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;