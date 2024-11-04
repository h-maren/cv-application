import { useState } from 'react'
import './App.css'
import InfoForm from './components/info.jsx'

function App() {

  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  
  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value,
    }));
  };

  return (
    <>
      <header>
        <h1>Generate Your Own CV!</h1>
      </header>
      <div className="cv-results">
        <div className="cv-header">
          <h1>{formData.firstName} {formData.lastName}</h1>
        </div>
      </div>
      <div className="input-bar">
        <form onSubmit={handleSubmit} className="infoForm">
              <div className="input-row">
              <label htmlFor="firstName">
                  First Name:
              </label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange}
              required />
              </div>
              <div className="input-row">
              <label htmlFor="lastName">
                  Last Name:
              </label>
              <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange}
              required />
              </div>
              <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
