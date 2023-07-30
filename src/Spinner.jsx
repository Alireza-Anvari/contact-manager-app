import React from 'react';

const Spinner = () => {
    return (
      
                 <div style={{height:"50vh"}}  className="  col-md-5 flex-column d-flex justify-content-evenly align-items-center p-1  mt-0 rounded">
                     {/* <h3 className="w-100 text-center rounded" style={{backgroundColor:"#03a9f4",padding:"5px 0",color:"#fff"}}>مخاطبی یافت نشد</h3>    */}
                     <img src={require('./Assets/images/loading.gif')} style={{width:"100px"}} alt="تصویر لودینگ"/>

                </div> 
       
    );
};

export default Spinner;