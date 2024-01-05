
const Express = require('express');
var cors = require('cors');
// var helmet = require('helmet');

const App = Express();


App.use(Express.json());
App.use(cors());
// App.use(helmet());

const Mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1/AdvisorSimplicity";
const url = "mongodb+srv://faisalameen2022:tDe3j5h1GNOEPJvE@cluster1.31kwwb5.mongodb.net/";

Mongoose.connect(url, { useNewUrlParser: true });
const Mongo = Mongoose.connection;

Mongo.on("open", () => {
  console.log("MongoDB Connected!");
});


App.get('/api', (req, res) => {
  res.send('Hello, This is React Backend!');
});

//******************************** PERSONAL DETAILS **********************************
const ClientPath = require("./Route/PersonalDetails/Cient");
App.use("/api/Client", ClientPath);

const PartnerPath = require("./Route/PersonalDetails/Partner");
App.use("/api/Partner", PartnerPath);

const ChildPath = require("./Route/PersonalDetails/Child");
App.use("/api/Child", ChildPath);
//******************************** PERSONAL DETAILS **********************************

//******************************** BUSINESS DETAILS **********************************
const Client_BusinessPath = require("./Route/Business/Client/Client");
App.use("/api/Client-Business", Client_BusinessPath);

const SoleClient_BusinessPath = require("./Route/Business/Client/SoleTrader");
App.use("/api/Client-SoleTrader-Business", SoleClient_BusinessPath);

const PartnershipClient_BusinessPath = require("./Route/Business/Client/Partnership");
App.use("/api/Client-Partnership-Business", PartnershipClient_BusinessPath);

const BusinessTrustClient_BusinessPath = require("./Route/Business/Client/BusinessTrust");
App.use("/api/Client-BusinessTrust-Business", BusinessTrustClient_BusinessPath);

const BucketCompanyClient_BusinessPath = require("./Route/Business/Client/BucketCompany");
App.use("/api/Client-BucketCompany-Business", BucketCompanyClient_BusinessPath);

const TradingCompanyClient_BusinessPath = require("./Route/Business/Client/TradingCompany");
App.use("/api/Client-TradingCompany-Business", TradingCompanyClient_BusinessPath);

const formFlags_BusinessPath = require("./Route/Business/Client/formFlags");
App.use("/api/Client-formFlags-Business", formFlags_BusinessPath);

// partner Apis

const SolePartner_BusinessPath = require("./Route/Business/Partner/SoleTrader");
App.use("/api/Partner-SoleTrader-Business", SolePartner_BusinessPath);

const PartnershipPartner_BusinessPath = require("./Route/Business/Partner/Partnership");
App.use("/api/Partner-Partnership-Business", PartnershipPartner_BusinessPath);

const TradingCompanyPartner_BusinessPath = require("./Route/Business/Partner/TradingCompany");
App.use("/api/Partner-TradingCompany-Business", TradingCompanyPartner_BusinessPath);

const BucketCompanyPartner_BusinessPath = require("./Route/Business/Partner/BucketCompany");
App.use("/api/Partner-BucketCompany-Business", BucketCompanyPartner_BusinessPath);

const BusinessTrustPartner_BusinessPath = require("./Route/Business/Partner/BusinessTrust");
App.use("/api/Partner-BusinessTrust-Business", BusinessTrustPartner_BusinessPath);


const Partner_BusinessPath = require("./Route/Business/Partner/Partner");
App.use("/api/Partner-Business", Partner_BusinessPath);




//******************************** BUSINESS DETAILS **********************************

//******************************** EXPENSE INCOME DETAILS **********************************

// client

const Client_ExpenseEmploymentDetailsPath = require("./Route/ExpenseIncome/Client/employmentDetails");
App.use("/api/Client-Income-EmploymentDetails", Client_ExpenseEmploymentDetailsPath);

