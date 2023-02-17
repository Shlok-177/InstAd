import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ReactPlayer from 'react-player'
import FormFeild from './FormFeild';

export default function MainScreen() {

  const [videoLink, setVidoLink] = useState('https://youtu.be/Uh-N_6Lccr4');


  return (
    <>
      <div className='text-2xl text-primary  font-bold m-5 text-center mb-10'>MainScreen</div>
      <div className='m-5'>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper elevation={1}>
              <FormFeild />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={2}>
              <div className='p-2'>
                <ReactPlayer url={videoLink} width="auto" />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
