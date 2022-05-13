import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { BarChart, LineChart } from '../components/Chart'
import BasicCard from '../components/BasicCard'
import MediaQuery from '../components/MediaQuery'

const RightSide = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <BasicCard />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <BasicCard />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <MediaQuery />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <BarChart />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <LineChart />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default RightSide
