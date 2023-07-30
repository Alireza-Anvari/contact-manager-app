import React, { useState, useEffect } from "react";
import { ImCross, ImMenu } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuWideActiveHandler = () => {
    // console.log("isopen");
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const deActiveHandler = (e) => {
      const array = ["SPAN", "svg", "path"];

        if (!array.includes(e.target.tagName)) {

        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", deActiveHandler);
    return () => document.body.removeEventListener("click", deActiveHandler);
  }, []);
  return (
    <div className="menubar">
      <div className="menuHamburger">
        <span
          onClick={menuWideActiveHandler}
          style={{
            padding: "0 10px",
            backgroundColor: "#fff",
            color: "#03a9f4",
          }}
        >
          {isOpen ? <ImCross /> : <ImMenu />}
        </span>
        {/* <FaBars /> */}
      </div>
      <div
        className={"menuWide " + (isOpen ? "active" : "")}
   
        id="menuHamburger"
      >
        <NavLink style={({isActive})=>
        {return{
          color:isActive ?"yellow " :"#202020",
          background:isActive ?"#202020 " :"#fff",
          fontWeight:isActive ? "bold" : "100"
          }
          }
          } to={"/Contacts"}>مخاطبین</NavLink>
        <NavLink style={({isActive})=>{return{color:isActive ?"yellow " :"#202020",background:isActive ?"#202020 " :"#fff",fontWeight:isActive ? "bold" : "100"}}} to={"/AddContact"}>افزودن مخاطب</NavLink>
        <NavLink style={({isActive})=>{return{color:isActive ?"yellow " :"#202020",background:isActive ?"#202020 " :"#fff",fontWeight:isActive ? "bold" : "100"}}} to={"/About"}>درباره ما</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

// import React,{useRef,useState} from 'react';
// import {  FaBars } from "react-icons/fa";
// import {  ImCross,ImMenu } from "react-icons/im";

// const Navbar = () => {
//     let menuWide=useRef();
//   const [menu,setMenu]=useState(<ImMenu/>)
//     const menuWideActiveHandler=(e)=>{

//       menuWide.current.classList.toggle("active")
//       const Flag=menuWide.current.getAttribute("class").split(' ').includes("active")
//         // console.log(menuFlag)
//         const menu1= Flag?<ImCross/>:<ImMenu/>
//         setMenu(menu1)
//         e.stopPropagation()
//     }

//     return (
//         <div className='menubar'>
//             <div  className="menuHamburger">
//                 <span  onClick={menuWideActiveHandler}>

//                 {menu }
//                 </span>
//             {/* <FaBars /> */}
//             </div>
//          <div className="menuWide" ref={menuWide} id='menuHamburger'>
//              <a href='#'>link 1</a>
//             <a href='#'>link 2</a>
//             <a href='#'>link 3</a>
//          </div>
//         </div>
//     );
// };

// export default Navbar;
