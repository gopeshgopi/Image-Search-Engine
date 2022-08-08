
import {UnspashImage} from './UnspashImage';
import './image.css';

import {Heading} from './Heading'
import axios from 'axios';
import { useState, useEffect } from 'react';
import  InfiniteScroll from 'react-infinite-scroll-component'
import SearchBox from './SearchBox';

function App() {
   const[images,setImages] = useState([]);
   const[count,SetCount] =useState(0);
  const [inputQuery, setInputQuery] = useState("");

   useEffect(()=>{
     SetCount(0);
     setImages([]);
     if(inputQuery.length >0)
     {
    fetchImages();
     }
   },[inputQuery])

   


   const fetchImages = () =>{
     SetCount(count+1);
    const  apiRoot = process.env.REACT_APP_ACCESSURL;

   const accessKey =  process.env.REACT_APP_ACCESSKEY;
   axios.get(`${apiRoot}/search/photos?page=${count}&client_id=${accessKey}&query=${inputQuery}`)
   .then(res => setImages([...images,...res.data.results]));

   }



  return (
    <div className="App"> 
    <Heading />
    <div className="search-container">
    <SearchBox input={inputQuery} setInput={setInputQuery}/>
    </div>
    
    <InfiniteScroll
    dataLength={images.length}
    next={fetchImages}
    hasMore={true}
    >
    <div className="image-container"> 
    { images.length > 0 && (images.map(image => (
      <UnspashImage url={image.urls.thumb} key={image.id} />
    ))
    )}
    </div>
    </InfiniteScroll>
    

    </div>
  );
}

export default App;
