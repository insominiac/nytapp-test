import {memo} from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArticleCard from "../ArticleCard/ArticleCard";


export default memo(function Article({slicedData,loading}){

    if(loading){
      return( 
        <Box  sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'column' },
          width: '100%',
          justifyContent: "center",
          alignItems: { xs: 'start', md: 'center' },
          gap: 4,
          overflow: 'auto',
        }}>
      <img
        alt="loader"
        src="https://i.gifer.com/ZKZg.gif"
        width={100}
        tex-align="center"
       
      />
      <Typography variant="p" component="p">Loading Feed</Typography>
      </Box>
      )
    }
    else{
      return(
          
        <Grid className="article-list" container spacing={2} columns={12}>
          
        {
        slicedData?.map((data,index)=>
          <Grid key={index} className="single-article" size={{ xs: 12, md: 4 }}>
          <ArticleCard data={data} />

          </Grid>
        
        )}
        </Grid>
      )}
     
});
