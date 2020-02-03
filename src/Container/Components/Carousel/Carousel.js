import React, { Component } from 'react';
import { flexbox } from '@material-ui/system';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  mainImagesWrap: {
    '& img': {
      borderRadius: '5px',
      marginBottom: '10px'
    },
  }, 
  mainImagesWrapContainer: {
    flex:'1',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
  },
  imgGroupWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    '& img': {
      maxWidth: '100%',
      height:'62px',
      marginRight:'10px',
      borderRadius: '5px',
      '&:last-child': {
          marginRight: 0
      },
    },
  },
  active: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    border: '1px solid #00AEEF'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  }
}))

export default function Carousel() {
  const classes = useStyles();
  const images = [
    {
      id: 1,
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      id: 2,
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      id: 3,
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      id: 4,
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

  const [activeImage, setActiveImage] = React.useState(images[0]);
  const [activeStep, setActiveStep] = React.useState(0);
  // const [active, setActive] = React.useState(false);
  const maxSteps = images.length;
  const theme = useTheme();

  const handleStepChange = step => {
    setActiveStep(step);
  };

  const handleImageChange = (i) => {
    setActiveImage(i);
    setActiveStep(i.imgPath);

  }

  return (
    <div className={classes.mainImagesWrapContainer}>
      <div className={classes.mainImagesWrap}>
        <img
          className={classes.img}
          src={activeImage.imgPath}
          alt={activeImage.label}
        />
      </div>
      <div className={classes.imgGroupWrap}>
        {
          images.map((img, i) => <img
            key={i}
            className={(activeImage.id === img.id) ? classes.active : classes.img}
            src={img.imgPath}
            alt={img.label}
            id={img.id}
            onClick={() => handleImageChange(img)}
          />)
        }
      </div>
    </div>
  );
}
