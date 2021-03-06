import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  heading: {
    marginTop:120,
  },
  eventsContainer: {
  },
  eventContent: {
    display: 'flex',
    width:900,
    margin: '80px auto 0',
    alignItems: 'center',
    justifyContent: 'center',
    '@media only screen and (max-width:900px)':{
      flexDirection: 'column',
      width: '100%',
      padding: '0 20px'
    }
  },
  eventSkeletonContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
