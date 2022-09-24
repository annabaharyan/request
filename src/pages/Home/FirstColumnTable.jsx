import { TableContainer,Table,TableBody,TableCell,TableRow,Paper,Button } from "@mui/material";
import { useState,useEffect } from "react";
import Thead from "./Thead";
import Pagination from "./Pagination";
import { MyContext } from "./Context";
const FirstColumnTable = ({myDispatch}) => {
  
//   https://loopconstruct.am/api/post/delete/5
// fetch('https://loopconstruct.am/api/create/post'

function deleteItem(id){
  fetch(` https://loopconstruct.am/api/post/delete/${id}`)
  .then(resp=>resp.json())
  .then(item=>myDispatch({
    type:'deleteItem',
    payload:id
  }))
}
    return (
      <>
             <MyContext.Consumer>
              {function ({state}) {
                return(

                  <>
   {/* {console.log(state)} */}
<TableContainer component={Paper}>
                  <Table aria-label="simple-table">
                    <Thead/>           
                    <TableBody>
                    
                        
                     {state.data?(state.data).map(data=>(
                            <TableRow key={data.id}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.FullName}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.category_id}</TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>{data.telegram}</TableCell>
                                <TableCell align="center">{data.whatsapp}</TableCell>
                                <TableCell>
                                    <Button variant='contained'sx={{margin:"5px"}} onClick={()=>deleteItem(data.id)}>Delete</Button>
                                    <Button variant='contained'sx={{margin:"5px"}}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        )):(<TableRow>
                          <TableCell>Loading...</TableCell>
                        </TableRow>)
                          
                        }
                        
                    
                    </TableBody>

                  </Table>

                </TableContainer>
                <Pagination
                  pagesP={state.links} 
                  myDisp={(res)=>myDispatch(res)}
                  
                  /> 

                  </>

                  
                )


              }}
                
     </MyContext.Consumer>        
</>

      
    );
}

export default FirstColumnTable;
