import React from 'react'
import "./Right.css"
import emailjs from '@emailjs/browser';

function Right() {
   function sendmail(e){
    e.preventDefault();

    emailjs.sendForm('service_49t64dq', 'template_fc0qo6l', e.target, 'user_42NAP6vfkqPrPxmiTBvKf')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent ")
        }, (error) => {
            console.log(error.text);
        });

    e.target.reset();
   }

    return (
      <div className="rightbody">
        <h2>Send Message</h2>
          <div className='messagediv'>

          <form  className='messageform' onSubmit={sendmail}>
             
             <input style={{height:"30px",marginBottom:"20px",fontSize:"20px"}} name="name" type="text" placeholder='Name'/>
            
             <input style={{height:"30px",marginBottom:"20px",fontSize:"20px"}} name="email" type="text" placeholder='Email'/>
             
             <textarea style={{height:"150px",marginBottom:"20px",fontSize:"24px"}} name="message" type="text" placeholder='Message..'/>
             <input className="sendbtn" type="submit" value="SEND"/>
           </form>
       
          </div>
          
        
      </div>
    );
}

export default Right
