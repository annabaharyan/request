import React, { useReducer,useEffect } from 'react';
import FirstColumnTable from './FirstColumnTable';
import SignUp from './SignUp';
import { reducer,categoryReducer } from './reducer';
import { MyContext } from './Context';
import { Box, Button, TableCell, TableRow } from '@mui/material';
const Columns = () => {
  const [state,dispatch]=useReducer(reducer,[])
  const [stateCat,dispatchCategory]=useReducer(categoryReducer,[])
function filterCategory(id){
 fetch(`https://loopconstruct.am/api/post/category/post/${id}`)
 .then(resp=>resp.json())
 .then(category=>dispatch({
  type:'updateCategory',
  payload:category
 }))
}



  useEffect(()=>{
  
    fetch('https://loopconstruct.am/api/post').then(resp=>resp.json()).then(json=>{
        if(json!=404){
          dispatch({
            type:"showData",
            payload:json
          }
          )
       
          }
      
    },
    (error) => {
        if (error) {
         console.log(error)
        }
      }
    )
  fetch('https://loopconstruct.am/api/post/category/all')
  .then(resp=>resp.json())
  .then(category=>{
    dispatchCategory({
      type:'CategoryAll',
      payload:category
    })
  })
 },[])
    return (
       <div className='colContainer'>
    


        <MyContext.Provider value={{state}}>
     
        <div className="col">
          <Box sx={{display: 'flex',justifyContent: 'center',gap:'15px',margin: '25px 0'}}>
        {stateCat.map(res=>(
     
          <Button variant='contained'  key={res.id} onClick={()=>filterCategory(res.id)}>
            {res.name}
          </Button>

       ))

      }
      </Box>
        <FirstColumnTable myDispatch={(res)=>dispatch(res)}/>
        </div>
      <div className="col">
      <SignUp myDispatch={(res)=>dispatch(res)} />
      </div>
       
      </MyContext.Provider>
       
       </div>
     
    );
}

export default Columns;
