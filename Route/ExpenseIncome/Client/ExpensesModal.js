const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/ExpensesModal");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/ExpensesModal");
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

MyRouter.post('/Add-Client-ExpensesModal', async(req, res) => {
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

MyRouter.patch('/Update-Client-ExpensesModal/:Email', async(req, res) => {
    const UpdateExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
        
        UpdateExpenseIncome.Email = req.body.Email,


//******************************** Expense - Income Expense ********************************

    //********************** Household Expense **********************
        UpdateExpenseIncome.Household_Rent = req.body.Household_Rent,
        UpdateExpenseIncome.Household_RentType = req.body.Household_RentType,
        UpdateExpenseIncome.Household_Electricity = req.body.Household_Electricity,
        UpdateExpenseIncome.Household_ElectricityType = req.body.Household_ElectricityType,
        UpdateExpenseIncome.Household_WaterRates = req.body.Household_WaterRates,
        UpdateExpenseIncome.Household_WaterRatesType = req.body.Household_WaterRatesType,
        UpdateExpenseIncome.Household_Gas = req.body.Household_Gas,
        UpdateExpenseIncome.Household_GasType = req.body.Household_GasType,
        UpdateExpenseIncome.Household_Phone = req.body.Household_Phone,
        UpdateExpenseIncome.Household_PhoneType = req.body.Household_PhoneType,
        UpdateExpenseIncome.Household_CouncilRate = req.body.Household_CouncilRate,
        UpdateExpenseIncome.Household_CouncilRateType = req.body.Household_CouncilRateType,
        UpdateExpenseIncome.Household_Internet = req.body.Household_Internet,
        UpdateExpenseIncome.Household_InternetType = req.body.Household_InternetType,
        UpdateExpenseIncome.Household_Others = req.body.Household_Others,
        UpdateExpenseIncome.Household_OthersType = req.body.Household_OthersType,
    //********************** End of Household Expense **********************

    //********************** Personal Expense **********************
        UpdateExpenseIncome.Personal_Food = req.body.Personal_Food,
        UpdateExpenseIncome.Personal_FoodType = req.body.Personal_FoodType,
        UpdateExpenseIncome.Personal_Clothing = req.body.Personal_Clothing,
        UpdateExpenseIncome.Personal_ClothingType = req.body.Personal_ClothingType,
        UpdateExpenseIncome.Personal_Cigarattes = req.body.Personal_Cigarattes,
        UpdateExpenseIncome.Personal_CigarattesType = req.body.Personal_CigarattesType,
        UpdateExpenseIncome.Personal_Alcohol = req.body.Personal_Alcohol,
        UpdateExpenseIncome.Personal_AlcoholType = req.body.Personal_AlcoholType,
        UpdateExpenseIncome.Personal_SubscriptionFees = req.body.Personal_SubscriptionFees,
        UpdateExpenseIncome.Personal_SubscriptionFeesType = req.body.Personal_SubscriptionFeesType,
        UpdateExpenseIncome.Personal_ClubMemberships = req.body.Personal_ClubMemberships,
        UpdateExpenseIncome.Personal_ClubMembershipsType = req.body.Personal_ClubMembershipsType,
        UpdateExpenseIncome.Personal_Others = req.body.Personal_Others,
        UpdateExpenseIncome.Personal_OthersType = req.body.Personal_OthersType,
        UpdateExpenseIncome.Personal_Holidays = req.body.Personal_Holidays,
        UpdateExpenseIncome.Personal_HolidaysType = req.body.Personal_HolidaysType,
        UpdateExpenseIncome.Personal_DiningOut = req.body.Personal_DiningOut,
        UpdateExpenseIncome.Personal_DiningOutType = req.body.Personal_DiningOutType,
        UpdateExpenseIncome.Personal_MobilePhone = req.body.Personal_MobilePhone,
        UpdateExpenseIncome.Personal_MobilePhoneType = req.body.Personal_MobilePhoneType,
        UpdateExpenseIncome.Personal_MedicalExpenses = req.body.Personal_MedicalExpenses,
        UpdateExpenseIncome.Personal_MedicalExpensesType = req.body.Personal_MedicalExpensesType,
    //********************** End of Personal Expense **********************

    //********************** Transport Expense **********************
        UpdateExpenseIncome.Transport_Petrol = req.body.Transport_Petrol,
        UpdateExpenseIncome.Transport_PetrolType = req.body.Transport_PetrolType,
        UpdateExpenseIncome.Transport_CarRepair = req.body.Transport_CarRepair,
        UpdateExpenseIncome.Transport_CarRepairType = req.body.Transport_CarRepairType,
        UpdateExpenseIncome.Transport_CarRegistration = req.body.Transport_CarRegistration,
        UpdateExpenseIncome.Transport_CarRegistrationType = req.body.Transport_CarRegistrationType,
        UpdateExpenseIncome.Transport_PublicTransport = req.body.Transport_PublicTransport,
        UpdateExpenseIncome.Transport_PublicTransportType = req.body.Transport_PublicTransportType,
        UpdateExpenseIncome.Transport_Others = req.body.Transport_Others,
        UpdateExpenseIncome.Transport_OthersType = req.body.Transport_OthersType,
    //********************** End of Transport Expense **********************

    //********************** Insurance Expense **********************
        UpdateExpenseIncome.Insurance_PrivateHealth = req.body.Insurance_PrivateHealth,
        UpdateExpenseIncome.Insurance_PrivateHealthType = req.body.Insurance_PrivateHealthType,
        UpdateExpenseIncome.Insurance_Life = req.body.Insurance_Life,
        UpdateExpenseIncome.Insurance_LifeType = req.body.Insurance_LifeType,
        UpdateExpenseIncome.Insurance_IncomeProtection = req.body.Insurance_IncomeProtection,
        UpdateExpenseIncome.Insurance_IncomeProtectionType = req.body.Insurance_IncomeProtectionType,
        UpdateExpenseIncome.Insurance_Car = req.body.Insurance_Car,
        UpdateExpenseIncome.Insurance_CarType = req.body.Insurance_CarType,
        UpdateExpenseIncome.Insurance_HomeContents = req.body.Insurance_HomeContents,
        UpdateExpenseIncome.Insurance_HomeContentsType = req.body.Insurance_HomeContentsType,
        UpdateExpenseIncome.Insurance_Others = req.body.Insurance_Others,
        UpdateExpenseIncome.Insurance_OthersType = req.body.Insurance_OthersType
    //********************** End of Insurance Expense **********************

//******************************** End of Expense - Income Expense ********************************
        try{
            const C = await UpdateExpenseIncome.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete-Client-ExpensesModal/:Email', async(req, res) => {
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