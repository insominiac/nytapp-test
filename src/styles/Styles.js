import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import { Box } from "@mui/material"

import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



const StyledBox1 = styled(Box)(() => ({
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px',
              }));

const StyledBox2= styled(Box)(() => ({
  display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center'
}));

 const StyledCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: '#f5f6fa',
    '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
      
    },
    '&:focus-visible': {
      outline: '3px solid',
      outlineColor: 'hsla(210, 98%, 48%, 0.5)',
      outlineOffset: '2px',
    },
  }));

  const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
      paddingBottom: 16,
    },
  });
  
  const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontFamily:'Newsreader, serif',
    fontSize:'1rem',
    fontWeight:'400',
    lineHeight:'1.2em',
    color:'black'
  });
  const StyledCardMedia = styled(CardMedia)(() => ({
    aspectRatio: '16 / 9',
    borderColor: 'divider',
    borderRadius:'5px'
  }));

  export   {StyledCardMedia,StyledBox1,StyledBox2,StyledCard,StyledCardContent,StyledTypography}



