import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';

function DefaultViewInsurance({ children }) {

  return (
    <Container fluid className="default-view-insurance p-0">
      <div className="default-view-insurance__dark-bg w-100">
        <div className="default-view-insurance__box-center">
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
};

export default DefaultViewInsurance;
