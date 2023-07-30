import React,{useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {Formik} from 'formik'
import { contactSchema } from '../Helpers/Validations';
import { contactsContext } from '../Helpers/ContactsContext';
import {MdDisabledByDefault} from "react-icons/md";
 import {Spinner} from './../Helpers/Index'
const AddContact = ({}) => {
  const {addPhotoToContact,setTextSearch,contact,jobs,citys,contactChangeHandler,createContactFormHandler,loading}=useContext(contactsContext)
  const navigate=useNavigate()
  const [selectedImage,setSelectedImage]=useState()


  const imageChangeHandler=e=>{
      let x=undefined;

console.log(e.target.files.length);
    if(e.target.files && e.target.files.length>0){
      x=URL.createObjectURL(e.target.files[0])
     

      addPhotoToContact(x)
      setSelectedImage(e.target.files[0]);
    }
  }

  useEffect(()=>{
    setTextSearch({text:""})

},[])




  const removeSelectedImageHandler=()=>{

  document.querySelector("input[type=file]").value=''
     setSelectedImage();
  }
  return (
        <div className="col-12  d-flex flex-column justify-content-center align-items-center p-1 mt-lg-1 mt-1 rounded">

          {loading ? <Spinner/>:
          (
<>
<div>
    <img src={require("./../Assets/images/add-user.png")} style={{width:"100%",borderRadius:"10px"}} alt="" />
  </div>
  <div className='addContact text-center col-12 col-lg-9 aboutBox d-flex flex-column justify-content-center align-align-items-center'>



<Formik  initialValues={{
  fullName:"",
  photo:"",
  mobile: "",
  job: "",
  city: "",
  email: "",
}}
validationSchema={contactSchema}
onSubmit={(values)=>{
console.log(values);
createContactFormHandler(values,URL.createObjectURL(selectedImage))
}}
>


{formik=>(

 <form action="" onSubmit={formik.handleSubmit} className='form-control'>
                                
          <div id='divFullName' className=' d-flex flex-column flex-lg-row ' >

          <label htmlFor="" className="d-inline-block w-25 ">نام و نام خانوادگی</label>
          <input id="fullName" type="text"  className='form-control d-inline-block w-50 '  name='fullName' {...formik.getFieldProps("fullName")}/>
          {formik.touched.fullName && formik.errors.fullName ? (<span className='noteFormActive  w-25'>{formik.errors.fullName}</span>) :null }

          </div>

          <div id='divMobile' className=' d-flex flex-column flex-lg-row my-3'>

          <label htmlFor="" className="d-inline-block w-25">موبایل</label>
          <input id="mobile" type="tel"  className='form-control d-inline w-50'name="mobile" {...formik.getFieldProps("mobile")} />
          { formik.touched.mobile && formik.errors.mobile ? (<span className='noteFormActive  w-25'>{formik.errors.mobile}</span>) :null }

          </div> 
    
          <div id='divEmail' className=' d-flex flex-column flex-lg-row my-3'>

          <label htmlFor="" className="d-inline-block w-25">ایمیل</label>
          <input id="email" type="email"  className='form-control d-inline w-50' name="email" {...formik.getFieldProps("email")}/>
          {formik.touched.email &&  formik.errors.email ? (<span className='noteFormActive  w-25'>{formik.errors.email}</span>) :null }

          </div>    


          <div id='divJobs' className=' d-flex flex-column flex-lg-row my-3'>

          <label htmlFor="" className="d-inline-block w-25"> مهارت </label>
          <select name="job" id="job" className='form-control d-inline w-50' {...formik.getFieldProps("job")}>
          <option value="" className='form-control d-inline w-75'  >مهارت های خود را انتخاب کنید</option>
          {jobs.map(job=>
            (
              <option key={job.id} value={job.id}>{job.jobName}</option>
            ))}
          </select>
          {formik.touched.job && formik.errors.job ? (<span className='noteFormActive  w-25'>{formik.errors.job}</span>) :null }

          </div>    



          <div id='divCitys' className=' d-flex flex-column flex-lg-row my-3'>

          <label htmlFor="" className="d-inline-block w-25"> شهر </label>
          <select name="city" id="city" className='form-control d-inline w-50' {...formik.getFieldProps("city")}>
          <option value="" className='form-control d-inline w-75'>شهر محل سکونت خود را انتخاب کنید </option>
          {citys.map(city=>
          (<option key={city.id} value={city.id}>{city.cityName}</option>
          ))}
          </select>
          {formik.touched.city &&  formik.errors.city ? (<span className='noteFormActive  w-25'>{formik.errors.city}</span>) :null }

          </div> 

          <div id='divPhoto' className=' d-flex flex-column flex-lg-row my-3'>

          <label htmlFor="" className="d-inline-block w-25">عکس</label>
          <input id="photo" type="file" onInput={imageChangeHandler} className='form-control d-inline w-50'  onChange={formik.handleChange} accept='image/*' name="photo"/>
          {formik.touched.photo &&  formik.errors.photo ? (<span className='noteFormActive  w-25'>{formik.errors.photo}</span>) :null }

          </div>  


          {selectedImage && (

          <div id="imagePreviewAddContact" className='d-flex flex-column my-3 justify-content-center align-content-center' style={{position:"relative"}}>

            <img src={URL.createObjectURL(selectedImage)} alt="تصویر عکس انتخابی"  style={{width:200,height:200,display:"block",margin:"0 auto"}}/>
            
            <MdDisabledByDefault id='removePreviewAddContact' onClick={removeSelectedImageHandler}  />
          </div>

          )}

          <div id='divButton' className=' d-flex justify-content-around'>

          <button type='submit' className='btn  w-25' style={{background:"#03a9f4",color:"#fff"}}>ثبت</button>
          <button onClick={()=>{navigate("/Contacts")}} className='btn btn-danger w-25'>انصراف</button>

          </div>
 </form>

)}

</Formik>
 {/* <form action="" onSubmit={(event)=>{createContactFormHandler(event,URL.createObjectURL(selectedImage))}} className='form-control'> */}


  </div>
</>

          )
        }
 
      </div>
    );
};

export default AddContact;
