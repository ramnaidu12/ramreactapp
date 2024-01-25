
import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import * as Yup from 'yup';
import { json, useNavigate } from 'react-router-dom';




function StudentForm() {
let [studentdet,setStudentdet] = React.useState([])

const Navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      age: '',
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required('kindly please enter Your firstname').min(3, 'minimum char should be 3').max(8, 'max 8 char'),
      lastname: Yup.string().required('please enter Your lastname').min(3, 'minimum char should be 3').max(8, 'max 8 char'),
      age: Yup.string().required('please enter Your age ').min(1, 'minimum char should be 1').max(8, 'max 8 char'),
    }),

    onSubmit: (values) => {
    
      setStudentdet([...studentdet,values])
      let person = JSON.stringify(values)
      Navigate(`/childcomp/${person}`)
      
    }
   
  })
  // console.log(studentdet);

  return (<>

    <form onSubmit={formik.handleSubmit} className='text-center bg-dark w-25 p-3 rounded'>
    <h1>This is my form</h1>

      <input className='form-control mb-3' placeholder='Firstname' type='text' name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
      <div style={{ color: 'red' }}>{formik.touched.firstname && formik.errors.firstname}</div>
      <input className='form-control mb-3' placeholder='Lastname' type='text' name='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
      <div style={{ color: 'red' }}>{formik.touched.lastname && formik.errors.lastname}</div>
      <input className='form-control mb-3' placeholder='Age' type='text' name='age' onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
      <div style={{ color: 'red' }}>{formik.touched.age && formik.errors.age}</div>
      <button className='btn btn-info ' type='submit'>Submit</button>
    </form>
    <div className='d-flex flex-wrap'>
        {
          studentdet.map((std)=>{
            return(
              <div className='border w-25 bg-secondary text-center p-3 text-light rounded'>
                <h3>{std.firstname}</h3>
                <h3>{std.lastname}</h3>
                <h3>{std.age}</h3>
              </div>
            )
          })
        }
    </div>
  
  </>
  )
}

export default StudentForm;
