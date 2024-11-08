import { useState, useID } from 'react'
import {createRoot} from 'react-dom/client'
import './App.css'
import ContactInfo from './components/ContactInfo.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import EducationHistory from './components/EducationHistory.jsx'

function App() {

  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'youremail@email.com',
    phone: '',
  })

  const [workData,setWorkData] = useState({
    company: '',
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    position: '',
    description: '',
    id: '',
  })

  const [educationData,setEducationData] = useState({
    school: '',
    degree: '',
    studyArea: '',
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    id: '',
  })

  const [workExperiences,setWorkExperiences] = useState([]);
  const [educationHistory,setEducationHistory] = useState([]);

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

  const handleWorkChange = (e) =>{
    const {name, value} = e.target;
    setWorkData((prevWorkData) => ({...prevWorkData, [name]: value,
    }));
  };

  const handleEdChange = (e) =>{
    const {name, value} = e.target;
    setEducationData((prevEdData) => ({...prevEdData, [name]: value,
    }));
  };
  
  const addWorkExperience = (e) => {
    setWorkExperiences([...workExperiences, 
      {
      company: workData.company,
      startDate: workData.startDate,
      endDate: workData.endDate,
      position: workData.position,
      description: workData.description,
      id: crypto.randomUUID()
    }])
    //reset form
    setWorkData({
      company: '',
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
      position: '',
      description: '',
    })
  }

  const addEducationHistory = (e) => {
    setEducationHistory([...educationHistory, 
      {
      school: educationData.school,
      degree: educationData.degree,
      studyArea: educationData.studyArea,
      startDate: educationData.startDate,
      endDate: educationData.endDate,
      id: crypto.randomUUID()
    }])
    //reset form
    setEducationData({
      school: '',
      degree: '',
      studyArea: '',
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
    })
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
              {workExperiences.map(experience => (
                <WorkExperience company={experience.company} startDate={experience.startDate} endDate={experience.endDate} position={experience.position} description={experience.description} />
              )) }          
              {educationHistory.map(item => (
                <EducationHistory school={item.school} degree={item.degree} studyArea={item.studyArea} startDate={item.startDate} endDate={item.endDate} />
              )) }      
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
            <form className="work-input-form">
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
                <input type="date" name="endDate" id="endDate" value = {workData.endDate} onChange={handleWorkChange} required/>
              </div>
              <div className="input-row">
              <label htmlFor="workDescription">
                Description:
              </label>
              <input type="textarea" name="description" id="description" value = {workData.description} onChange={handleWorkChange} required />
              </div>
                <button type="button" onClick={addWorkExperience}>Add Work Experience</button>
            </form>
            <div className="work-results">
              {workExperiences.map(experience => (
                <div className="editable-work-experience" key={experience.id}>
                    <WorkExperience company={experience.company} startDate={experience.startDate} endDate={experience.endDate} position={experience.position} description={experience.description} />
                    <button type="button" onClick={() => 
                      {setWorkExperiences(workExperiences.filter(exp => exp.id !== experience.id))}}>Delete</button>
                </div>
              )) }
            </div>
            </>
            )}
      </section>
      <section className="experience-input">
            {!showResult && (
              <>
            <h3>Add Education History</h3>
            <form className="education-input-form">
              <div className="input-row">
              <label htmlFor="educationSchool">
                School Name:
              </label>
              <input type="text" name="school" id="school" value = {educationData.school} onChange={handleEdChange} required />
              </div>
              <div className="input-row">
              <label htmlFor="edDegree">
                Degree:
              </label>
              <input type="text" name="degree" id="degree" value = {educationData.degree} onChange={handleEdChange} required />
              </div>
              <div className="input-row">
              <label htmlFor="edStudy">
                Area of Study:
              </label>
              <input type="text" name="studyArea" id="studyArea" value = {educationData.studyArea} onChange={handleEdChange} required />
              </div>
              <div className="input-row">
                <label htmlFor="edStartDate">
                  Start Date:
                </label>
                <input type="date" name="edStartDate" id="edStartDate" value = {educationData.startDate} onChange={handleEdChange} required />
              </div>
              <div className="input-row">
                <label htmlFor="workStartDate">
                  End Date:
                </label>
                <input type="date" name="edEndDate" id="edEndDate" value = {educationData.endDate} onChange={handleEdChange} required/>
              </div>
                <button type="button" onClick={addEducationHistory}>Add Education History</button>
            </form>
            <div className="education-results">
              {educationHistory.map(item => (
                <div className="editable-education-history" key={item.id}>
                  <EducationHistory school={item.school} degree={item.degree} studyArea={item.studyArea} startDate={item.startDate} endDate={item.endDate} />
                  <button type="button" onClick={() => 
                      {setEducationHistory(educationHistory.filter(it => it.id !== item.id))}}>Delete</button>
                </div>
              )) }
            </div>
            </>
            )}
      </section>
    </>
  )
}

export default App