const Client_ExpenseCentreLinkPath = require("./Route/ExpenseIncome/Client/centreLink");
App.use("/api/Client-Income-CentreLink", Client_ExpenseCentreLinkPath);

const Client_ExpenseOtherPath = require("./Route/ExpenseIncome/Client/otherIncome");
App.use("/api/Client-Income-Other", Client_ExpenseOtherPath);

const Client_ExpensePath = require("./Route/ExpenseIncome/Client/Expenses");
App.use("/api/Client-Income-Expenses", Client_ExpensePath);

// client  end

// partner

const Partner_ExpenseEmploymentDetailsPath = require("./Route/ExpenseIncome/Partner/employmentDetails");
App.use("/api/Partner-Income-EmploymentDetails", Partner_ExpenseEmploymentDetailsPath);

const Partner_ExpenseCentreLinkPath = require("./Route/ExpenseIncome/Partner/centreLink");
App.use("/api/Partner-Income-CentreLink", Partner_ExpenseCentreLinkPath);

const Partner_ExpenseOtherPath = require("./Route/ExpenseIncome/Partner/otherIncome");
App.use("/api/Partner-Income-Other", Partner_ExpenseOtherPath);

const Partner_ExpensePath = require("./Route/ExpenseIncome/Partner/Expenses");
App.use("/api/Partner-Income-Expenses", Partner_ExpensePath);


// partner end
 
// Modal
const Client_ExpensesModalPath = require("./Route/ExpenseIncome/Client/ExpensesModal");
App.use("/api/Client-ExpensesModal", Client_ExpensesModalPath);



// below both api was created when forms are combined
const Client_ExpenseIncomePath = require("./Route/ExpenseIncome/Client/Client");
App.use("/api/Client-ExpenseIncome", Client_ExpenseIncomePath);

const Partner_ExpenseIncomePath = require("./Route/ExpenseIncome/Partner/Partner");
App.use("/api/Partner-ExpenseIncome", Partner_ExpenseIncomePath);

// upper both api was created when forms are combined





//******************************** EXPENSE INCOME DETAILS **********************************

//******************************** PROFESSIONAL ADVISOR DETAILS **********************************
const Client_ProfessionalAdvisorPath = require("./Route/ProfessionalAdvisor/Client/Client");
App.use("/api/Client-ProfessionalAdvisor", Client_ProfessionalAdvisorPath);
const Client_ProfessionalAdvisorModalPath = require("./Route/ProfessionalAdvisor/Client/ClientModal");
App.use("/api/Client-ProfessionalAdvisor-Modal",
  Client_ProfessionalAdvisorModalPath
);

const Partner_ProfessionalAdvisorPath = require("./Route/ProfessionalAdvisor/Partner/Partner");
App.use("/api/Partner-ProfessionalAdvisor", Partner_ProfessionalAdvisorPath);
const Partner_ProfessionalAdvisorModalPath = require("./Route/ProfessionalAdvisor/Partner/PartnerModal");
App.use("/api/Partner-ProfessionalAdvisor-Modal",
  Partner_ProfessionalAdvisorModalPath
);
//******************************** PROFESSIONAL ADVISOR DETAILS **********************************

//******************************** ASSETS DETAILS **********************************
const Client_AssetsPath = require("./Route/Assets/Client");
App.use("/api/Client-Assets", Client_AssetsPath);

const Client_FamilyHomePath = require("./Route/Assets/FamilyHome");
App.use("/api/Client-FamilyHome", Client_FamilyHomePath);
const Client_PersonalAssetsPath = require("./Route/Assets/PersonalAssets");
App.use("/api/Client-PersonalAssets", Client_PersonalAssetsPath);

const Client_PersonalDebtsPath = require("./Route/Assets/PersonalDebts");
App.use("/api/Client-PersonalDebts", Client_PersonalDebtsPath);

const Client_InheritancePath = require("./Route/Assets/Inheritance");
App.use("/api/Client-Inheritance", Client_InheritancePath);
//******************************** ASSETS DETAILS **********************************

