import {useState} from 'react'
import '../styles/EducationHistory.css'

export default function EducationHistory({school,degree,studyArea,startDate,endDate,id}){
    return (
        <div className="education-history-card" key={id}>
            <div className="education-school">{school}</div>
            <div className="education-history-subheader">
            <div className="education-degree-title">
                {degree}
            </div>
            <div className="education-dates">{startDate} to {endDate}</div>
            </div>
            <p className="education-studyArea">
                {studyArea}
            </p>
        </div>
    )
}