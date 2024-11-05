import { useState } from 'react'

export default function ContactInfo ({firstName,lastName,email,phone}) {
    return (
     <div className="cv-header">
        <h1>{firstName} {lastName}</h1>
        <div className="contact-row">
          {email} {phone}
        </div>
    </div>
    )
}