//******************************** INVESTMENTS DETAILS **********************************


// Joined
const Joined_InvestmentPath = require("./Route/Investments/Joined/Joined");
App.use("/api/Joined-Investment", Joined_InvestmentPath);

const Joined_BankAccountsPath = require("./Route/Investments/Joined/BankAccounts");
App.use("/api/Joined-BankAccounts", Joined_BankAccountsPath);

const Joined_AustralianMarketSharePath = require("./Route/Investments/Joined/AustralianMarketShare");
App.use("/api/Joined-Australian-Market-Share", Joined_AustralianMarketSharePath);

const Joined_AustralianSharePortfolioPath = require("./Route/Investments/Joined/AustralianSharePortfolio");
App.use("/api/Joined-Australian-Share-Portfolio",Joined_AustralianSharePortfolioPath);

const Joined_InvestmentBondsPath = require("./Route/Investments/Joined/InvestmentBonds");
App.use("/api/Joined-InvestmentBonds", Joined_InvestmentBondsPath);

const Joined_ManagedFundsPath = require("./Route/Investments/Joined/ManagedFunds");
App.use("/api/Joined-ManagedFunds", Joined_ManagedFundsPath);

const Joined_ManagedFundsPortfolioPath = require("./Route/Investments/Joined/ManagedFundsPortfolio");
App.use("/api/Joined-ManagedFunds-Portfolio", Joined_ManagedFundsPortfolioPath);

const Joined_OthersPath = require("./Route/Investments/Joined/Others");
App.use("/api/Joined-Others", Joined_OthersPath);

const Joined_TermDepositPath = require("./Route/Investments/Joined/TermDeposit");
App.use("/api/Joined-TermDeposit", Joined_TermDepositPath);




// partner
const Partner_InvestmentPath = require("./Route/Investments/Partner/Partner");
App.use("/api/Partner-Investment", Partner_InvestmentPath);

const Partner_BankAccountsPath = require("./Route/Investments/Partner/BankAccounts");
App.use("/api/Partner-BankAccounts", Partner_BankAccountsPath);

const Partner_AustralianMarketSharePath = require("./Route/Investments/Partner/AustralianMarketShare");
App.use("/api/Partner-Australian-Market-Share", Partner_AustralianMarketSharePath);

const Partner_AustralianSharePortfolioPath = require("./Route/Investments/Partner/AustralianSharePortfolio");
App.use("/api/Partner-Australian-Share-Portfolio",Partner_AustralianSharePortfolioPath);

const Partner_InvestmentBondsPath = require("./Route/Investments/Partner/InvestmentBonds");
App.use("/api/Partner-InvestmentBonds", Partner_InvestmentBondsPath);

const Partner_ManagedFundsPath = require("./Route/Investments/Partner/ManagedFunds");
App.use("/api/Partner-ManagedFunds", Partner_ManagedFundsPath);

const Partner_ManagedFundsPortfolioPath = require("./Route/Investments/Partner/ManagedFundsPortfolio");
App.use("/api/Partner-ManagedFunds-Portfolio", Partner_ManagedFundsPortfolioPath);

const Partner_OthersPath = require("./Route/Investments/Partner/Others");
App.use("/api/Partner-Others", Partner_OthersPath);

const Partner_TermDepositPath = require("./Route/Investments/Partner/TermDeposit");
App.use("/api/Partner-TermDeposit", Partner_TermDepositPath);


// client
const Client_InvestmentPath = require("./Route/Investments/Client");
App.use("/api/Client-Investment", Client_InvestmentPath);

const Client_BankAccountsPath = require("./Route/Investments/BankAccounts");
App.use("/api/Client-BankAccounts", Client_BankAccountsPath);

const Client_AustralianMarketSharePath = require("./Route/Investments/AustralianMarketShare");
App.use("/api/Client-Australian-Market-Share", Client_AustralianMarketSharePath);

