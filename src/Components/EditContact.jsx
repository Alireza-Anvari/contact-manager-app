import React,{useState,useEffect,useContext} from 'react';
import { contactsContext } from '../Helpers/ContactsContext';
import { useNavigate,useParams } from 'react-router-dom';
import {MdDisabledByDefault} from "react-icons/md";
 import {Spinner} from './../Helpers/Index'
 import { getContact,getCity,getJob,updateContact } from '../Helpers/ServicesContacts';
import { parseInt } from 'lodash';
import { toast } from 'react-toastify';
const EditContact= () => {
  const {loading,setLoading,jobs,citys,setFilteredContacts,contacts}=useContext(contactsContext)
    const navigate=useNavigate();
    const {contactID}=useParams();
    const [contact,setContact]=useState({})
  const [selectedImage,setSelectedImage]=useState()



  const contactChangeHandler=e=>{
    if(e.target.files){

    setContact({...contact,"photo":  URL.createObjectURL(e.target.files[0]) })
    }
    else{
      setContact({...contact,[e.target.name]:e.target.value})

    }
 
  }


const updateContactFormHandler=async (event)=>{
let aa=undefined;
  event.preventDefault();

  if(selectedImage)
  {
    aa=URL.createObjectURL(selectedImage)
    console.log("trueeeeeeee",aa);
  }
  else{
    aa=contact.photo
    console.log("false",aa);
  }
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaa",contact);
     try{
      setContact({...contact,photo:aa})
  const {data}=await updateContact(contact,contactID)
  toast.info("مخاطب به درستی ویرایش شد")
  console.log("data",data);
  if(data)
  {
    const allContact=[...contacts];
    const contactIndex=contacts.findIndex(contact=>contact.id===parseInt(contactID))
     allContact[contactIndex]={...data}
     setFilteredContacts(allContact);

    navigate(`/Contacts`)
  
  }
  }
  catch(err){
    console.log(err.message);
  }
}


  const imageChangeHandler=e=>{
// console.log(e.target.files.length);
    if(e.target.files && e.target.files.length>0){
    
     const  x=URL.createObjectURL(e.target.files[0])
    console.log("selectedImage",x);
      setSelectedImage(e.target.files[0]);
      // setSelectedImage(x);
    }
  }


  // const removeSelectedImageHandler=()=>{

  // document.querySelector("input[type=file]").value=''
  //    setSelectedImage();
  // }

  useEffect(()=>{
    const fetchDB= async()=>{
setLoading(true)
      try{


            const {data : contactData}=await getContact(contactID);
            const {date : jobData}=await getJob(contactData.job);
            const {data : cityData}=await getCity(contactData.city);
            setContact(contactData)
            setLoading(false)
        }
        catch(err){

            console.log(err.message);
          setLoading(false)
          }



    }
    fetchDB();


  },[])


//   useEffect(()=>{
//     setTextSearch({text:""})
//     setRender(prev=>!prev)

// },[])

  return (
        <div className="col-12  d-flex flex-column justify-content-center align-items-center p-1 mt-lg-1 mt-1 rounded">
<h4 className='py-2 bg-dark w-50 text-white m-0 text-center'>  ویرایش اطلاعات مخاطب  <span style={{color:"orange"}}>{contact.fullName}</span>  </h4>

          {loading ? <Spinner/>:
          (
<>
<div className='my-2'>
    <img src={require("./../Assets/images/edit-user-image.png")} style={{width:"100%",borderRadius:"10px"}} alt="" />
  </div>
  <div className='addContact text-center col-12 col-lg-6 d-flex flex-column justify-content-center align-align-items-center'>

<form action="" onSubmit={(event)=>{updateContactFormHandler(event)}} className='form-control'>
<div id='divFullName' className=' d-flex flex-column flex-lg-row ' >

<label htmlFor="" className="d-inline-block w-25 ">نام و نام خانوادگی</label>
<input type="text"  className='form-control d-inline-block w-75 ' value={contact.fullName} name='fullName' onChange={contactChangeHandler}/>
</div>

<div id='divMobile' className='my-3'>

<label htmlFor="" className="d-inline-block w-25">موبایل</label>
<input type="tel"  className='form-control d-inline w-75' value={contact.mobile} name="mobile" onChange={contactChangeHandler}/>
</div> 
{/* <div id='divAge' className='my-3'>

<label htmlFor="" className="d-inline-block w-25">سن</label>
<input type="number"  className='form-control d-inline w-75'/>
</div>    */}
<div id='divEmail' className='my-3'>

<label htmlFor="" className="d-inline-block w-25">ایمیل</label>
<input type="email"  className='form-control d-inline w-75' name="email" value={contact.email} onChange={contactChangeHandler}/>
</div>    


<div id='divJobs' className='my-3'>

<label htmlFor="" className="d-inline-block w-25"> مهارت </label>
<select name="job" id="" value={contact.job} className='form-control d-inline w-75' onChange={contactChangeHandler}>
<option value="" className='form-control d-inline w-75'  >مهارت های خود را انتخاب کنید</option>
{jobs.map(job=>
  (
    <option key={job.id} value={job.id}>{job.jobName}</option>
 
  ))}

</select>
</div>    



<div id='divCitys' className='my-3'>

<label htmlFor="" className="d-inline-block w-25"> شهر </label>
<select name="city" id="" className='form-control d-inline w-75' value={contact.city} onChange={contactChangeHandler}>
<option value="" className='form-control d-inline w-75'>شهر محل سکونت خود را انتخاب کنید </option>
{citys.map(city=>
(<option key={city.id} value={city.id}>{city.cityName}</option>
))}
</select>
</div> 

<div id='divPhoto' className=' my-3'>

<label htmlFor="" className="d-inline-block w-25">عکس</label>
<input type="file" onInput={imageChangeHandler}  className='form-control d-inline w-75' onChange={contactChangeHandler} accept='image/*' name="photo"/>
</div>  

{/* <img src={"blob:http://localhost:9000/9e1fcf3e-e472-4654-ay7792-96a4a59cd25f"} alt="تصویر عکس aaaaaa"  style={{width:200,height:200,display:"block",margin:"0 auto"}}/> */}

{( contact) && (

<div id="imagePreviewAddContact" className='d-flex flex-column my-3 justify-content-center align-content-center' style={{position:"relative"}}>
  {
    selectedImage ? (
      <img src={URL.createObjectURL(selectedImage)} alt="تصویر عکس انتخابی"  style={{width:200,height:200,display:"block",margin:"0 auto"}}/>

    ) : (
      <img src={contact.photo} alt="تصویر عکس انتخابی"  style={{width:200,height:200,display:"block",margin:"0 auto"}}/>


    )
  }
  
</div>

)}

<div id='divButton' className=' d-flex justify-content-around'>

<button type='submit' className='btn  w-25' style={{background:"#03a9f4",color:"#fff"}}>ثبت</button>
<button onClick={()=>{navigate("/Contacts")}} className='btn btn-danger w-25'>انصراف</button>
{/* <Link to={"/Contacts"} className='btn btn-danger w-25'>انصراف</Link> */}

</div>
        </form>


  </div>
</>

          )
        }
 
      </div>
    );
};

export default EditContact;