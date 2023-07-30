import axios from 'axios'


const serverAddress="http://localhost:9000/"

export const getAllContacts=()=>{
const url=`${serverAddress}contacts`
return axios.get(url)
}

export const getContact=(contactID)=>{
const url=`${serverAddress}contacts/${contactID}`
return axios.get(url)
}


export const getAllCitys=()=>{
 const   url=`${serverAddress}citys`
    return axios.get(url)
}

export const getCity=(cityID)=>{

    const url=`${serverAddress}citys/${cityID}`
    return axios.get(url)
}

export const getAllJobs=()=>{
  const  url=`${serverAddress}jobs`
    return axios.get(url)
}

export const getJob=(jobID)=>{

    const url=`${serverAddress}jobs/${jobID}`
    return axios.get(url)
}


export const createContact=(contact)=>{
const url=`${serverAddress}contacts`
return axios.post(url,contact)
}

export const updateContact=(contact,contactID)=>{
const url =`${serverAddress}contacts/${contactID}`
return axios.put(url,contact)
}


export const deleteContact=(contactID)=>{
const url=`${serverAddress}contacts/${contactID}`
return axios.delete(url)
}

