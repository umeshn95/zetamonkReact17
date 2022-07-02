import {  Grid } from '@mui/material'
import React from 'react'
import {socialmedia} from './Flagdata'
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Socialmedia = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
 

    return (
                <>
                
                {
                        matches?<></>:<Grid  container  spacing={2} lg={3}>
                        {socialmedia.map((data)=>
                        <>
                        <Grid item style={{color:'black',cursor:'pointer'}}> {data.icon}</Grid>
                        </>)}
                    </Grid>
                    }
                </>
                
    )
}

export default Socialmedia
