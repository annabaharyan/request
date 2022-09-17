import React from 'react';
import { useState,useEffect } from "react";
import homeCss from './home.css'
const Pagination = ({pagesP,setDatasP}) => {
    const [pages2,setPages2]=useState()
 
    useEffect(()=>{
        setPages2(pagesP)

    },[pagesP])
    function getPost(url){
         if(url){
            showAvatar(url)
         }
     }
     async function showAvatar(url) {
        try {
        let response = await fetch(`${url}`)
        let mydata = await response.json()
        
        setDatasP(mydata.data)
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
            
        )):"datark"
        }
       
         
       </div>
       </>
    );
}

export default Pagination;
