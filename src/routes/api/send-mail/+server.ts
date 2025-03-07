import { json } from '@sveltejs/kit';

//i use this for simulate the loading
function delay(ms: number){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

//add and create API for send email
export async function POST({request}) {
    const { contactMail, contactName, informationAboutProject } = await request.json();
    if (!contactMail || !contactName || !informationAboutProject) {
        json({ message: "Could not send email. Missing data." }, { status: 400 });
      }
      await delay(2000);
     
    
      try {
       
        return json({ emailSentSuccessfully: true });
      } catch (err) {
       
        return json({ err }, { status: 500 });
      }


}
