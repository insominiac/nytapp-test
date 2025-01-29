import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer(){
    return(
    <footer>
    <Box component="div" sx={{ my: 8,alignItems:'center',textAlign:'center'}}>
     <Typography variant="h3" component="h3" sx={{fontFamily:'Newsreader, serif',fontSize:"large"}}>&copy; 2025 The New York Times Company.</Typography>
    </Box>
    </footer>
    )
}