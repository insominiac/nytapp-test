import "./ArticleCard.css"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import { StyledBox1,StyledBox2,StyledCard,StyledCardContent,StyledTypography,StyledCardMedia } from "../../styles";
import { useState } from "react";

  
export default function ArticleCard({data}){

  var date = new Date(data.published_date)
  var format_date = date.toDateString()
  var str=data.byline
  let subs= str.substr(2,str.length)
  const [imgloader,setimgLoader]=useState([true])

  
  return(         

              <StyledCard className="article-card" variant="outlined" key={data.id}>
               <StyledCardMedia
               component="img"
               alt="meta-media"
               image={data.media.map((res)=>res["media-metadata"][2].url)}
              />
              <StyledCardContent className="card-content">
              <Typography gutterBottom variant="caption" component="div">
                  {data.subsection}
              </Typography>
              <Typography gutterBottom className="news-title" variant="h6" component="div" sx={{fontFamily:'Newsreader, serif',fontWeight:'600',lineHeight:'1.2em'}}>
                  {data.title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {data.abstract}
              </StyledTypography>
              </StyledCardContent>
              <StyledBox1>
                  <StyledBox2>
                    <AvatarGroup>
                    <Avatar
                    sx={{ width: 28, height: 28,bgcolor:'#94a0b8' }}
                    >{data.byline[3]}
                    </Avatar>
                    </AvatarGroup>
                    <Typography variant="caption">
                    {subs}                    
                    </Typography>
                  </StyledBox2>
                  <Typography variant="caption">{format_date}</Typography>
                </StyledBox1>
          </StyledCard>
    )
}