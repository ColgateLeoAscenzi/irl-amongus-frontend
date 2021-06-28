import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SimpleTask = ({ classes }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={classes.root}>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            name="checkedTask"
                            className={classes.checkboxOutline}
                        />
                    }
                    label="Check if completed IRL task"
                />
            </FormGroup>
        </div>
    );
};

SimpleTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTask);
