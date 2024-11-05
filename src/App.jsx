import { useState } from 'react'
import {createRoot} from 'react-dom/client'
import './App.css'
import ContactInfo from './components/ContactInfo.jsx'

function App() {

  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'youremail@email.com',
    phone: '',
  })

  const [showResult, setShowResult] = useState(false);

  
  const handleSubmit = (e) => {
      e.preventDefault();
      setShowResult(true);
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value,
    }));
  };

  const handleEditButton = (e) => {
      e.preventDefault();
      setShowResult(false);
  }

  return (
    <>
      <header>
        <h1>Generate Your Own CV!</h1>
      </header>
      <div className="cv-results">
          {showResult && (
            <>
            <ContactInfo firstName={formData.firstName} lastName={formData.lastName} email={formData.email} phone={formData.phone} />
            <div className="edit-bar">
              <button type="button" onClick={handleEditButton}>Edit</button>
            </div>
            </>
          )}
      </div>
      <div className="input-bar">
            {!showResult && (
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <label htmlFor="firstName">
                    First Name:
                </label>
                <input type="text" name="firstName" id="firstName" value = {formData.firstName} onChange={handleInputChange} required/>
              </div>
              <div className="input-row">
                <label htmlFor="lastName">
                    Last Name:
                </label>
                <input type="text" name="lastName" id="lastName" value = {formData.lastName} onChange={handleInputChange} required />
              </div>
              <div className="input-row">
                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" name="email" id="email" value = {formData.email} onChange={handleInputChange} required />
              </div>
              <div className="input-row">
                <label htmlFor="phone">
                    Phone Number:
                </label>
                <input type="tel" name="phone" id="phone" value = {formData.phone} onChange={handleInputChange} required />
              </div>
              <button type="submit">Generate Resume</button>
            </form>
            )}
      </div>
    </>
  )
}

export default App
