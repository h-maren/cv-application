import { useState } from 'react'

export default function WorkExperience({company,startDate,endDate,position,description}){
    return (
        <div className="work-experience-card">
            <div className="work-experience-title">
            <div className="work-company">{company}</div>
            <div className="work-dates">{startDate} to {endDate}</div>
            </div>
            <div className="work-position-title">
                {position}
            </div>
            <p className="work-description">
                {description}
            </p>
        </div>
    )
}