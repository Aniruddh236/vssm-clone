import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function Copyright(){

    useEffect(()=>{
        console.log('Copyright loaded..');
        
    })
  return<>
    <Box 
      sx={{ 
        bottom: 0, 
        width: '100%', 
        textAlign: 'center', 
        py: 2 
      }}
    >
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} www.aniruddhsinhparmar.com. All rights reserved.
      </Typography>
    </Box>
    </>
};


