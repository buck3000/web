/* eslint-disable react/no-array-index-key */
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

/**
 * Skeleton to be displayed while loading a grid.
 */
const GridSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(8)).map((_, index) => (
        <Grid item xs={12} sm={4} md={3} key={index}>
          <Skeleton variant="rect" height={80} />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridSkeleton;
