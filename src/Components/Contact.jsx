import React from 'react';
import {
    MdEmail,
    MdPhoneEnabled,
    MdLocationOn,

  } from "react-icons/md";

  import { FaPen, FaInfoCircle, FaTrash } from "react-icons/fa";
  import {Link} from 'react-router-dom'
const Contact = ({contact,citys,confirmDelete}) => {

    return (
        <div
     
        className="card col-lg-5 d-flex justify-content-center align-items-center p-0 mt-lg-2 mt-2 rounded"
      >
        <div className="row w-100   d-flex p-0 rounded">
          <div
          
            className="cardImage col-4  p-0 d-flex justify-content-center align-items-center rounded-end"
          >
            <img
        
              src={contact.photo}
              alt="عکس پروفایل"
            />
          </div>
          <div  className=" cardContent col-7 p-0">
            <ul>
              <li
                style={{
                  borderBottom: "1px solid #fff",
                  padding: "3px 1px",
                  textAlign:"center"
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {contact.fullName}
                </span>
              </li>

              <li>
                <MdPhoneEnabled style={{ fontSize: "1.3rem" }} />{" "}
                <span>{contact.mobile}</span>
              </li>

              <li>
                <MdEmail style={{ fontSize: "1.3rem" }} />{" "}
                <span>{contact.email}</span>
              </li>

              <li>
                <MdLocationOn style={{ fontSize: "1.3rem" }} />{" "}
                {citys.map(city=> city.id=== contact.city ? (<span key={city.id}>{city.cityName}</span>):null)}
                {/* {contact}ities.map(city=>{return city.id=== c.city ? (<span>{contact}ity.cityName}</span>):null})} */}
            
              </li>
            </ul>
          </div>
          <div
            className="cardLeft col-1  rounded-start d-flex flex-column  justify-content-evenly align-items-center"
          >
            <Link to={`/ViewContacts/${contact.id}`}>
            <FaInfoCircle  className='iconCardLeft'/>
            </Link>
            <Link to={`/EditContact/${contact.id}`}>
            <FaPen  className='iconCardLeft' />
            </Link>
            <Link>
            <FaTrash  onClick={confirmDelete} className='iconCardLeft'/>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Contact;



































