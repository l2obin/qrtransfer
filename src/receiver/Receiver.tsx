import React from 'react';
import './Receiver.css';

import { Button, Container } from '@material-ui/core';

class Receiver extends React.Component {
  render() {
    return <Container maxWidth="sm">
      <h3>Receive</h3>
      <Button variant="contained" color="primary">Receive</Button>
    </Container>;
  }
}

export default Receiver;