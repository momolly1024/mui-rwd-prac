import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'

const divStyle = { margin: '8px' }

const Home = () => {
    return (
        <div style={divStyle}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <RightSide />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home
