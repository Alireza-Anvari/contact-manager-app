import { FaUserPlus } from "react-icons/fa";


import React,{useEffect,useContext} from "react";
import { contactsContext } from "../Helpers/ContactsContext";
import {Spinner,Contact} from './../Helpers/Index'
import { NavLink } from 'react-router-dom';
function Contacts() {
// console.log("contacts",contacts);
  const {filteredContacts,confirmDelete,citys,loading}=useContext(contactsContext)
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row p-0 m-0">
        <div
          id="addContactBar"
          className="col-lg  d-flex justify-content-center align-items-center py-2"
        >
          <NavLink  to={"/AddContact"} id="addContactBtn" className="btn" style={{}}>
            افزودن مخاطب <FaUserPlus style={{ fontSize: "1.3rem" }} />
          </NavLink>
          {/* {textSearch.text} */}
        </div>
    
        
        <div className="row p-0 m-0  d-flex justify-content-evenly ">
        {loading ? <Spinner/> : filteredContacts.length >0 ?filteredContacts.map(contact=>(
                <Contact confirmDelete={()=>{confirmDelete(contact.id,contact.fullName)}} key={contact.id} contact={contact} citys={citys}/>
            )):
            (
                <div style={{height:"50vh"}}  className="  col-md-5 flex-column d-flex justify-content-evenly align-items-center p-1  mt-0 rounded">
                     <h3 className="w-100 text-center rounded" style={{backgroundColor:"#03a9f4",padding:"5px 0",color:"#fff"}}>مخاطبی یافت نشد</h3>   
                     <img src={require('./../Assets/images/not-found.jpg')} alt="تصویر مخاطبی یافت نشد"/>

                </div>

            )
            } 
 
        </div>
      </div>
    </div>
  );
}

export default Contacts;
