const db = require('../model/index');
const Inquiries = db.db.inquiries;

class InquiriesDataAccessor {
    getInquiries=async()=>{
        return await Inquiries.findAll();
    }
    addInquiry=async(inquiry)=>{
        return await Inquiries.create(inquiry);
    }
    getInquiryById=async(id)=>{
        return await Inquiries.findAll({where:{id}});
    }
    deleteInquiry =async(id)=>{
       await Inquiries.destroy({where:{id:id}});
    }
}


const inquiriesDataAccessor = new InquiriesDataAccessor();
module.exports = inquiriesDataAccessor;