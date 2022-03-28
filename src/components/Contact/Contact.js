import React from 'react'
import  "./contact.css"
import Left from './Left/Left'
import Right from './Right/Right'


function Contact() {
    return (
        <div id="contact">
            <div className='contactme'>
                <h1>Contact</h1></div>
            <div className='contactbody'>
            <Left />
            <Right/>
            </div>
           
        </div>
    )
}

export default Contact
