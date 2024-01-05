const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/employmentDetails");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/employmentDetails");
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

MyRouter.post('/Add', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = ClientSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new ClientDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update/:Email', async(req, res) => {
    const UpdateExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
        
        UpdateExpenseIncome.Email = req.body.Email
        UpdateExpenseIncome.clientEMPOwner = req.body.clientEMPOwner,
    
    UpdateExpenseIncome.clientEMPOccupation = req.body.clientEMPOccupation,
    UpdateExpenseIncome.clientEMPEmployment = req.body.clientEMPEmployment,
    UpdateExpenseIncome.clientEMPName = req.body.clientEMPName,
    UpdateExpenseIncome.clientEMPCommencement = req.body.clientEMPCommencement,
    UpdateExpenseIncome.clientEMPHours = req.body.clientEMPHours,
    UpdateExpenseIncome.clientEMPExcluding = req.body.clientEMPExcluding,
    UpdateExpenseIncome.clientEMPSuperAnnuation = req.body.clientEMPSuperAnnuation,
    UpdateExpenseIncome.clientEMPChoiceradio = req.body.clientEMPChoiceradio,
    UpdateExpenseIncome.clientEMPSacrificeradio = req.body.clientEMPSacrificeradio,
    UpdateExpenseIncome.clientEMPSalarySacrifice = req.body.clientEMPSalarySacrifice,
    UpdateExpenseIncome.clientEMPcontributionradio = req.body.clientEMPcontributionradio,
    UpdateExpenseIncome.clientEMPTaxContribution = req.body.clientEMPTaxContribution,
    UpdateExpenseIncome.clientEMPSignificantlyradio = req.body.clientEMPSignificantlyradio,
    UpdateExpenseIncome.clientEMPUnusedSickLeave = req.body.clientEMPUnusedSickLeave,
    UpdateExpenseIncome.clientEMPUnusedSickLeaveType = req.body.clientEMPUnusedSickLeaveType,
    UpdateExpenseIncome.clientEMPUnusedAnnual = req.body.clientEMPUnusedAnnual,
    UpdateExpenseIncome.clientEMPUnusedAnnualType = req.body.clientEMPUnusedAnnualType,
    UpdateExpenseIncome.clientEMPUnusedlong = req.body.clientEMPUnusedlong,
    UpdateExpenseIncome.clientEMPUnusedlongType = req.body.clientEMPUnusedlongType,
    UpdateExpenseIncome.clientEMPCurrentlyRadio = req.body.clientEMPCurrentlyRadio,
    UpdateExpenseIncome.clientEMPFBTStatus = req.body.clientEMPFBTStatus,
    UpdateExpenseIncome.clientEMPSalaryRadio = req.body.clientEMPSalaryRadio,
    UpdateExpenseIncome.clientEMPCostCar = req.body.clientEMPCostCar ,
    UpdateExpenseIncome.clientEMPFBTradio = req.body.clientEMPFBTradio,
    UpdateExpenseIncome.clientEMPCarPackaged = req.body.clientEMPCarPackaged,
    UpdateExpenseIncome.clientEMPSalaryPackageRadio = req.body.clientEMPSalaryPackageRadio,
    UpdateExpenseIncome.clientEMPAbilitytoSacrifice = req.body.clientEMPAbilitytoSacrifice
    

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
    const DeleteExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;