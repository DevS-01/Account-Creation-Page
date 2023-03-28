import React from "react"
import FirstOutfield from "./components/FirstOutfield"
function App() {

  return (
    <div className="container">
      <FirstOutfield value={{
        companyName: 'Company Name',
        employeed: 'No of Employees',
        nameDate: 'Account Manager Name',
        website: 'Website URL',
        industry: 'Industry',
        functionDate: 'Account Manager Function',
        textResume: 'Input Text 7'}}/>

      <FirstOutfield value={{
        companyName: 'First Name',
        employeed: 'Degree Name',
        nameDate: 'Degree Start Date',
        website: 'Second Name',
        industry: 'College Name',
        functionDate: 'Degree End Date',
        textResume: 'Resume'}}/>

    </div>
  )
}

export default App
