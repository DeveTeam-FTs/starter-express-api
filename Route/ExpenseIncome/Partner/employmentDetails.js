const Express = require("express");
const PartnerDetails = require("../../../Models/ExpenseIncome/Partner/employmentDetails");
const PartnerSchema = require("../../../Schema/ExpenseIncome/Partner/employmentDetails");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = PartnerSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new PartnerDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const UpdateExpenseIncome = await PartnerDetails.findOne({ Email: req.params.Email });
        
        UpdateExpenseIncome.Email = req.body.Email
    
    UpdateExpenseIncome.partnerEMPOccupation = req.body.partnerEMPOccupation,
    UpdateExpenseIncome.partnerEMPEmployment = req.body.partnerEMPEmployment,
    UpdateExpenseIncome.partnerEMPName = req.body.partnerEMPName,
    UpdateExpenseIncome.partnerEMPCommencement = req.body.partnerEMPCommencement,
    UpdateExpenseIncome.partnerEMPHours = req.body.partnerEMPHours,
    UpdateExpenseIncome.partnerEMPExcluding = req.body.partnerEMPExcluding,
    UpdateExpenseIncome.partnerEMPSuperAnnuation = req.body.partnerEMPSuperAnnuation,
    UpdateExpenseIncome.partnerEMPChoiceradio = req.body.partnerEMPChoiceradio,
    UpdateExpenseIncome.partnerEMPSacrificeradio = req.body.partnerEMPSacrificeradio,
    UpdateExpenseIncome.partnerEMPSalarySacrifice = req.body.partnerEMPSalarySacrifice,
    UpdateExpenseIncome.partnerEMPcontributionradio = req.body.partnerEMPcontributionradio,
    UpdateExpenseIncome.partnerEMPTaxContribution = req.body.partnerEMPTaxContribution,
    UpdateExpenseIncome.partnerEMPSignificantlyradio = req.body.partnerEMPSignificantlyradio,
    UpdateExpenseIncome.partnerEMPUnusedSickLeave = req.body.partnerEMPUnusedSickLeave,
    UpdateExpenseIncome.partnerEMPUnusedSickLeaveType = req.body.partnerEMPUnusedSickLeaveType,
    UpdateExpenseIncome.partnerEMPUnusedAnnual = req.body.partnerEMPUnusedAnnual,
    UpdateExpenseIncome.partnerEMPUnusedAnnualType = req.body.partnerEMPUnusedAnnualType,
    UpdateExpenseIncome.partnerEMPUnusedlong = req.body.partnerEMPUnusedlong,
    UpdateExpenseIncome.partnerEMPUnusedlongType = req.body.partnerEMPUnusedlongType,
    UpdateExpenseIncome.partnerEMPCurrentlyRadio = req.body.partnerEMPCurrentlyRadio,
    UpdateExpenseIncome.partnerEMPFBTStatus = req.body.partnerEMPFBTStatus,
    UpdateExpenseIncome.partnerEMPSalaryRadio = req.body.partnerEMPSalaryRadio,
    UpdateExpenseIncome.partnerEMPCostCar = req.body.partnerEMPCostCar ,
    UpdateExpenseIncome.partnerEMPFBTradio = req.body.partnerEMPFBTradio,
    UpdateExpenseIncome.partnerEMPCarPackaged = req.body.partnerEMPCarPackaged,
    UpdateExpenseIncome.partnerEMPSalaryPackageRadio = req.body.partnerEMPSalaryPackageRadio,
    UpdateExpenseIncome.partnerEMPAbilitytoSacrifice = req.body.partnerEMPAbilitytoSacrifice
    

//******************************** End of Expense ********************************
        try{
            const C = await UpdateExpenseIncome.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete/:Email', async(req, res) => {
    const DeleteExpenseIncome = await PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;