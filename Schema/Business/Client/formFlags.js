const Joi = require("joi");

const Client_BusinessSchema = (Business) => {
    const schema = Joi.object({
        Email: Joi.string().required(),

//********************************** PRIVATE COMPANY **********************************
BC: Joi.boolean(),
BT: Joi.boolean(),
PartnerShip: Joi.boolean(),
ST: Joi.boolean(),
TC: Joi.boolean(),



    });
    return schema.validate(Business);
};

module.exports = Client_BusinessSchema;