const Client_AustralianSharePortfolioPath = require("./Route/Investments/AustralianSharePortfolio");
App.use("/api/Client-Australian-Share-Portfolio",Client_AustralianSharePortfolioPath);

const Client_InvestmentBondsPath = require("./Route/Investments/InvestmentBonds");
App.use("/api/Client-InvestmentBonds", Client_InvestmentBondsPath);

const Client_InvestmentPropertiesPath = require("./Route/Investments/InvestmentProperties");
App.use("/api/Client-InvestmentProperties", Client_InvestmentPropertiesPath);

const Client_InvestmentProperties_InnerPath = require("./Route/Investments/InvestmentProperties_Inner");
App.use("/api/Client-Inner-InvestmentProperties",Client_InvestmentProperties_InnerPath);

const Client_ManagedFundsPath = require("./Route/Investments/ManagedFunds");
App.use("/api/Client-ManagedFunds", Client_ManagedFundsPath);

const Client_ManagedFundsPortfolioPath = require("./Route/Investments/ManagedFundsPortfolio");
App.use("/api/Client-ManagedFunds-Portfolio", Client_ManagedFundsPortfolioPath);

const Client_OthersPath = require("./Route/Investments/Others");
App.use("/api/Client-Others", Client_OthersPath);

const Client_TermDepositPath = require("./Route/Investments/TermDeposit");
App.use("/api/Client-TermDeposit", Client_TermDepositPath); 
//******************************** INVESTMENTS DETAILS **********************************

//******************************** ESTATE PLANNING DETAILS **********************************
const Client_EstatePlanningPath = require("./Route/EstatePlanning/Client/Client");
App.use("/api/Client-EstatePlanning", Client_EstatePlanningPath);

// const Client_ModalEstatePlanningPath = require("./Route/EstatePlanning/Client/ClientModal");
// App.use("/api/Client-ModalEstatePlanning", Client_ModalEstatePlanningPath);

const Partner_EstatePlanningPath = require("./Route/EstatePlanning/Partner/Partner");
App.use("/api/Partner-EstatePlanning", Partner_EstatePlanningPath);
const Partner_ModalEstatePlanningPath = require("./Route/EstatePlanning/Partner/PartnerModal");
App.use("/api/Partner-ModalEstatePlanning", Partner_ModalEstatePlanningPath);
//******************************** ESTATE PLANNING DETAILS **********************************

//******************************** Super & Retirment **********************************
const Client_RetirmentPath = require("./Route/Retirements/Client/Client2");
App.use("/api/Client-Retirement", Client_RetirmentPath);

const Client_RetirmentSuperAccountPath = require("./Route/Retirements/Client/ClientSuperAccounts");
App.use("/api/Client-Super-Retirement", Client_RetirmentSuperAccountPath);

const Client_RetirmentSuperBeneficiariesPath = require("./Route/Retirements/Client/Super_Beneficiaries");
App.use("/api/Client-Retirement-Beneficiaries",Client_RetirmentSuperBeneficiariesPath);

const Client_RetirmentSuperContributionsPath = require("./Route/Retirements/Client/Super_Contributions");
App.use("/api/Client-Retirement-Contributions",
  Client_RetirmentSuperContributionsPath
);

const Client_RetirmentSuperInvestmentPath = require("./Route/Retirements/Client/Super_Investment");
App.use("/api/Client-Retirement-Investment", Client_RetirmentSuperInvestmentPath);

const Client_RetirmentSuperInsurancePath = require("./Route/Retirements/Client/Super_Insurance");
App.use("/api/Client-Retirement-Insurance", Client_RetirmentSuperInsurancePath);

const Client_RetirmentPensionAccountPath = require("./Route/Retirements/Client/ClientPensionAccount");
App.use("/api/Client-Pension-Retirement", Client_RetirmentPensionAccountPath);

