const Joi = require("joi");

const Client_ExpensesModalSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),

//******************************** Expense - Income Expense ********************************

    //********************** Household Expense **********************
        Household_Rent: Joi.number(),
        Household_RentType: Joi.string(),
        Household_Electricity: Joi.number(),
        Household_ElectricityType: Joi.string(),
        Household_WaterRates: Joi.number(),
        Household_WaterRatesType: Joi.string(),
        Household_Gas: Joi.number(),
        Household_GasType: Joi.string(),
        Household_Phone: Joi.number(),
        Household_PhoneType: Joi.string(),
        Household_CouncilRate: Joi.number(),
        Household_CouncilRateType: Joi.string(),
        Household_Internet: Joi.number(),
        Household_InternetType: Joi.string(),
        Household_Others: Joi.number(),
        Household_OthersType: Joi.string(),
    //********************** End of Household Expense **********************

    //********************** Personal Expense **********************
        Personal_Food: Joi.number(),
        Personal_FoodType: Joi.string(),
        Personal_Clothing: Joi.number(),
        Personal_ClothingType: Joi.string(),
        Personal_Cigarattes: Joi.number(),
        Personal_CigarattesType: Joi.string(),
        Personal_Alcohol: Joi.number(),
        Personal_AlcoholType: Joi.string(),
        Personal_SubscriptionFees: Joi.number(),
        Personal_SubscriptionFeesType: Joi.string(),
        Personal_ClubMemberships: Joi.number(),
        Personal_ClubMembershipsType: Joi.string(),
        Personal_Others: Joi.number(),
        Personal_OthersType: Joi.string(),
        Personal_Holidays: Joi.number(),
        Personal_HolidaysType: Joi.string(),
        Personal_DiningOut: Joi.number(),
        Personal_DiningOutType: Joi.string(),
        Personal_MobilePhone: Joi.number(),
        Personal_MobilePhoneType: Joi.string(),
        Personal_MedicalExpenses: Joi.number(),
        Personal_MedicalExpensesType: Joi.string(),
    //********************** End of Personal Expense **********************

    //********************** Transport Expense **********************
        Transport_Petrol: Joi.number(),
        Transport_PetrolType: Joi.string(),
        Transport_CarRepair: Joi.number(),
        Transport_CarRepairType: Joi.string(),
        Transport_CarRegistration: Joi.number(),
        Transport_CarRegistrationType: Joi.string(),
        Transport_PublicTransport: Joi.number(),
        Transport_PublicTransportType: Joi.string(),
        Transport_Others: Joi.number(),
        Transport_OthersType: Joi.string(),
    //********************** End of Transport Expense **********************

    //********************** Insurance Expense **********************
        Insurance_PrivateHealth: Joi.number(),
        Insurance_PrivateHealthType: Joi.string(),
        Insurance_Life: Joi.number(),
        Insurance_LifeType: Joi.string(),
        Insurance_IncomeProtection: Joi.number(),
        Insurance_IncomeProtectionType: Joi.string(),
        Insurance_Car: Joi.number(),
        Insurance_CarType: Joi.string(),
        Insurance_HomeContents: Joi.number(),
        Insurance_HomeContentsType: Joi.string(),
        Insurance_Others: Joi.number(),
        Insurance_OthersType: Joi.string(),
    //********************** End of Insurance Expense **********************

//******************************** Expense - Income Expense ********************************
    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_ExpensesModalSchema;