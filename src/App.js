import './App.css';
import {Route, Routes} from "react-router-dom"
import Article from './components/Article';
import ArticlePage from './pages/ArticlePage';
import Paginationcustom from './components/Pagination';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import Footer from './components/Footer/Footer';


function App() {
  const [article,setArticle] = useState([])
  const [loading,setLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(1);
  const [range, setRange] = useState(1);
  const [error,setError] = useState('');

  const postPerPage = 3

  useEffect(()=>{

    const fetchArticles = async()=>{
      try{
        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${range}.json?api-key=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setLoading(false)
        setArticle(data.results)
        console.log('Hello using...')
        
      }
      catch(err){
        console.log(err)
        setError(err)
      }
    }
    fetchArticles();

    },[range])

    console.log("Articles",article)


    const handleChange = (event) => {
      setRange(event.target.value);
   };

   const lastIndex = currentPage * postPerPage
   const firstIndex = lastIndex - postPerPage

   const slicedData = article.slice(firstIndex,lastIndex)
   console.log(slicedData)




  return (
    <div className="App">
      
     

      <CssBaseline enableColorScheme />
      <Header/>
      <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 8, gap:2 }}>
       
          <Box className="pagination-box" sx={{
          display: 'flex',
          flexDirection: { md: 'row'},
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' },
          overflow: 'auto',
          
          
          }}>
          
          <Box className="range-box" sx={{
              display: 'flex',
              flexDirection: {md: 'row' },
              justifyContent:"flex-start",
              alignItems: { xs: 'start', md: 'center' },
              gap: 1,
              overflow: 'auto',
            }}>
            
            <FormControl variant="standard" className='form'>
            <InputLabel   aria-label="select" >Date Range</InputLabel>

              <Select
                id="selectbox"
                className="range-select-box"
                value={range}
                label="previous"
                onChange={handleChange}
              >
                <MenuItem value={1}>Latest</MenuItem>
                <MenuItem value={7}>Past Week</MenuItem>
                <MenuItem value={30}>Past Month</MenuItem>
              </Select>
            </FormControl>
            </Box>
          
            
            <Box className="page-select-component" sx={{
          display: 'flex',
          flexDirection: {md: 'row' },
          justifyContent:"flex-end",
          alignItems: { xs: 'start', md: 'center' },
          gap: 1,
          overflow: 'auto',
        }}>
         <Typography variant="p" component="p">
            Page
          </Typography>
          <Paginationcustom
          length={article.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}/>
          
         </Box>
         </Box>
         <Routes>
          <Route exact path="/" element={ 
            
            <Article
         slicedData={slicedData}
         range={range}
         loading={loading}
         handleChange={handleChange}
         
         />}/>
        
         </Routes>
         
      </Container>
      <Footer/>

      
         
    
    </div>
  );
}

export default App;
  