const Client_RetirmentPensionAccount_BeneficiariesPath = require("./Route/Retirements/Client/Client_PensionAccount_Beneficiaries");
App.use("/api/Client-Retirement-PensionBeneficiaries",
  Client_RetirmentPensionAccount_BeneficiariesPath
);

const Client_RetirmentPensionAccount_InvestmentPath = require("./Route/Retirements/Client/Client_PensionAccount_Investment");
App.use("/api/Client-Retirement-PensionInvestment",
  Client_RetirmentPensionAccount_InvestmentPath
);

const Client_RetirmentAnnuitiesPath = require("./Route/Retirements/Client/ClientAnnuities");
App.use("/api/Client-Annuities-Retirement", Client_RetirmentAnnuitiesPath);

const Client_RetirmentLifetimePensionPath = require("./Route/Retirements/Client/ClientLifetimePension");
App.use("/api/Client-LifetimePension-Retirement",
  Client_RetirmentLifetimePensionPath
);

const Partner_RetirmentPath = require("./Route/Retirements/Partner/Partner");
App.use("/api/Partner-Retirement", Partner_RetirmentPath);

const Partner_RetirmentSuperAccountPath = require("./Route/Retirements/Partner/PartnerSuperAccounts");
App.use("/api/Partner-Super-Retirement", Partner_RetirmentSuperAccountPath);

const Partner_RetirmentSuperBeneficiariesPath = require("./Route/Retirements/Partner/Super_Beneficiaries");
App.use("/api/Partner-Retirement-Beneficiaries",
  Partner_RetirmentSuperBeneficiariesPath
);

const Partner_RetirmentSuperContributionsPath = require("./Route/Retirements/Partner/Super_Contributions");
App.use("/api/Partner-Retirement-Contributions",
  Partner_RetirmentSuperContributionsPath
);

const Partner_RetirmentSuperInvestmentPath = require("./Route/Retirements/Partner/Super_Investment");
App.use("/api/Partner-Retirement-Investment", Partner_RetirmentSuperInvestmentPath);

const Partner_RetirmentSuperInsurancePath = require("./Route/Retirements/Partner/Super_Insurance");
App.use("/api/Partner-Retirement-Insurance", Partner_RetirmentSuperInsurancePath);

const Partner_RetirmentPensionAccountPath = require("./Route/Retirements/Partner/PartnerPensionAccount");
App.use("/api/Partner-Pesnison-Retirement", Partner_RetirmentPensionAccountPath);

const Partner_RetirmentPensionAccount_BeneficiariesPath = require("./Route/Retirements/Partner/Partner_PensionAccount_Beneficiaries");
App.use("/api/Partner-Retirement-PensionBeneficiaries",
  Partner_RetirmentPensionAccount_BeneficiariesPath
);

const Partner_RetirmentPensionAccount_InvestmentPath = require("./Route/Retirements/Partner/Partner_PensionAccount_Investment");
App.use("/api/Partner-Retirement-PensionInvestment",
  Partner_RetirmentPensionAccount_InvestmentPath
);

const Partner_RetirmentAnnuitiesPath = require("./Route/Retirements/Partner/PartnerAnnuities");
App.use("/api/Partner-Annuities-Retirement", Partner_RetirmentAnnuitiesPath);

const Partner_RetirmentLifetimePensionPath = require("./Route/Retirements/Partner/PartnerLifetimePension");
App.use("/api/Partner-LifetimePension-Retirement",
  Partner_RetirmentLifetimePensionPath
);
//******************************** Super & Retirment **********************************

//******************************** SMSF DETAILS **********************************
const Client_SMSF_AccumulationPath = require("./Route/SMSF/Client/Accumulation");
App.use("/api/Client-SMSF-Accumulation", Client_SMSF_AccumulationPath);

const Client_SMSF_BeneficiaryPath = require("./Route/SMSF/Client/BeneficiaryDetails");
App.use("/api/Client-SMSF-Beneficiary", Client_SMSF_BeneficiaryPath);

