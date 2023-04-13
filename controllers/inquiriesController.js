const inquiriesDal = require("../dal/inquiriesAccessor");
class InquiriesController {
    getInquiries=async(req,res)=>{
        const inquiries=inquiriesDal.getInquiries();
        if(inquiries==null)
            return res.status(400).json("no inquiries found");
        return res.json(inquiries);
    }
    addInquiry=async(req,res)=>{
        const inquiry=req.body;
        inquiriesDal.addInquiry(inquiry);
        res.status(200)
    }
    getInquiryById=async(req,res)=>{
        const id=req.params;
        const inquiry=await inquiriesDal.getInquiryById(id);
        if(!inquiry)
            res.status(400).send("no inquiry found");
        res.status(200).json(inquiry);
    }
    deleteInquiry=async(req,res)=>{
        const id=req.params;
        await inquiriesDal.deleteInquiry(id);
        res.send("inquery deleted");
    }
}
const inquiriesController = new InquiriesController();
module.exports = inquiriesController;