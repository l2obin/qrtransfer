import React from 'react';
import './Sender.css';

import { Button, Container } from '@material-ui/core';

class Sender extends React.Component {
  render() {
    return <Container maxWidth="sm">
      <h3>Send</h3>
      <Button variant="contained" color="primary">Send</Button>
    </Container>;
  }
}

export default Sender;