const Client_SMSF_ContributionPath = require("./Route/SMSF/Client/ContributionDetails");
App.use("/api/Client-SMSF-Contribution", Client_SMSF_ContributionPath);

const Client_SMSF_AustralianShareMarketPath = require("./Route/SMSF/Client/AustralianShareMarket");
App.use("/api/Client-SMSF-AustralianShareMarket",
  Client_SMSF_AustralianShareMarketPath
);

const Client_SMSF_AustralianSharePortfolioPath = require("./Route/SMSF/Client/AustralianSharePortfolio");
App.use("/api/Client-SMSF-AustralianSharePortfolio",
  Client_SMSF_AustralianSharePortfolioPath
);

const Client_SMSF_BankAccountsPath = require("./Route/SMSF/Client/BankAccounts");
App.use("/api/Client-SMSF-BankAccounts", Client_SMSF_BankAccountsPath);

const Client_SMSF_ClientPath = require("./Route/SMSF/Client/Client");
App.use("/api/Client-SMSF-Client", Client_SMSF_ClientPath);

const Client_SMSF_InvestmentModalPath = require("./Route/SMSF/Client/InvestmentModal");
App.use("/api/Client-SMSF-InvestmentModal", Client_SMSF_InvestmentModalPath);

const Client_SMSF_InvestmentPropertiesPath = require("./Route/SMSF/Client/InvestmentProperties");
App.use("/api/Client-SMSF-InvestmentProperties",
  Client_SMSF_InvestmentPropertiesPath
);

const Client_SMSF_ManagedFundsPath = require("./Route/SMSF/Client/ManagedFunds");
App.use("/api/Client-SMSF-ManagedFunds", Client_SMSF_ManagedFundsPath);

const Client_SMSF_ManagedFundsPortfolioPath = require("./Route/SMSF/Client/ManagedFundsPortfolio");
App.use("/api/Client-SMSF-ManagedFundsPortfolio",
  Client_SMSF_ManagedFundsPortfolioPath
);

const Client_SMSF_PensionAccountPath = require("./Route/SMSF/Client/PensionAccount");
App.use("/api/Client-SMSF-PensionAccount", Client_SMSF_PensionAccountPath);

const Client_SMSFForm_Path = require("./Route/SMSF/Client/SMSF_Form");
App.use("/api/Client-SMSFForm", Client_SMSFForm_Path);

const Client_SMSF_TermDepositPath = require("./Route/SMSF/Client/TermDeposit");
App.use("/api/Client-SMSF-TermDeposit", Client_SMSF_TermDepositPath);
//******************************** SMSF DETAILS **********************************

//******************************** INVESTMENT TRUST DETAILS **********************************
const Client_InvestmentTrust_AustralianShareMarketPath = require("./Route/InvestmentTrust/AustralianShareMarket");
App.use("/api/Client-InvestmentTrust-AustralianShareMarket",
  Client_InvestmentTrust_AustralianShareMarketPath
);

const Client_InvestmentTrust_AustralianSharePortfolioPath = require("./Route/InvestmentTrust/AustralianSharePortfolio");
App.use("/api/Client-InvestmentTrust-AustralianSharePortfolio",
  Client_InvestmentTrust_AustralianSharePortfolioPath
);

const Client_InvestmentTrust_BankAccountsPath = require("./Route/InvestmentTrust/BankAccounts");
App.use("/api/Client-InvestmentTrust-BankAccounts",
  Client_InvestmentTrust_BankAccountsPath
);

const Client_InvestmentTrust_InvestmentPropertiesPath = require("./Route/InvestmentTrust/InvestmentProperties");
App.use("/api/Client-InvestmentTrust-InvestmentProperties",
  Client_InvestmentTrust_InvestmentPropertiesPath
);

const Client_InvestmentTrust_InvestmentPropertiesPathModal = require("./Route/InvestmentTrust/InvestmentModal");
App.use("/api/Client-InvestmentTrust-InvestmentProperties-Modal",
  Client_InvestmentTrust_InvestmentPropertiesPathModal
);

