const fieldDal = require("../dal/fieldAccessor");

class FieldController {
    getFields = async (req, res) => {
        const fieldList = await fieldDal.getFields();
        res.json(fieldList);
    }
}
const fieldController = new FieldController();
module.exports = fieldController;