import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from "prop-types";

function WhiteButton({label, action}) {

    return (
        <div onClick={() => action()} className="white-button">
            <p className="white-button__label">{label}</p>
          <KeyboardArrowRightIcon  className="white-button__icon"/>
        </div>
    )
}

WhiteButton.defaultProps = {
    action: () => console.log("Click"),
};

WhiteButton.propTypes = {
    label: PropTypes.string,
    action: PropTypes.func,
};

export default WhiteButton;
