import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { brown } from "@mui/material/colors";



export default function SubscribeForm() {

    return <Box
      sx={{
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: 'white', // White text for readability
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '1.5rem', textAlign: 'center', color: 'black' }}>
      DON,T MISS LATEST UPDATES
      </Typography>
      <form>
        <TextField 
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: '1rem',
            backgroundColor: 'brown',
            color: '#fff',
            '&:hover': { backgroundColor:'red' },
          }}
        >
          Subscribe
        </Button>
      </form>
    </Box>

}