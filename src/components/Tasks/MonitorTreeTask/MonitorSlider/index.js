import React from 'react';
import Slider from '@material-ui/core/Slider';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    SLIDER_TYPE_CO2,
    SLIDER_TYPE_NUTRI,
    SLIDER_TYPE_RAD,
    SLIDER_TYPE_WATER,
    SLIDER_TYPES,
} from '../consts';
import Typography from '@material-ui/core/Typography';

const MonitorSlider = ({
    classes,
    sliderType,
    defaultValue,
    setTargetValue,
    marks,
    ...restProps
}) => {
    const dragHandler = (e, newValue) => {
        setTargetValue(newValue);
    };

    return (
        <div>
            <Slider
                min={0}
                max={100}
                orientation="vertical"
                defaultValue={defaultValue}
                marks={marks}
                step={1}
                classes={{
                    root: clsx(
                        classes.root,
                        sliderType === SLIDER_TYPE_CO2 && classes.CO2Root,
                        sliderType === SLIDER_TYPE_NUTRI && classes.NutriRoot,
                        sliderType === SLIDER_TYPE_RAD && classes.RadRoot,
                        sliderType === SLIDER_TYPE_WATER && classes.WaterRoot,
                    ),
                    mark: classes.mark,
                    rail: classes.rail,
                    track: classes.track,
                    thumb: classes.thumb,
                }}
                onChange={dragHandler}
                {...restProps}
            />
            <Typography className={classes.label}>{sliderType}</Typography>
        </div>
    );
};

MonitorSlider.propTypes = {
    classes: PropTypes.object.isRequired,
    sliderType: PropTypes.oneOf(SLIDER_TYPES).isRequired,
    marks: PropTypes.array.isRequired,
    defaultValue: PropTypes.number,
    setTargetValue: PropTypes.func.isRequired,
};

MonitorSlider.defaultProps = {
    defaultValue: 0,
};

export default withStyles(styles)(MonitorSlider);
