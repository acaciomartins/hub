import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';

import { Fab } from "@material-ui/core";
import ArrowBack from '@material-ui/icons/ArrowBack';


function DefaultViewInsurance({ children, showHeader, showFooter}) {

  const Header = () => (
    <div className="w-100 h-25">
      <Fab>
        <ArrowBack/>
      </Fab>
    </div>)

  return (
    <Container fluid className="default-view-insurance p-0">
      <div className="default-view-insurance__dark-bg w-100">
        <div className="default-view-insurance__box-center">
          { showHeader && <Header/>}
          <Card className="default-view-insurance__content m-auto background-blue-strong">
            {children}
          </Card>

        </div>
      </div>
    </Container>
  );
}

DefaultViewInsurance.defaultProps = {
  children: null,
};

DefaultViewInsurance.propTypes = {
  children: PropTypes.node,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool
};

export default DefaultViewInsurance;
