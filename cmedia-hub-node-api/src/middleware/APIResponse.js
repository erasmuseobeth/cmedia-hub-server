const ApiResponse = {
    success( response={}) {
      return {
        success: true,
     ...response,
    /* data:yourData,
    status:code,
    other:details
     */
      };
    },
  
    error(response = {}) {
      return {error:{
        success: false,
        ...response,
        /*
          status:code,
         error:[],
         message:''
        */
      }}
    },
  };
  
  module.exports = ApiResponse;
  