const Client_InvestmentTrust_InvestmentFormPath = require("./Route/InvestmentTrust/InvestmentTrust_Form");
App.use("/api/Client-InvestmentTrust-InvestmentForm",
  Client_InvestmentTrust_InvestmentFormPath
);

const Client_InvestmentTrust_ManagedFundsPath = require("./Route/InvestmentTrust/ManagedFunds");
App.use("/api/Client-InvestmentTrust-ManagedFunds",
  Client_InvestmentTrust_ManagedFundsPath
);

const Client_InvestmentTrust_ManagedFundsPortfolioPath = require("./Route/InvestmentTrust/ManagedFundsPortfolio");
App.use("/api/Client-InvestmentTrust-ManagedFundsPortfolio",
  Client_InvestmentTrust_ManagedFundsPortfolioPath
);

const Client_InvestmentTrust_TermDepositPath = require("./Route/InvestmentTrust/TermDeposit");
App.use("/api/Client-InvestmentTrust-TermDeposit",
  Client_InvestmentTrust_TermDepositPath
);
//******************************** INVESTMENT TRUST DETAILS **********************************

//******************************** INSURANCE DETAILS **********************************
const Client_InsurancePath = require("./Route/Insurance/Client");
App.use("/api/Client-Insurance", Client_InsurancePath);

const Client_InsuranceLifePath = require("./Route/Insurance/ClientLife");
App.use("/api/Client-Life-Insurance", Client_InsuranceLifePath);

const Client_InsuranceIncomePath = require("./Route/Insurance/ClientIncome");
App.use("/api/Client-Income-Insurance", Client_InsuranceIncomePath);

const Partner_InsurancePath = require("./Route/Insurance/Partner");
App.use("/api/Partner-Insurance", Partner_InsurancePath);

const Partner_Insurance_IncomePath = require("./Route/Insurance/PartnerIncome");
App.use("/api/Partner-Income-Insurance", Partner_Insurance_IncomePath);

const Partner_Insurance_LifePath = require("./Route/Insurance/PartnerLife");
App.use("/api/Partner-Life-Insurance", Partner_Insurance_LifePath);
//******************************** INSURANCE DETAILS **********************************

//********************** RISK PROFILE DETAILS ************************
const Client_RiskProfile = require("./Route/RiskProfile/Client");
App.use("/api/Client-RiskProfile", Client_RiskProfile);

const Partner_RiskProfile = require("./Route/RiskProfile/Partner");
App.use("/api/Partner-RiskProfile", Partner_RiskProfile);
//********************** RISK PROFILE DETAILS ************************

//********************** GOALS OBJECTIVES - 1ST BRACKET DETAILS ************************
const BudgetGoals = require("./Route/GoalsObjectives_1stBracket/Budget");
App.use("/api/Client-BudgetGoal", BudgetGoals);

const CarGoals = require("./Route/GoalsObjectives_1stBracket/Car");
App.use("/api/Client-CarGoal", CarGoals);

const HolidayGoals = require("./Route/GoalsObjectives_1stBracket/Holiday");
App.use("/api/Client-HolidayGoal", HolidayGoals);

const CreditCardGoals = require("./Route/GoalsObjectives_1stBracket/CreditCard");
App.use("/api/Client-CreditCardGoal", CreditCardGoals);

const EmergencyFundGoals = require("./Route/GoalsObjectives_1stBracket/EmergencyFund");
App.use("/api/Client-EmergencyFundGoal", EmergencyFundGoals);

const FamilyLifeStyleGoals = require("./Route/GoalsObjectives_1stBracket/FamilyLifeStyle");
App.use("/api/Client-FamilyLifeStyleGoal", FamilyLifeStyleGoals);

