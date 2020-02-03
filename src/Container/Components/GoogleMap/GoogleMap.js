import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    mainMapWrap:{
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            height: '172px',
        },
    },
    mapWrap: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '172px',
            minWidth: '100vw',
            position: 'absolute',
        },
    }
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
    };
    render() {
        const { classes } = this.props
        return (
            <div className={classes.mainMapWrap}>
                <div className={classes.mapWrap}>
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
};

export default withStyles(styles)(GoogleMap);
