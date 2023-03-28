import React, { useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function FirstOutfield(props) {

    const {companyName , employeed, nameDate, website, industry, functionDate, textResume} = props.value

    const [show, setShow] = useState(false)
    const [show_2, setShow_2] = useState(false)
    const [show_3, setShow_3] = useState(false)
    const [show_4, setShow_4] = useState(false)
    const [show_5, setShow_5] = useState(false)
    const [show_6, setShow_6] = useState(false)

    function handleChange(){
        setShow((prev) => !prev)
    }

    function handleChange_2(){
        setShow_2((prev) => !prev)
    }

    function handleChange_3(){
        setShow_3((prev) => !prev)
    }

    function handleChange_4(){
        setShow_4((prev) => !prev)
    }

    function handleChange_5(){
        setShow_5((prev) => !prev)
    }

    function handleChange_6(){
        setShow_6((prev) => !prev)
    }

    const type = show ? 'text' : 'password'
    const type_2 = show_2 ? 'text' : 'password'
    const type_3 = show_3 ? 'text' : 'password'
    const type_4 = show_4 ? 'text' : 'password'
    const type_5 = show_5 ? 'text' : 'password'
    const type_6 = show_6 ? 'text' : 'password'

  return (
        <form className='outlet'>
            <h3 className='heading'>Basic Details</h3>          

            <label className='company_label'>
                <input type='text' className='company-name' placeholder={`${companyName}`} required/>
            </label>

            <label className='website'>
                <input type='text' className='website-url' placeholder={`${website}`} aria-label='website url' required/>
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type='text' className='employee-name' placeholder={`${employeed}`} required/>
                <span className='employee_label'>Label</span>
            </label>

            <label className='industry'>
                <input type='text' className='industry-name' placeholder={`${industry}`} required/>
                <span className='industry-label'>Label</span>
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type='text' className='manager-name' placeholder={`${nameDate}`} required/>
                <span className='manager_label'>Label</span>
            </label>

            <label className='manager-function'>
                <input type='text' className='manager-function-name' placeholder={`${functionDate}`} required/>
                <span className='manager-function-label'>Label</span>
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type={`${type}`} className='text-1' placeholder='Input Text 1'/>
                {!show ? <AiFillEye className='eye' onClick={() => handleChange()}/> : 
                    <AiFillEyeInvisible className='eye' onClick={() => handleChange()}/>}
            </label>

            <label className='assesitive-text-2'>
                <input type={`${type_2}`} className='text-2' placeholder='Input Text 2'/>
                {!show_2 ? <AiFillEye className='eye_2' onClick={() => handleChange_2()}/> : 
                    <AiFillEyeInvisible className='eye_2' onClick={() => handleChange_2()}/>}
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type={`${type_3}`} className='text-3' placeholder='Input Text 3'/>
                {!show_3 ? <AiFillEye className='eye_3' onClick={() => handleChange_3()}/> : 
                    <AiFillEyeInvisible className='eye_3' onClick={() => handleChange_3()}/>}
                <span className='text_3-label'>Label</span>
            </label>

            <label className='assesitive-text-4'>
                <input type={`${type_4}`} className='text-4' placeholder='Input Text 4'/>
                {!show_4 ? <AiFillEye className='eye_4' onClick={() => handleChange_4()}/> : 
                    <AiFillEyeInvisible className='eye_4' onClick={() => handleChange_4()}/>}
                <span className='text_4-label'>Label</span>
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type={`${type_5}`} className='text-5' placeholder='Input Text 5'/>
                {!show_5 ? <AiFillEye className='eye_5' onClick={() => handleChange_5()}/> : 
                    <AiFillEyeInvisible className='eye_5' onClick={() => handleChange_5()}/>}
                <span className='text_5-label'>Label</span>
            </label>

            <label className='assesitive-text-6'>
                <input type={`${type_6}`} className='text-6' placeholder='Input Text 6'/>
                {!show_6 ? <AiFillEye className='eye_6' onClick={() => handleChange_6()}/> : 
                    <AiFillEyeInvisible className='eye_6' onClick={() => handleChange_6()}/>}
                <span className='text_6-label'>Label</span>
                <p className='assistive'>Assistive Text</p>
            </label>

            <label>
                <input type='text' className='edit' placeholder='Input Text 7'/>
                <span className='edit_label'>Edit</span>
            </label>

            <label className='assesitive-edit'>
                <input type='text' className='assesitive-edit-text' placeholder={`${textResume}`}/>
                <span className='assesitive-edit_label'>Edit</span>
                <p className='assistive'>Assistive Text</p>
            </label>

        </form>
  )
}
