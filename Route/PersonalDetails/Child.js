const Express = require("express");
const MyRouter = Express.Router();

const ChildDetails = require("../../Models/PersonalDetails/Child");
const ChildSchema = require("../../Schema/PersonalDetails/Child");

MyRouter.get('/', async(req, res) => {
    const C = await ChildDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Child', async(req, res) => {
    const NewChild = (req.body);
    const { error } = ChildSchema(NewChild);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddChild = new ChildDetails(NewChild);
        AddChild = await AddChild.save();
        res.send(AddChild);
    }
});

MyRouter.patch("/Update-Child/:Email/:_id", async(req, res) => {
    const UpdateChild = await ChildDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdateChild.Email = req.body.Email,
    UpdateChild.childSurname = req.body.childSurname,
    UpdateChild.childGivenName = req.body.childGivenName,
    UpdateChild.childDoB = req.body.childDoB,
    UpdateChild.childAge = req.body.childAge,
    UpdateChild.childGender = req.body.childGender,
    UpdateChild.childRelationship = req.body.childRelationship,
    UpdateChild.childDependentRadio = req.body.childDependentRadio,
    UpdateChild.childDependantUntilAge = req.body.childDependantUntilAge

    try{
        const C = await UpdateChild.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Child/:Email/:_id", async(req, res) => {
    const DeleteChild = ChildDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteChild.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;