import React from 'react'

function Createuser() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 form-group'>
                <label >Username</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-6 form-group'>
                <label >Email</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Country</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >State</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >City</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>America</option>
                    <option>China</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Date of Birth</label>
                <input type={'date'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label >Phone no</label>
                <input type={'text'} className='form-control'/>
            </div>
            <div className='col-lg-4 form-group'>
                <label>Gender</label>
                <select className='form-control'>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className='col-lg-4 form-group'>
                <button className='btn btn-primary '>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Createuser