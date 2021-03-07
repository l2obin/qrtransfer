import React, { createRef, MutableRefObject } from 'react';
import './Receiver.css';

import { Box, Button, Container } from '@material-ui/core';
import QRScanner from '../common/QRScanner/QRScanner';

type ReceiverProps = {}

type ReceiverState = {
  videoConstraints?: MediaStreamConstraints["video"],
  currentFacingMode: CameraFacingModes,
  decodedMessage: string,
}

enum CameraFacingModes {
  USER = 'user',
  ENVIRONMENT = 'environment'
}

class Receiver extends React.Component<ReceiverProps, ReceiverState> {

  qrScannerRef = createRef<QRScanner>();

  constructor(props: ReceiverProps) {
    super(props);
    this.onMessageChanged = this.onMessageChanged.bind(this);
  }

  onMessageChanged(newMessage: string) {
    this.setState({ decodedMessage: newMessage });
  }

  render() {    
    return <Container maxWidth="sm">
      <h3>Receive</h3>
      <p>{ this.state && this.state.decodedMessage ? this.state.decodedMessage : 'null' }</p>
      <Box>
        <QRScanner ref={this.qrScannerRef} messageChange={this.onMessageChanged} />
      </Box>
      {/* <Button variant="contained" color="primary" onClick={this.toggleCamera} >Toggle Camera</Button> */}
      {/* <Button variant="contained" color="primary" onClick={this.receive} >Receive</Button> */}
    </Container>;
  }
}

export default Receiver;