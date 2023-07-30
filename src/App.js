
import React,{useState,useEffect,useContext} from 'react'
import './App.css';
import _ from  'lodash'

import {contactsContext} from './Helpers/ContactsContext'
import {Header,Contacts, AddContact, ViewContact,About,EditContact} from './Helpers/Index'
import { getAllContacts, getAllCitys, getAllJobs, createContact, deleteContact } from './Helpers/ServicesContacts';
import {Routes,Route,useNavigate,Navigate} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import {ToastContainer,toast} from 'react-toastify'


function App() {
  const [textSearch,setTextSearch]=useState({text:""})
  const [loading,setLoading]=useState(false)
  const [contacts,setContacts]=useState([])
  const [citys,setCities]=useState([])
  const [jobs,setJobs]=useState([])
  const [contact,setContact]=useState({
    "fullName": "",
    "photo": "",
    "mobile": "",
    "job": "",
    "city": "",
    "email": "",
     })
  const[render,setRender]=useState(false);
  const navigate=useNavigate();
const [filteredContacts,setFilteredContacts]=useState([])


  const clickInputSearchedHandler=(value)=>{
setFilteredContacts([value])
console.log("id",value);

  }





const contactSearchHandler=_.debounce(value=>{
    
 
  setFilteredContacts(contacts.filter(contact=>{
    return contact.fullName.toLowerCase().includes(value.toLowerCase())
  }))
  },1000)
  


  const createContactFormHandler= async (values,aa)=>{
    console.log("values",values);



try{


const {status,data}=await createContact(values)
if(status===201)
{
 toast.success("مخاطب به درستی ساخته شد")
  // setContact({});
  const allContacts=[...contacts,data]
  setFilteredContacts(allContacts)
  // setRender(!render)
  navigate(`/Contacts`)

}
}
catch(err){
  console.log(err.message);
}

  }



  const addPhotoToContact=(photoAddress)=>{
    setContact({...contact,"photo":photoAddress})

  }
  const contactChangeHandler=e=>{
    if(e.target.files){

    }
    else{

      setContact({
        ...contact,[e.target.name]:e.target.value
      })

    }

 

  }

  useEffect(()=>{
  const fetchDB= async()=>{
  try{
    setLoading(true);
    const {data : contactsData}= await getAllContacts()
    const {data : citysData}= await getAllCitys() 
    const {data : jobsData}= await getAllJobs()
    setContacts(contactsData);
    setFilteredContacts(contactsData);
    setCities(citysData);
    setJobs(jobsData) 
    setLoading(false)
  }
  catch(err){
    console.log(err.message());
    setLoading(false)
  }
  
    }
    fetchDB();
  },[])



  const removeContact=async contactID=>{
    try{

      setLoading(true);
      const response=await deleteContact(contactID);
      if(response){
        toast.error("مخاطب به درستی حذف گردید")
        const {data : contactData}=await getAllContacts();
        setContacts(contactData);
        setFilteredContacts(contactData)
        setLoading(false);        

      }
    }
    catch(err){
      console.log(err.message);
      setLoading(false)
    }


  }

  const confirmDelete=(contactID,fullName)=>{

    confirmAlert({
      customUI:({onClose})=>{
        return(
          <div id='confirmDeleteDialog' className="container-fluid py-5 px-3 ">
              <img src={require("../src/Assets/images/delete.png")} alt="آیکن حذف"  style={{display:"block",width:"70px"}}/>
              {/* <h3>پاک کردن مخاطب</h3> */}
              <p className='p-0 m-0'>مطمئنی که میخوای پاک کنی ؟ </p>
              <button className='btn btn-danger w-75' onClick={()=>{removeContact(contactID);onClose()}}>
پاک شود
              </button>
              <button onClick={onClose} className='btn btn-primary w-75'>انصراف</button>
          </div>
        )
      }
    })
  }
  
  return (
<contactsContext.Provider value={{
loading,
setLoading,
contact,
setContact,
contacts,
setContacts,
filteredContacts,
setFilteredContacts,
textSearch,
setTextSearch,
citys,
setCities,
jobs,
setJobs,
contactSearchHandler,
clickInputSearchedHandler,
contactChangeHandler,
addPhotoToContact,
createContactFormHandler,
confirmDelete,
}}>


    <div className="container-fluid p-0">
      <ToastContainer  rtl="true" position='top-center' theme='dark'/>
      <Header />
      <Routes>
            <Route path='/' element={<Navigate to="/Contacts"/>}/>
            <Route path='/Contacts' element={<Contacts />}/>
            <Route path='AddContact' element={<AddContact    />}/>
            <Route path='About' element={<About setTextSearch={setTextSearch}/>}/>
            <Route path='/ViewContacts/:contactID' element={<ViewContact />}/>
            <Route path='EditContact/:contactID' element={<EditContact   />}/>
            <Route path='*' element={<Navigate to={"/Contacts"}/>}/>
      </Routes>
      {/* <Contacts contacts={contacts} loading={loading}/> */}
    </div>
</contactsContext.Provider>


  );
}

export default App;
