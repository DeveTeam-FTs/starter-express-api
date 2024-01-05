const Mongoose = require("mongoose");

const Client_ExpensesModalSchema = new Mongoose.Schema({
    // id:{
    //     type: Number
    // },
        
    Email:{
        type: String
    },
//******************************** Expense - Income Expense ********************************

    //********************** Household Expense **********************
        Household_Rent:{
            type: Number
        },
        Household_RentType:{
            type: String
        },
        Household_Electricity:{
            type: Number
        },
        Household_ElectricityType:{
            type: String
        },
        Household_WaterRates:{
            type: Number
        },
        Household_WaterRatesType:{
            type: String
        },
        Household_Gas:{
            type: Number
        },
        Household_GasType:{
            type: String
        },
        Household_Phone:{
            type: Number
        },
        Household_PhoneType:{
            type: String
        },
        Household_CouncilRate:{
            type: Number
        },
        Household_CouncilRateType:{
            type: String
        },
        Household_Internet:{
            type: Number
        },
        Household_InternetType:{
            type: String
        },
        Household_Others:{
            type: Number
        },
        Household_OthersType:{
            type: String
        },
    //********************** End of Household Expense **********************
        
    //********************** Personal Expense **********************
        Personal_Food:{
            type: Number
        },
        Personal_FoodType:{
            type: String
        },
        Personal_Clothing:{
            type: Number
        },
        Personal_ClothingType:{
            type: String
        },
        Personal_Cigarattes:{
            type: Number
        },
        Personal_CigarattesType:{
            type: String
        },
        Personal_Alcohol:{
            type: Number
        },
        Personal_AlcoholType:{
            type: String
        },
        Personal_SubscriptionFees:{
            type: Number
        },
        Personal_SubscriptionFeesType:{
            type: String
        },
        Personal_ClubMemberships:{
            type: Number
        },
        Personal_ClubMembershipsType:{
            type: String
        },
        Personal_Others:{
            type: Number
        },
        Personal_OthersType:{
            type: String
        },
        Personal_Holidays:{
            type: Number
        },
        Personal_HolidaysType:{
            type: String
        },
        Personal_DiningOut:{
            type: Number
        },
        Personal_DiningOutType:{
            type: String
        },
        Personal_MobilePhone:{
            type: Number
        },
        Personal_MobilePhoneType:{
            type: String
        },
        Personal_MedicalExpenses:{
            type: Number
        },
        Personal_MedicalExpensesType:{
            type: String
        },
    //********************** End of Personal Expense **********************
        
    //********************** Transport Expense **********************
        Transport_Petrol:{
            type: Number
        },
        Transport_PetrolType:{
            type: String
        },
        Transport_CarRepair:{
            type: Number
        },
        Transport_CarRepairType:{
            type: String
        },
        Transport_CarRegistration:{
            type: Number
        },
        Transport_CarRegistrationType:{
            type: String
        },
        Transport_PublicTransport:{
            type: Number
        },
        Transport_PublicTransportType:{
            type: String
        },
        Transport_Others:{
            type: Number
        },
        Transport_OthersType:{
            type: String
        },
    //********************** End of Transport Expense **********************
        
    //********************** Insurance Expense **********************
        Insurance_PrivateHealth:{
            type: Number
        },
        Insurance_PrivateHealthType:{
            type: String
        },
        Insurance_Life:{
            type: Number
        },
        Insurance_LifeType:{
            type: String
        },
        Insurance_IncomeProtection:{
            type: Number
        },
        Insurance_IncomeProtectionType:{
            type: String
        },
        Insurance_Car:{
            type: Number
        },
        Insurance_CarType:{
            type: String
        },
        Insurance_HomeContents:{
            type: Number
        },
        Insurance_HomeContentsType:{
            type: String
        },
        Insurance_Others:{
            type: Number
        },
        Insurance_OthersType:{
            type: String
        },
    //********************** End of Insurance Expense **********************

//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_ExpensesModalDetails", Client_ExpensesModalSchema);