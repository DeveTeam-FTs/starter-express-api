const Joi = require("joi");

const ClientPersonalAssetsSchema = (Assets) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
// ******************************** Personal Assets - Assets ********************************
ContentsPA: Joi.number(),
MotorVehicle1PA: Joi.number(),
MotorVehicle2PA: Joi.number(),
BoatPA: Joi.number(),
CaravanPA: Joi.number(),
OtherPA: Joi.number(),
// ******************************** End of Personal Assets - Assets ********************************
    });
    return schema.validate(Assets);
};

module.exports = ClientPersonalAssetsSchema;