import React from 'react';
import {Fab, LinearProgress} from "@material-ui/core";
import ArrowBack from '@material-ui/icons/ArrowBack';

function HeaderForm(props) {
    const normalise = (value, min, max) => (value - min) * 100 / (max - min);

    return (
        <div className="layout-form__header" >
            <div>
                <Fab className="layout-form__header__fab"  >
                  <ArrowBack className="layout-form__header__fab__icon"/>
                </Fab>
            </div>
            <div>
                <p className="layout-form__header__text">Etapa 01 de 10</p>
                <LinearProgress style={{width:92}} variant="determinate" value={normalise(4, 1, 12)}/>
            </div>
        </div>)
}

// HeaderForm.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             image: PropTypes.string,
//             title: PropTypes.string,
//             subtitle: PropTypes.string
//         })
//     ),
// };

export default HeaderForm;
