import { useState } from 'react'

export default function InfoForm (){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    fullName=firstName+lastName;
    const [email,setEmail] = useState('your@email.com');
    const [phoneNum,setPhoneNum] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="infoForm">
            <div className="input-row">
            <label htmlFor="firstName">
                First Name:
            </label>
            <input type="text" name="firstName" id="firstName" value = {firstName}
            onChange={(e) => setFirstName(e.target.value)
            }
            required />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

