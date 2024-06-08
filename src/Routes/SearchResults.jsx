import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { searchDoctors } from '../Services/search'
import { Box } from '@mui/material';
import { RecommendCard } from '../Components/Body/Recommendations';
import { SERVER_API } from '../Constants';
import axios from 'axios';

const SearchResults = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  const q = searchParams.get('query')

  const query = useLocation().search


  // let [searchParams, setSearchParams] = useSearchParams();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // The serialize function here would be responsible for
  //   // creating an object of { key: value } pairs from the
  //   // fields in the form that make up the query.
  //   let params = serializeFormQuery(event.target);
  //   setSearchParams(params);
  // }


  // function useQuery() {
  //   const { search } = useLocation();
  
  //   return React.useMemo(() => new URLSearchParams(search), [search]);
  // }


  useEffect(() =>{
    
    const fetchResults = async () => {
      const response = await axios.get(`${SERVER_API}/doctors/search${query}`);
      setResults(response.data);
  };

    fetchResults()

  }, [])
    
  return (
    <div>SearchResults

<Box className="flex-container" sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '2rem' }}>
        {results.map((doctor) => (
          <Box className="flex-item" key={doctor.id} sx={{ 
            flexBasis: '40%', 
            margin: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' }}>
            <RecommendCard doctor={doctor} />
          </Box>
        ))}
      </Box>

    </div>  
  )
}

export default SearchResults