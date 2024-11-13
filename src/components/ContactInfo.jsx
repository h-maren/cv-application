import { useState } from 'react'
import '../styles/ContactInfo.css'

export default function ContactInfo ({firstName,lastName,email,phone}) {
    return (
     <div className="cv-header">
        <h1>{firstName} {lastName}</h1>
        <div className="contact-row">
          {email} | {phone}
        </div>
    </div>
    )
}