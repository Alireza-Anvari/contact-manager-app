import { createContext } from "react";



export const contactsContext=createContext({

loading:false,
setLoading:()=>{},
contact:{},
setContact:()=>{},
contacts:[],
setContacts:()=>{},
jobs:[],
setJobs:()=>{},
citys:[],
setCities:()=>{},
textSearch:{},
setTextSearch:()=>{},
filteredContacts:[],
setFilteredContacts:()=>{},
clickInputSearchedHandler:()=>{},
contactSearchHandler:()=>{},
createContactFormHandler:()=>{},
addPhotoToContact:()=>{},
contactChangeHandler:()=>{},
confirmDelete:()=>{},


})