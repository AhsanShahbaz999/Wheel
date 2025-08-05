// import { useRef, useState } from 'react';
import React, { useRef, useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import { useBoundingClientRect, useResponsive } from '../../../hooks';
// _data
import _mock from '../../../../_data/mock';
import { useRouter } from 'next/router';

// components
import { Image, TextIconLabel, PlayerWithButton } from '../../../components';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------
export default function TravelLandingCars() {
  const isDesktop = useResponsive('up', 'md');
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autobidup.pythonanywhere.com/store/all_products/');
        const jsonData = await response.json();
        setData(jsonData);
        console.log('created', jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <RootStyle>
        <Typography variant="h3" textAlign="center" alignItems="center">
          Wheelmate Accessories Store
        </Typography>

        <Container sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gap: { xs: 2, md: 0 },
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
            }}
          >
            {data.map((item) => (
              <div key={item.pid}>
                {/* if (item.ptype == 1) */}
                <Box
                  // onClick={() => router.push()}
                  sx={{
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    mt: 8,
                    '&: hover': {
                      // pt: '40px',
                      transform: 'scale(0.92)',
                      transaction: '.3s',
                      color: '#FFBE00',
                    },
                  }}
                >
                  <Image
                    src={item.images}
                    sx={{
                      width: '100%',
                      //  height: '58%',
                    }}
                  />
                  <Box>
                    <Typography sx={{ mb: -1 }}>{item.pname}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                </Box>
              </div>
            ))}
          </Box>
        </Container>
      </RootStyle>
    </>
  );
}
