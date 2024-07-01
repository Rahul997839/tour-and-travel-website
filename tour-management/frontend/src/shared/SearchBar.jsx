import React, { useRef } from 'react'
import './search-bar.css'
import {   Form, FormGroup} from "reactstrap";

const SerchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
    if(location==='' || distance===' '|| maxGroupSize===''){
        return alert('All fields are required!')
    }
    }

  return (
    <div className='search__bar'>
        <Form className="d-flex align-items-center gap-4">
            <FormGroup  className='d-flex gap-3 form__group form__group-last'>
                <span>
                <i class="ri-map-pin-3-line"></i>
            
                </span>  
                <div>
                    <h6>Location</h6>
                    <input type="text " placeholder='where are you going?' ref=
               {locationRef} />
               </div>
            </FormGroup>
            <FormGroup  className='d-flex gap-3 form__group form__group-last'>
                <span>
                <i class="ri-pin-distance-line"></i>
                </span>
                <div>
                    <h6>Distance</h6>
                    <input type="number " placeholder='Distance k/m' ref={distanceRef} />
                    </div> 
               
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span >
                <i class="ri-group-line"></i>
                </span>
                <div>
                    <h6>Max people</h6>
                    <input type="number " placeholder='how many peoples' ref={maxGroupSizeRef}/>
                    </div> 
                
            </FormGroup>

            <span className="search__icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
      
    </div>
  )
}

export default SerchBar;
