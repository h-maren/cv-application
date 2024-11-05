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

  const [workData,setWorkData] = useState({
    company: '',
    startDate: new Date(),
    endDate: new Date(),
    position: '',
    description: '',
  })

  const [workExperiences,setWorkExperiences] = useState([]);

  const [showResult, setShowResult] = useState(false);

  let nextId=0;
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setShowResult(true);
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value,
    }));
  };

  const handleWorkChange = (e) =>{
    const {name, value} = e.target;
    setWorkData((prevWorkData) => ({...prevWorkData, [name]: value,
    }));
  };

  const addWorkExperience = (e) => {
    setWorkExperiences([...workExperiences, 
      {
      company: workData.company,
      startDate: workData.startDate,
      endDate: workData.endDate,
      position: workData.position,
      description: workData.description
    }])
  }

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
            <ul>
              {workExperiences.map(experience => (
                <li key={experience.startDate}>{experience.company} {experience.position}</li>
              )) }
            </ul>
            <div className="edit-bar">
              <button type="button" onClick={handleEditButton}>Edit</button>
            </div>
            </>
          )}
      </div>
      <section className="contact-input">
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
      </section>
      <section className="work-input">
            {!showResult && (
              <>
            <h3>Add Work Experience</h3>
            <form>
              <div className="input-row">
              <label htmlFor="workCompany">
                Company:
              </label>
              <input type="text" name="company" id="company" value = {workData.company} onChange={handleWorkChange} required />
              </div>
              <div className="input-row">
              <label htmlFor="workPosition">
                Position:
              </label>
              <input type="text" name="position" id="position" value = {workData.position} onChange={handleWorkChange} required />
              </div>
              <div className="input-row">
                <label htmlFor="workStartDate">
                  Start Date:
                </label>
                <input type="date" name="startDate" id="startDate" value = {workData.startDate} onChange={handleWorkChange} required />
                <label htmlFor="workStartDate">
                  End Date:
                </label>
                <input type="date" name="endDate" id="endDate" value = {workData.endDate} onChange={handleWorkChange} required />
              </div>
              <div className="input-row">
              <label htmlFor="workDescription">
                Description:
              </label>
              <input type="textarea" name="description" id="description" value = {workData.description} onChange={handleWorkChange} required />
              </div>
                <button type="button" onClick={addWorkExperience}>Add Work Experience</button>
            </form>
            <ul>
              {workExperiences.map(experience => (
                <li key={experience.startDate}>{experience.company} {experience.position}</li>
              )) }
            </ul>
            </>
            )}
      </section>
    </>
  )
}

export default App
