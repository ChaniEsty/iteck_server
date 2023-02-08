
class JobsDataAccessor{
  constructor() {
      this.init();
  }
  init = async () => {
      await this.connection.connect(); 
  }
  
  getJobs=async(JobsData) => {
  keys=JobsData.keys
  keys.forEach(element => {
      
  });
  //     this.connection.query("SELECT *  FROM jobs  WHERE keys=keys[", function (error, results, fields) {
  //   if (error) throw error;

  // });
  }
  
  endConnection(){this.connection.end();}}

  const jobsDataAccessor = new JobsDataAccessor();
  module.exports = jobsDataAccessor;