import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// ICONE
import { BsGlobe } from 'react-icons/bs';
import { IoChevronUpOutline } from 'react-icons/io5';

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from '../themes/commonStyles';

const foooterLinks =[
  {id: 1, text: 'Privacy', url: '#'},
  {id: 2, text: 'Terms', url: '#'},
  {id: 3, text: 'Sitemap', url: '#'},
  {id: 4, text: 'Destinations', url: '#'}
];

const Footer = () => {
  return (
    <Box sx={{
      ...fullWidthFlex,
      borderTop: '1px solid #ddd'
    }}>
      <Container maxWidth='xl'>
        <Box sx={{
          ...flexBetweenCenter,
          width: '100%'
        }}>
          <Stack>
            <Paper>
              <Link href = "#">2023 Airbnb Copyright</Link>
            </Paper>
            {
              foooterLinks.map(link => {
                return (
                  <Paper key={link.id}>
                    <Link href={link.url}>{link.text}</Link>
                  </Paper>
                )
              })
            }
          </Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{
                  ...justifyCenter,
                  mr:1
                }}>
                  <BsGlobe size={24}/>
                </Box>
                English
              </Button>
              <Button>$US</Button>
              <Button>Support & Resources</Button>
              <Box sx={{
                ...justifyCenter,
                ml:1
              }}  >
                <IoChevronUpOutline size={24} />
              </Box>
            </Paper>
          <Stack>

          </Stack>

        </Box>

      </Container>
    </Box>
  )
}

export default Footer