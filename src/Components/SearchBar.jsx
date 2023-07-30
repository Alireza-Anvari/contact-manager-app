import React,{useRef,useState,useEffect,useContext} from 'react';
import {contactsContext} from './../Helpers/ContactsContext'
import { GrUserSettings } from "react-icons/gr";
import {  FaSearch } from "react-icons/fa";
import { useParams,useNavigate,useLocation } from 'react-router-dom';
const SearchBar = () => {
  const {contacts,filteredContacts,setFilteredContacts,textSearch,setTextSearch,contactSearchHandler,clickInputSearchedHandler}=useContext(contactsContext)
  // console.log("main",contacts);
const navigate=useNavigate()
const ref1=useRef();
const ref2=useRef();
const [text,setText]=useState({text:""})
const params=useParams();
const [box,setBox]=useState(false)
 const location=useLocation();
  const contactSearchHandler2=(e)=>{


let pathName=undefined;
if(window.location.pathname==="/Contacts" )
{
  setText({text:e.target.value})
  // pathName=window.location.pathname;
  setBox(false)
  clickInputSearchedHandler(text.text)
// console.log("contacts component",text);
}
else{

  contactSearchHandler(e.target.value)
  setBox(true);

}


  }
  

  const clickInputHandler = () => {

    setBox((prev) => !prev);
  };

  useEffect(() => {

    const deActiveHandler = (e) => {

          if( ref1.current.value !=="" && e.target.tagName !== "SELECT" && e.target.tagName!=="INPUT" && e.target.parentElement.getAttribute("class") !== "detailSearched" ){
            ref1.current.value="";
            setTextSearch({text:""});
        
            const allContacts=[...contacts];
            setFilteredContacts(allContacts);
      
          }
   
  
        setBox(false);
      // }
    };

    document.body.addEventListener("click", deActiveHandler);
    return () => document.body.removeEventListener("click", deActiveHandler);
  });

  useEffect(()=>{
if(location.pathname!=="/Contacts"){
  setTextSearch({text:""})
}

  },[])
    return (
        <div className='container-fluid'>
           <div className="row ">
            <div className="col-md-6  d-flex justify-content-center align-items-center py-2">
            <h2>مدیریت اپلیکیشن مخاطبین</h2>
            <h3 style={{paddingRight:5,fontWeight:"bold "}}><GrUserSettings style={{stroke:"#03a9f4 !important"}}/></h3>
            </div>

            <div className="col-md-6 d-flex px-3 justify-content-center align-items-center py-2" style={{position:"relative"}}>
            <div className="input-group">
           {location.pathname==="/Contacts" ? (
    <input
    ref={ref1}
    // value={textSearch.text}
      type="text"
      className="form-control rounded-0"
      placeholder="جستجو در اپلیکیشن مدیریت مخاطبین"
    // onBlur={yyy}
      onClick={clickInputHandler}
      onChange={e=>contactSearchHandler(e.target.value)}
      aria-label="Username"
      aria-describedby="basic-addon1"
      dir="rtl"
    />

           ):
           
           (
            <input
            ref={ref1}
            // value={textSearch.text}
              type="text"
              className="form-control rounded-0"
              placeholder="جستجو در اپلیکیشن مدیریت مخاطبین"
            // onBlur={yyy}
              onClick={clickInputHandler}
              onChange={contactSearchHandler2}
              aria-label="Username"
              aria-describedby="basic-addon1"
              dir="rtl"
            />

           )}
          
            </div>
         
            <div className="input-group-prepend">
                <span
                  className="input-group-text  rounded-0"
                  style={{ fontSize: "1.5rem",background:"#03a9f4" }}
                  id="basic-addon1"
                >
                  <FaSearch className="text-light" />
                </span>
              </div>
              <div id='boxSearch' ref={ref2} className="boxSearch">{box && filteredContacts && location.pathname!=="/Contacts"  ?  
         ref1.current.value === ""  ?  null :  filteredContacts.map(c=>(<div key={c.id} className='detailSearched' onClick={()=>{clickInputSearchedHandler(c);navigate("/Contacts")}} >
          <img src={c.photo} alt="" />
          <p >{c.fullName}</p>
          
          </div>))  : null}</div>
            </div>
           </div>
        </div>
    );
};

export default SearchBar;