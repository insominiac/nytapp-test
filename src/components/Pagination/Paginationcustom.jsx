
import InputLabel from '@mui/material/InputLabel';

export default function Paginationcustom({length,postPerPage,setCurrentPage}){

    let pages=[]

    for(let i=1;i<=Math.ceil(length/postPerPage);i++){
        pages.push(i)
        }
        console.log(pages)

    return(

        
        pages.map((page,index)=>{
          return(  
            <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
           )

        })
      
    )};