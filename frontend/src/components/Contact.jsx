import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [subject, setSubject] =useState("");
  const [message, setMessage] =useState("");

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    await axios.post("https://mern-project-6r5e.onrender.com/api/v1/message/send",{ name, email, subject, message,},
      {withCredentials: true, headers: { "Content-Type": "application/json"}}
    ).then((res) => {
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      
    })
    .catch((error) => {
      toast.error(error.response.data.message);
      //console.log(error) to see catch error in web page
    });
  };
  return (
    <>
     <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Any where, Any City, 5432</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: +91-9876543212</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>mk@gmail.com</p>
        </div>
        </div>
<div className="banner">
  <div className="item">
  {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984402!2d72.741099!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64e053e7e2f%3A0xbebfd01b6f6b6cb6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709099958323!5m2!1sen!2sin"
  style={{ border: 0, width: "100%", height: "450px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
<div className="item">
  <form onSubmit={handleSendMessage}>
    <h2>CONTACT</h2>
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
      <input type="text" placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)} />
    </div>

    <textarea rows={10} type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)} />
    <input type="text" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} />
  
  <button type="submit">Send</button>
  </form>
</div>

      </div>
      </div> 
    </>
  );
}

export default Contact
