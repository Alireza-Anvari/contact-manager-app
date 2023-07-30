import React,{useState,useEffect,useContext} from 'react';
// import './../../public/css/style.css'
import { Link, useParams } from 'react-router-dom';
import {
    MdPersonPin,
    MdEmail,
    MdPhoneEnabled,
    MdDevicesOther,
    MdLocationOn,
    MdImage,
    // MdAssignmentInd,
  } from "react-icons/md";
  import { contactsContext } from '../Helpers/ContactsContext';
  import { getContact,getCity,getJob } from '../Helpers/ServicesContacts';
import Spinner from './../Spinner';
const ViewContact = () => {
  const {setLoading,loading}=useContext(contactsContext)
    const {contactID}=useParams();

    const [state,setState]=useState({

        contact:{},
        city:{},
        job:{},
    })
  

useEffect(()=>{
  setLoading(true)
const fetchDB= async()=>{

    try{
        const {data : contactsData}= await getContact(contactID)
        const {data : cityData}= await getCity(contactsData.city) 
        const {data : jobData}= await getJob(contactsData.job)
        setState({...state,
            
            contact:contactsData,
            city:cityData,
            job:jobData
        })
        setLoading(false)
}
catch(err){
    console.log(err.message);

    setLoading(false)
}
}
fetchDB();

},[]);



const {contact,city,job}=state;
    return (
      <>
      <div className='my-1 text-center'>
      <img src={require("./../Assets/images/info-user.jpg")} style={{width:"150px",borderRadius:"10px"}} alt="" />
    </div>
        <div className='main container-lg  border border-2 border-dark container-fluid     px-0 text-center'>
            <div className="row p-0 mx-auto   justify-content-center ">

                {loading ? <Spinner /> : 
                (
<>
{Object.keys(contact).length>0 && 
(
    
<>
<h4 className='py-2 bg-dark text-white m-0 text-center'>  نمایش اطلاعات مخاطب  <span style={{color:"orange"}}>{contact.fullName}</span>  </h4>

                    <div className='viewBox '>
                          <div  >
                            <MdPersonPin style={{flex:"0.3",fontSize:"2rem"}}/>{" "}
                            <span >نام و نام خانوادگی</span>
                          </div>
                          <div>{contact.fullName}</div>
                       

                          <div>
                            <MdEmail style={{fontSize:"2rem"}}/>{" "}
                            <span>ایمیل </span>
                          </div>
                          <div>{contact.email}</div>

                          <div>
                            <MdPhoneEnabled style={{fontSize:"2rem"}}/>{" "}
                            <span>تلفن </span>
                          </div>
                          <div>{contact.mobile}</div>

                          <div>
                            <MdLocationOn style={{fontSize:"2rem"}}/>{" "}
                            <span>آدرس </span>
                          </div>
                          <div>


                            {city.cityName}
                          </div>

                          <div>
                            <MdDevicesOther style={{fontSize:"2rem"}}/>{" "}
                            <span>شغل </span>
                          </div>
                          
                          <div>   {job.jobName}</div>
                          <div>
                            <MdImage style={{fontSize:"2rem"}}/>{" "}
                            <span>عکس </span>
                          </div>
                          
                          <div >
                            <img style={{height:150,width:300}} src={contact.photo} alt="عکس شخصی" />
                          </div>
                       
                          
                      
                    </div>

</>

)}

</>
                )
                }
                  <div> 
                            <Link style={{margin:"5px auto",display:"block",width:"30%",textAlign:"center",color:"#202020",textDecoration:"none",  background:" linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"}} className="btn bg-dark w-50" to="/Contacts">بازگشت</Link>
                          </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        </>
    );
};

export default ViewContact;