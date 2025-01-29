import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

export default function Header(){
    return(
        <AppBar position="static" sx={{bgcolor:'#fff',color:'#000',padding:'20px'}} >

            <Typography variant="h2" component="h2" style={{textAlign:'center',fontWeight:'bold',fontFamily:'Newsreader, serif'}}>
            The New York Times
            </Typography>
            <Typography variant="p" component="h2" style={{textAlign:'center',fontWeight:'300',fontFamily:'Newsreader, serif'}}>
            Most Popular Stories
            </Typography>  
        </AppBar>
    )
}