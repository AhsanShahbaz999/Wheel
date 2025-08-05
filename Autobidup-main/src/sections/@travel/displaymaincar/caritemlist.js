import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { Image } from '../../../components';
import { Stack, Box, Typography } from '@mui/material';

//--------------------------------------------------------------
Caritemlist.propTypes = {
  value: PropTypes.array,
  search: PropTypes.string, // Change to string
  filterprice: PropTypes.array,
  filteryear: PropTypes.array,
};

export default function Caritemlist(props) {
  const router = useRouter();
  const [data, setData] = useState([]);

  console.log('value', props.value);
  console.log('search', props.search);
  console.log('price', props.filterprice);
  console.log('year', props.filteryear);

  const fetchData = async () => {
    try {
      let url = "http://localhost:4000/cars?";
  
      if (props.search) url += `search=${props.search}&`;
      if (props.filterprice && props.filterprice.length) {
        const [startValue, endValue] = props.filterprice[0].label.split(" to ");
        url += `price_gte=${startValue}&price_lte=${endValue}&`;
      }
      if (props.filteryear && props.filteryear.length) {
        const [startYear, endYear] = props.filteryear[0].label.split(" to ");
        url += `year_gte=${startYear}&year_lte=${endYear}&`;
      }
  
      const response = await fetch(url);
      console.log("🚗 API URL:", url);
      const jsonData = await response.json();
      console.log("🚗 API Response:", jsonData); // Debugging
      setData(jsonData);
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    }
  };

  // ✅ Fetch data when filters change
  useEffect(() => {
    fetchData();
  }, [props.search, props.filterprice, props.filteryear]);

  return (
    <Box
      mt={2}
      sx={{
        display: 'grid',
        gap: { xs: 8, md: 3 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
        pl: { sm: 2 },
        pr: { sm: 2 },
      }}
    >
      {data.length > 0 ? (
        data.map((value) => (
          <div key={value._id}>
            <Box
              sx={{ p: 3, boxShadow: '0 1px 10px #64666B', borderRadius: '8px', mb: 1 }}
              onClick={() =>
                router.push({
                  pathname: '/travel/buysellcar/displaycardetails',
                  query: { data: JSON.stringify(value) },
                })
              }
            >
              <Image
                src={value.images?.[0] || '/placeholder.jpg'}
                sx={{ width: '100%', height: '200px' }}
              />
              <Typography variant="h4">{`${value.name} ${value.year}`}</Typography>
              <Typography variant="h6">{value.year}</Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body3">{value.location}</Typography>
                <Typography variant="body3">{value.mileage} km</Typography>
              </Stack>
              <Typography variant="h4" color="#CE9A00">
                PKR {value.price}
              </Typography>
            </Box>
          </div>
        ))
      ) : (
        <Typography variant="h5" color="error">
          ❌ No cars found
        </Typography>
      )}
    </Box>
  );
}
