import { TableContainer,Table,TableBody,TableCell,TableRow,Paper,Button } from "@mui/material";
import { useState,useEffect } from "react";
import Thead from "./Thead";
import Pagination from "./Pagination";
const FirstColumnTable = () => {
    
  const [datas,setDatas]=useState([])
  const [pages,setPages]=useState([])
//   https://loopconstruct.am/api/post/delete/5
 useEffect(()=>{
//     fetch('https://loopconstruct.am/api/create/post', {
//   method: 'POST',
//   body: JSON.stringify({
//     FullName: 'Gurgen',
//     phone: '098657545',
//     email: "Gurgen.Gurgen@mail.ru",
//     whatsapp: "+37498657545",
//     telegram: "+37498657545",
//     category_id: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//  slug
//  FullName
//  email
//  whatsapp
//  telegram
//  phone
//  category_id







    fetch('https://loopconstruct.am/api/post').then(resp=>resp.json()).then(json=>{
        if(json!=404){
            setPages(json.links)
            setDatas(json.data)
        }
      
    },
    (error) => {
        if (error) {
         console.log(error)
        }
      }
    )

 },[])



    return (
        <>
       <TableContainer component={Paper}>
          <Table aria-label="simple-table">
            <Thead/>
            <TableBody>
             {datas?datas.map(data=>(
                <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.FullName}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.telegram}</TableCell>
                    <TableCell align="center">{data.whatsapp}</TableCell>
                    <TableCell>
                        <Button variant='contained'sx={{marginRight:"5px"}}>Delete</Button>
                        <Button variant='contained'>Edit</Button>
                    </TableCell>
                </TableRow>
             )):"bernum"}

            </TableBody>

          </Table>

       </TableContainer>
       <Pagination pagesP={pages} setDatasP={(res)=>setDatas(res)}/>
       
       </>
    );
}

export default FirstColumnTable;
