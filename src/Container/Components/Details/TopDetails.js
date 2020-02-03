import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Austinlogo from '../../../images/CMPD.png';
import folder from '../../../images/folder.png';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileStepper from '@material-ui/core/MobileStepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles(theme => ({
    ExtremeAlert: {
        background: '#19242F',
        boxShadow: '0px 14px 18px rgba(0, 0, 0, 0.15)',
        margin: '0 21px',
        padding: '25px 38px 25px 25px',
        minHeight: 'calc(100vh - 150px)',
        '& h5': {
            margin: '0',
            color: '#FF2E79',
            fontSize: '24px',
            fontFamily: ' Open Sans',
            fontWeight: '800',
            lineHeight: '1'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            background: '#05121D'
        },
    },
    helpingText: {
        fontFamily: 'Open Sans',
        fontWeight: '800',
        fontSize: '32px',
        color: '#FFFFFF',
        lineHeight: '110%',
        marginTop: '22px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
    ExtremeAlertWrap: {
        display: 'flex',
        justifyContent: ' space-between',
        '& span': {
            color: '#00AEEF',
        }
    },
    AustinlogoWrap: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        margin: '24px 0 45px 0',
        '& p': {
            margin: '0 0 0 12px',
            color: '#FFFFFF',
        },
        [theme.breakpoints.down('sm')]: {
            '& p': {
                fontSize: '13px',
            }
        },
    },
    awayText: {
        color: ' rgba(255, 255, 255, 0.75)',
    },
    mainImagesWrapMobile: {
        '& img': {
            borderRadius: '5px',
            marginBottom: '10px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    alertDetails: {
        fontFamily: 'Open Sans',
        '& h4': {
            fontWeight: '600',
            margin: '0 0 8px 0',
            color: '#00AEEF',
            fontSize: '13px'
        },
        '& p': {
            margin: '0 0 36px 0',
            color: ' #C3CDD7',
            lineHeight: '135%',
            fontSize: '17px',
            [theme.breakpoints.down('sm')]: {
                    fontSize: '15px'
            },
        },
    },
    downloadBtn: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(195, 205, 215, 0.2)',
        borderRadius: '8px',
        maxWidth: '176px',
        marginTop: '24px',
        padding: '9px 18px',
        '& p': {
            margin: '0 0 0 12px',
            fontSize: '13px',
            fontWeight: '600'
        }
    },
    img: {
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
    navButton:{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'24px',
    },
}));
function TopDetails() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = step => {
        setActiveStep(step);
    };
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
    const maxSteps = images.length;
    return (
        <div className={classes.ExtremeAlert}>
            <div>
                <div className={classes.ExtremeAlertWrap}>
                    <h5>Extreme Alert</h5>
                    <span>6 hours ago</span>
                </div>
                <div className={classes.awayText}>~ 2 miles away</div>
                <div className={classes.helpingText}>Help us find missing 14 year old Savvanah Smith last seen at Zilker Park</div>
                <div className={classes.AustinlogoWrap}>
                    <img src={Austinlogo} /><p>Austin Police Deaprtment</p>
                </div>
                <div className={classes.mainImagesWrapMobile}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="dots"
                        activeStep={activeStep}
                        className={classes.navButton}
                    />
                </div>
                <div className={classes.alertDetails}>
                    <h4>DETAILS</h4>
                    <p>Please help us find missing 14 year old Savvanah Smith who was last seen with her friends at Zilkder Park on Monday August 21st at 4:45pm. Savvanah was wearing a red sweatshirt and plack pants and has not been seen for over 1 day. </p>
                    <h4>INSTRUCTIONS</h4>
                    <p>Here are the instrucitons that can be included. Please call 911 for more information.</p>
                    <h4>ATTACHMENTS</h4>
                    <div className={classes.downloadBtn}>
                        <img src={folder} /><p>Missing_flyer.pdf</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopDetails;