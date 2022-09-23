import React from 'react';
import { useState,useEffect } from "react";
import homeCss from './home.css'
const Pagination = ({pagesP,myDisp}) => {
    const [pages2,setPages2]=useState()
 
    useEffect(()=>{
        setPages2(pagesP)

    },[pagesP])
    function getPost(url){
         if(url){
            showUrl(url)
         }
     }
     async function showUrl(url) {
        try {
        let response = await fetch(`${url}`)
        let mydata = await response.json()
  
       myDisp({
        type:"showData",
        payload:mydata
      })
        setPages2(mydata.links)
    } catch(err) {
      
        alert(err);
      }
     }
    return (
        <>
        <div className="pagination">
         
        {pages2?pages2.map((page,index)=>(
        
            <a className={page.active?'active':''} key={page.label+index} 
                   onClick={()=>getPost(page.url)}>
                {page.label==='&laquo; Previous'?'<<':(page.label==='Next &raquo;')?'>>':page.label}
            </a>
            
        )):"Loading..."
        }
       
         
       </div>
       </>
    );
}

export default Pagination;
