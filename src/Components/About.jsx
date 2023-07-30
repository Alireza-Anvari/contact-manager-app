import React,{useEffect} from 'react';
import { BsCheckCircleFill,BsGlobe2 } from "react-icons/bs";
import {MdEmail, MdLocationOn} from "react-icons/md";

const About = ({setTextSearch}) => {

useEffect(()=>{
    setTextSearch({text:""})
  

},[])
    return (
        <div className="container m-0 p-0 mx-auto">
        <div className="row p-0    mx-auto">
             
                    <div className='aboutBox '>
                    <div  >{/* <img src="./../Assets/images/" alt=""/> */}<img src={require("./../Assets/images/personal.jpeg")} style={{width:"200px",height:"200px",objectFit:"cover",borderRadius:"150px"}} alt="" /></div>
                          <div className='bio' ><span >بیوگرافی</span></div>
                          <div  >

<p>سلام به همه ی علاقه مندان برنامه نویسی بنده  <span style={{color:"blue"}}>  علیــــرضا انــــوری</span> هستم  علاقه مند برنامه نویسی ریکت و مدرس دانشگاه  .حوزه تخصصی من در زمینه وب هستش ، قبل از آشنایی با ریکت با زبانهای جاوااسکریپت و .... کار میکردم بعد از آشنایی با ریکت و علاقمند شدن به ریکت تصمیم به یادگیری زبان ریکت کردم .این پروژه اولین پروژه بنده با زبان react js , bootstrap , css هستش .به دلیل گسترش روز به روز و فراگیر شدن فریم ورک تیلویند بنده قصد دارم پروژه بعدی خودم رو با  <span style={{color:"blue"}}> react js , tailwind </span> درست کنم . 
 </p>
                        </div>

                        <div className='bio' ><span >رزومه</span></div>
                          <div  >
                                <ul>
                                    <li> <BsCheckCircleFill className='cvIcon' /><span className='cvText'>مدرس دانشگده فنی البرز</span></li>
                                    <li> <BsCheckCircleFill className='cvIcon' /><span className='cvText'>مدرس دانشگاه آزاد </span></li>
                                    <li> <BsCheckCircleFill className='cvIcon' /><span className='cvText'>مدرس دانشگاه  علمی کاربردی </span></li>
                                    <li> <BsCheckCircleFill className='cvIcon' /><span className='cvText'>همکاری با برخی شرکتهای برنامه نویسی</span></li>
                                </ul>

                        </div>
                      
                        <div className='bio' ><span >نمونه کار</span></div>
                          <div  >
                                <ul>
                                    <li> <BsGlobe2 className='cvIcon' /><span className='cvText'>پروژه مدیریت مخاطبین  (react js , bootstrap , css )</span></li>
                                    <li> <BsGlobe2 className='cvIcon' /><span className='cvText'>بزودی ....</span></li>
                                </ul>

                        </div>
                        <div className='bio' ><span > تماس با ما</span></div>
                          <div  >
                                <ul>
                                    <li> <MdEmail className='cvIcon' /><span className='cvText'>alireza.anvari.61@gmail.com</span></li>
                                    <li> <MdLocationOn className='cvIcon' /><span className='cvText'>Iran , Karaj</span></li>
                                </ul>

                        </div>
                          </div>
                       
                          
                      
                  

          
       
        </div>
      </div>
    );
};

export default About;