const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/ProfessionalAdvisor/Client/ClientModal");
const ClientSchema = require("../../../Schema/ProfessionalAdvisor/Client/ClientModal");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-AdvisorModal', async(req, res) => {
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

MyRouter.patch("/Update-Client-AdvisorModal/:Email", async(req, res) => {
    const UpdateClientAdvisor = await ClientDetails.findOne({ Email: req.params.Email });
    // UpdateClientAdvisor.Email = req.body.Email,
    UpdateClientAdvisor.clientSolicitor_Name = req.body.clientSolicitor_Name,
    UpdateClientAdvisor.clientSolicitor_Company = req.body.clientSolicitor_Company,
    UpdateClientAdvisor.clientSolicitor_Phone = req.body.clientSolicitor_Phone,
    UpdateClientAdvisor.clientSolicitor_Email = req.body.clientSolicitor_Email,
    UpdateClientAdvisor.clientAccountant_Name = req.body.clientAccountant_Name,
    UpdateClientAdvisor.clientAccountant_Company = req.body.clientAccountant_Company,
    UpdateClientAdvisor.clientAccountant_Phone = req.body.clientAccountant_Phone,
    UpdateClientAdvisor.clientAccountant_Email = req.body.clientAccountant_Email,
    UpdateClientAdvisor.clientInsuranceAdvisor_Name = req.body.clientInsuranceAdvisor_Name,
    UpdateClientAdvisor.clientInsuranceAdvisor_Company = req.body.clientInsuranceAdvisor_Company,
    UpdateClientAdvisor.clientInsuranceAdvisor_Phone = req.body.clientInsuranceAdvisor_Phone,
    UpdateClientAdvisor.clientInsuranceAdvisor_Email = req.body.clientInsuranceAdvisor_Email,
    UpdateClientAdvisor.clientDoctor_Name = req.body.clientDoctor_Name,
    UpdateClientAdvisor.clientDoctor_Company = req.body.clientDoctor_Company,
    UpdateClientAdvisor.clientDoctor_Phone = req.body.clientDoctor_Phone,
    UpdateClientAdvisor.clientDoctor_Email = req.body.clientDoctor_Email,
    UpdateClientAdvisor.clientOther_Name = req.body.clientOther_Name,
    UpdateClientAdvisor.clientOther_Company = req.body.clientOther_Company,
    UpdateClientAdvisor.clientOther_Phone = req.body.clientOther_Phone,
    UpdateClientAdvisor.clientOther_Email = req.body.clientOther_Email

    try{
        const C = await UpdateClientAdvisor.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-AdvisorModal/:Email/:Advisor", async(req, res) => {

    
    const advisor = req.params.Advisor;
    const ClientAdvisor = await ClientDetails.findOne({ Email: req.params.Email });
    if (!ClientAdvisor) {
		return res.status(404).send('The user with the given Email was not found.');
	  }
    
    
      if (ClientAdvisor.clientSolicitor_Name !== undefined && advisor == "Solicitor") {
		console.log("Solicitor");
        ClientAdvisor.clientSolicitor_Name =  undefined,
        ClientAdvisor.clientSolicitor_Company = undefined,
        ClientAdvisor.clientSolicitor_Phone = undefined,
        ClientAdvisor.clientSolicitor_Email = undefined
        
        await ClientAdvisor.save();
        res.send(advisor);
	  }
      else if (ClientAdvisor.clientAccountant_Name !== undefined && advisor == "Accountant") {
		console.log("Accountant");
        ClientAdvisor.clientAccountant_Name = undefined,
        ClientAdvisor.clientAccountant_Company = undefined,
        ClientAdvisor.clientAccountant_Phone = undefined,
        ClientAdvisor.clientAccountant_Email = undefined

        await ClientAdvisor.save();
        res.send(advisor)
	  }

      else if (ClientAdvisor.clientInsuranceAdvisor_Name !== undefined && advisor == "InsuranceAdvisor") {
		console.log("Accountant");
        ClientAdvisor.clientInsuranceAdvisor_Name = undefined,
        ClientAdvisor.clientInsuranceAdvisor_Company = undefined,
        ClientAdvisor.clientInsuranceAdvisor_Phone = undefined,
        ClientAdvisor.clientInsuranceAdvisor_Email = undefined

        await ClientAdvisor.save();
        res.send(advisor)
	  }

      else if (ClientAdvisor.clientDoctor_Name !== undefined && advisor == "Doctor") {
		console.log("Accountant");
        ClientAdvisor.clientDoctor_Name = undefined,
        ClientAdvisor.clientDoctor_Company = undefined,
        ClientAdvisor.clientDoctor_Phone = undefined,
        ClientAdvisor.clientDoctor_Email = undefined

        await ClientAdvisor.save();
        res.send(advisor)
	  }

      else if (ClientAdvisor.clientOther_Name !== undefined && advisor == "Other") {
		console.log("Accountant");
        ClientAdvisor.clientOther_Name = undefined,
        ClientAdvisor.clientOther_Company = undefined,
        ClientAdvisor.clientOther_Phone = undefined,
        ClientAdvisor.clientOther_Email = undefined

        await ClientAdvisor.save();
        res.send(advisor)
	  }

      else{
		console.log("else",advisor)
        res.send("empty")
      }

    try{
        if(ClientAdvisor.clientSolicitor_Name == undefined &&
           ClientAdvisor.clientAccountant_Name == undefined &&
           ClientAdvisor.clientInsuranceAdvisor_Name == undefined &&
           ClientAdvisor.clientDoctor_Name == undefined &&
           ClientAdvisor.clientOther_Name == undefined ){
          console.log("Deleted Row")
          const C = await ClientAdvisor.remove();
        // res.send(C);
        }
        
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;