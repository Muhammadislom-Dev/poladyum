import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
        <div className="contact">
            <div className="container">
                <h2>
                    BIZ BILAN BOG'LANING
                </h2>
                <div className="contact_flex">
                    <div className="di"></div>
                    <div className='form_div'>
                        <form>
                            <input className='one' type="text" placeholder='Ismingiz' />
                            <input className='two' type="number" placeholder='Telefon raqamingiz' /> 
                            <button>Yuborish</button>   
                        </form>    
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact