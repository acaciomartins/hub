import React from 'react';
import PropTypes from 'prop-types';
import {Container, Card} from 'react-bootstrap';
import HeaderForm from "./headerForm";

function LayoutForm({ children}) {


  return (
    <Container className="block layout-form- p-0 w-100">
        <HeaderForm />
          <Card className="layout-form__content m-auto">
            {children}
          </Card>
    </Container>
  );
}

LayoutForm.defaultProps = {
  children: null,
};

LayoutForm.propTypes = {
  children: PropTypes.node,
};

export default LayoutForm;
