const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require('../../Models/Insurance/Client');
const ClientSchema = require('../../Schema/Insurance/Client');

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Insurance', async(req, res) => {
    const NewClientInsurance = (req.body);
    const { error } = ClientSchema(NewClientInsurance);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientInsurance = new ClientDetails(NewClientInsurance);
        AddClientInsurance = await AddClientInsurance.save();
        res.send(AddClientInsurance);
    }
});

MyRouter.patch('/Update-Client-Insurance/:Email', async(req, res) => {
    const UpdateClientInsurance = await ClientDetails.findOne({ Email: req.params.Email });
    UpdateClientInsurance.Email = req.body.Email,
    UpdateClientInsurance.Weeks_without_PrimaryIncome = req.body.Weeks_without_PrimaryIncome,
    
    UpdateClientInsurance.ClaimedBenifit = req.body.ClaimedBenifit,
    UpdateClientInsurance.Details_ClaimedBenifit = req.body.Details_ClaimedBenifit,
    
    UpdateClientInsurance.InusranceRejected = req.body.InusranceRejected,
    UpdateClientInsurance.Details_InusranceRejected = req.body.Details_InusranceRejected,
   
    

    UpdateClientInsurance.Reason_Impediment_Disability = req.body.Reason_Impediment_Disability,
    UpdateClientInsurance.Details_Reason_Impediment_Disability = req.body.Details_Reason_Impediment_Disability,
    UpdateClientInsurance.PersonalInsuranceCover = req.body.PersonalInsuranceCover


    try{
        const C = await UpdateClientInsurance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

MyRouter.delete('/Delete-Client-Insurance/:Email', async(req, res) => {
    const DeleteClientInsurance = await ClientDetails.findOne({ Email: req.params.Email });

    try{
        const C = await DeleteClientInsurance.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

module.exports = MyRouter;