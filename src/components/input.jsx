import { useState } from 'react'

export default function InputForm ({userInfo}) {
    return (
        <div className="infoForm">
            <div className="input-row">
            <label htmlFor="firstName}">
                First Name:
            </label>
            <input type="text" name="firstName" id="firstName" value = {userInfo.firstName} required />
            </div>
            <div className="input-row">
            <label htmlFor="lastName}">
                Last Name:
            </label>
            <input type="text" name="lastName" id="lastName" value = {userInfo.lastName} required />
            </div>
        </div>
    )
}