const RegularSavingsGoals = require("./Route/GoalsObjectives_1stBracket/RegularSavings");
App.use("/api/Client-RegularSavingsGoal", RegularSavingsGoals);

const AllSuperAnnuationGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/AllSuperAnnuation");
App.use("/api/Client-AllSuperAnnuationGoal", AllSuperAnnuationGoal);

const BoatGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Boat");
App.use("/api/Client-BoatGoal", BoatGoal);

const BusinessGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Business");
App.use("/api/Client-BusinessGoal", BusinessGoal);

const CareGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Care");
App.use("/api/Client-CareGoal", CareGoal);

const CentreLinkEligibiilityGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/CentreLinkEligibiility");
App.use("/api/Client-CentreLinkEligibiilityGoal", CentreLinkEligibiilityGoal);

const ChildrenEducationGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/ChildrenEducation");
App.use("/api/Client-ChildrenEducationGoal", ChildrenEducationGoal);

const ContributeSuperAnnuationGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/ContributeSuperAnnuation");
App.use("/api/Client-ContributeSuperAnnuationGoal", ContributeSuperAnnuationGoal);

const DownSizeFamilyHomeGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/DownSizeFamilyHome");
App.use("/api/Client-DownSizeFamilyHomeGoal", DownSizeFamilyHomeGoal);

const EstatePlanningGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/EstatePlanning");
App.use("/api/Client-EstatePlanningGoal", EstatePlanningGoal);

const FamilyTrustGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/FamilyTrust");
App.use("/api/Client-FamilyTrustGoal", FamilyTrustGoal);

const FinancialAdviceGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/FinancialAdvice");
App.use("/api/Client-FinancialAdviceGoal", FinancialAdviceGoal);

const HomeLoanGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/HomeLoan");
App.use("/api/Client-HomeLoanGoal", HomeLoanGoal);

const HouseGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/House");
App.use("/api/Client-HouseGoal", HouseGoal);

const IncomeStreamGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/IncomeStream");
App.use("/api/Client-IncomeStreamGoal", IncomeStreamGoal);

const InheritanceGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Inheritance");
App.use("/api/Client-InheritanceGoal", InheritanceGoal);

const InvestmentPortfolioGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/InvestmentPortfolio");
App.use("/api/Client-InvestmentPortfolioGoal", InvestmentPortfolioGoal);

const InvestmentPropertyGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/InvestmentProperty");
App.use("/api/Client-InvestmentPropertyGoal", InvestmentPropertyGoal);

const PayLessTaxGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/PayLessTax");
App.use("/api/Client-PayLessTaxGoal", PayLessTaxGoal);

const RenovateFamilyHomeGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/RenovateFamilyHome");
App.use("/api/Client-RenovateFamilyHomeGoal", RenovateFamilyHomeGoal);

const RetirementGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Retirement");
App.use("/api/Client-RetirementGoal", RetirementGoal);

const ReviewInvestmentPortfolioGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/ReviewInvestmentPortfolio");
App.use("/api/Client-ReviewInvestmentPortfolioGoal", ReviewInvestmentPortfolioGoal);

const SMSFGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/SMSF");
App.use("/api/Client-SMSFGoal", SMSFGoal);

const StartFamilyGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/StartFamily");
App.use("/api/Client-StartFamilyGoal", StartFamilyGoal);

const SuperannuationGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Superannuation");
App.use("/api/Client-SuperannuationGoal", SuperannuationGoal);

const UpgradeFamilyHomeGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/UpgradeFamilyHome");
App.use("/api/Client-UpgradeFamilyHomeGoal", UpgradeFamilyHomeGoal);

const WeddingGoal = require("./Route/GoalsObjectives_1stBracket/OptionalGoals/Wedding");
App.use("/api/Client-WeddingGoal", WeddingGoal);
//********************** GOALS OBJECTIVES - 1ST BRACKET DETAILS ************************



App.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
App.listen((process.env.PORT || 3000),()=>{
  console.log("Server Connected!");
})