const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/ProfessionalAdvisor/Partner/PartnerModal");
const PartnerSchema = require("../../../Schema/ProfessionalAdvisor/Partner/PartnerModal");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-AdvisorModal', async(req, res) => {
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

MyRouter.patch("/Update-Partner-AdvisorModal/:Email", async(req, res) => {
    const UpdatePartnerAdvisor = await PartnerDetails.findOne({ Email: req.params.Email });
    // UpdatePartnerAdvisor.Email = req.body.Email,
    UpdatePartnerAdvisor.partnerSolicitor_Name = req.body.partnerSolicitor_Name,
    UpdatePartnerAdvisor.partnerSolicitor_Company = req.body.partnerSolicitor_Company,
    UpdatePartnerAdvisor.partnerSolicitor_Phone = req.body.partnerSolicitor_Phone,
    UpdatePartnerAdvisor.partnerSolicitor_Email = req.body.partnerSolicitor_Email,
    UpdatePartnerAdvisor.partnerAccountant_Name = req.body.partnerAccountant_Name,
    UpdatePartnerAdvisor.partnerAccountant_Company = req.body.partnerAccountant_Company,
    UpdatePartnerAdvisor.partnerAccountant_Phone = req.body.partnerAccountant_Phone,
    UpdatePartnerAdvisor.partnerAccountant_Email = req.body.partnerAccountant_Email,
    UpdatePartnerAdvisor.partnerInsuranceAdvisor_Name = req.body.partnerInsuranceAdvisor_Name,
    UpdatePartnerAdvisor.partnerInsuranceAdvisor_Company = req.body.partnerInsuranceAdvisor_Company,
    UpdatePartnerAdvisor.partnerInsuranceAdvisor_Phone = req.body.partnerInsuranceAdvisor_Phone,
    UpdatePartnerAdvisor.partnerInsuranceAdvisor_Email = req.body.partnerInsuranceAdvisor_Email,
    UpdatePartnerAdvisor.partnerDoctor_Name = req.body.partnerDoctor_Name,
    UpdatePartnerAdvisor.partnerDoctor_Company = req.body.partnerDoctor_Company,
    UpdatePartnerAdvisor.partnerDoctor_Phone = req.body.partnerDoctor_Phone,
    UpdatePartnerAdvisor.partnerDoctor_Email = req.body.partnerDoctor_Email,
    UpdatePartnerAdvisor.partnerOther_Name = req.body.partnerOther_Name,
    UpdatePartnerAdvisor.partnerOther_Company = req.body.partnerOther_Company,
    UpdatePartnerAdvisor.partnerOther_Phone = req.body.partnerOther_Phone,
    UpdatePartnerAdvisor.partnerOther_Email = req.body.partnerpartnerOther_Email

    try{
        const C = await UpdatePartnerAdvisor.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

// MyRouter.delete("/Delete-Partner-AdvisorModal/:Email", async(req, res) => {
//     const DeletePartnerAdvisor = PartnerDetails.findOne({ Email: req.params.Email });
//     try{
//         const C = await DeletePartnerAdvisor.remove();
//         res.send(C);
//     }
//     catch(Error){
//         res.send("Error: " + Error);
//     }
// });

MyRouter.delete("/Delete-Partner-AdvisorModal/:Email/:Advisor", async(req, res) => {

    const advisor = req.params.Advisor;
    const PartnerAdvisor = await PartnerDetails.findOne({ Email: req.params.Email });
    if (!PartnerAdvisor) {
		return res.status(404).send('The user with the given Email was not found.');
	  }
    
    
      if (PartnerAdvisor.partnerSolicitor_Name !== undefined && advisor == "Solicitor") {
		console.log("Solicitor");
        PartnerAdvisor.partnerSolicitor_Name = undefined,
        PartnerAdvisor.partnerSolicitor_Company = undefined,
        PartnerAdvisor.partnerSolicitor_Phone = undefined,
        PartnerAdvisor.partnerSolicitor_Email = undefined
        
        await PartnerAdvisor.save();
        res.send(advisor);
	  }
      else if (PartnerAdvisor.partnerAccountant_Name !== undefined && advisor == "Accountant") {
		console.log("Accountant");
        PartnerAdvisor.partnerAccountant_Name = undefined,
        PartnerAdvisor.partnerAccountant_Company = undefined,
        PartnerAdvisor.partnerAccountant_Phone = undefined,
        PartnerAdvisor.partnerAccountant_Email = undefined

        await PartnerAdvisor.save();
        res.send(advisor)
	  }

      else if (PartnerAdvisor.partnerInsuranceAdvisor_Name !== undefined && advisor == "InsuranceAdvisor") {
		console.log("Accountant");
        PartnerAdvisor.partnerInsuranceAdvisor_Name = undefined,
        PartnerAdvisor.partnerInsuranceAdvisor_Company = undefined,
        PartnerAdvisor.partnerInsuranceAdvisor_Phone = undefined,
        PartnerAdvisor.partnerInsuranceAdvisor_Email = undefined

        await PartnerAdvisor.save();
        res.send(advisor)
	  }

      else if (PartnerAdvisor.partnerDoctor_Name !== undefined && advisor == "Doctor") {
		console.log("Accountant");
        PartnerAdvisor.partnerDoctor_Name = undefined,
        PartnerAdvisor.partnerDoctor_Company = undefined,
        PartnerAdvisor.partnerDoctor_Phone = undefined,
        PartnerAdvisor.partnerDoctor_Email = undefined

        await PartnerAdvisor.save();
        res.send(advisor)
	  }

      else if (PartnerAdvisor.partnerOther_Name !== undefined && advisor == "Other") {
		console.log("Accountant");
        PartnerAdvisor.partnerOther_Name = undefined,
        PartnerAdvisor.partnerOther_Company = undefined,
        PartnerAdvisor.partnerOther_Phone = undefined,
        PartnerAdvisor.partnerOther_Email = undefined

        await PartnerAdvisor.save();
        res.send(advisor)
	  }

      else{
		console.log("else",advisor)
        res.send("empty")
      }

    try{
        if(PartnerAdvisor.partnerSolicitor_Name == undefined &&
           PartnerAdvisor.partnerAccountant_Name == undefined &&
           PartnerAdvisor.partnerInsuranceAdvisor_Name == undefined &&
           PartnerAdvisor.partnerDoctor_Name == undefined &&
           PartnerAdvisor.partnerOther_Name == undefined ){
          console.log("Deleted Row")
          const C = await PartnerAdvisor.remove();
        // res.send(C);
        }
        
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;