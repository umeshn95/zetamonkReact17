import React from 'react'
import './furtherinfprmation.css'
const Contactform = () => {
    return (
        <div className='contact_form'>
            <div className='contact_form_mainname'> <div className='contact_form_name'>
                <input type='text' placeholder='Name *' required></input>
                <input type='text' placeholder='Name *' required></input>
            </div> </div>
                
            <div className='contact_form_inquiry'><input  type='text' placeholder='Name' required></input></div>
            <div className='contact_form_description' ><textarea  type='text' placeholder='Name' required></textarea></div>
            <div className='contact_form_button' >Get Free Consultation</div>
        </div>
    )
}

export default Contactform
