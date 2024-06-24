async function sendEmail (data: any){
  
    const response = await fetch ('https://api-ct-common.azurewebsites.net/api/Email', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      // },
      body: JSON.stringify(data)
    });

   
    return response;
  
}

export default sendEmail; 