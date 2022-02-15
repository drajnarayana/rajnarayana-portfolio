import React from 'react'
import  "./contact.css"
import Left from './Left/Left'
import Right from './Right/Right'


function Contact() {
    return (
        <div>
            <div className='contactme'>
                <h1>Contact Me</h1></div>
            <div className='contactbody'>
            <Left />
            <Right/>
            </div>
           
        </div>
    )
}

export default Contact
