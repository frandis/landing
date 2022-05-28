import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

function CTAMetrics() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <img src={require('../assets/metrics.png')} />
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Typography variant='h3'>Focus on the metrics that matter</Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis
          commodo odio aenean sed. Amet facilisis magna etiam tempor. Lorem
          ipsum dolor sit amet consectetur adipiscing. Nulla facilisi etiam
          dignissim diam quis enim lobortis scelerisque fermentum. Vestibulum
          morbi blandit cursus risus at ultrices mi. Convallis a cras semper
          auctor neque vitae tempus. Quis commodo odio aenean sed adipiscing
          diam donec adipiscing tristique. Purus sit amet volutpat consequat. Id
          eu nisl nunc mi. Nulla malesuada pellentesque elit eget gravida cum.
          Tristique senectus et netus et malesuada.
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default CTAMetrics;
