import { useState } from 'react'

export default function WorkExperience({company,startDate,endDate,position,description,id}){
    return (
        <div className="work-experience-card" key={id}>
            <div className="work-company">{company}</div>
            <div className="work-experience-subheader">
            <div className="work-position-title">
                {position}
            </div>
            <div className="work-dates">{startDate} to {endDate}</div>
            </div>
            <p className="work-description">
                {description}
            </p>
        </div>
    )
}