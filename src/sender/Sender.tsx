import React from 'react';
import './Sender.css';

import { Button, Container, Box, Slider, Typography } from '@material-ui/core';
import QRCode from 'qrcode.react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'node:constants';

const EACH_PACKET_SIZE = 30;

type SenderState = {
  eachPacketSize: number,
  data?: string,

  currentPacketNumber: number,
  totalNumberOfPackets: number,
  currentPacketData?: string,
}

type SenderProps = {}

class Sender extends React.Component<SenderProps, SenderState> {

  constructor(props: SenderProps) {
    super(props);

    this.state = {
      eachPacketSize: EACH_PACKET_SIZE,
      currentPacketNumber: 0,
      totalNumberOfPackets: 0,
    }

    setInterval(() => this.tick(), 100);

    this.send = this.send.bind(this);
  }

  send() {
    console.log(this);
    const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const totalNumberOfPackets = Math.ceil(data.length / this.state.eachPacketSize);

    this.setState({
      data,
      currentPacketNumber: 0,
      totalNumberOfPackets: totalNumberOfPackets,
      currentPacketData: this.getCurrentPacket(data, this.state.eachPacketSize, 0, totalNumberOfPackets),
    });
  }

  tick() {
    if (!this.state.data) return; // no data to send

    let nextPacket = (this.state.currentPacketNumber + 1) % this.state.totalNumberOfPackets;
    this.setState({
      currentPacketNumber: nextPacket,
      currentPacketData: this.getCurrentPacket(this.state.data, this.state.eachPacketSize, nextPacket, this.state.totalNumberOfPackets),
    });
  }

  getCurrentPacket(data:string, packetSize: number, currentPacketNumber: number, totalNumberOfPackets: number) {
    return (currentPacketNumber+1) + '/' + totalNumberOfPackets + "|" + data.substr(currentPacketNumber * packetSize, packetSize);
  }

  render() {
    return <Container maxWidth="sm">
      <h3>Send</h3>
      
      { this.state ? <Box>
        <Box alignItems="center" style={{backgroundColor: 'white', padding: 10, width: "60vmin", height: "60vmin"}}>
          { this.state.currentPacketData != null ? <QRCode value={this.state.currentPacketData} renderAs='svg' style={{width: "55vmin", height: "55vmin"}} /> : null }
        </Box>
        <Typography id="send-progress" gutterBottom>
          Progress <span>{this.state.currentPacketNumber+1}</span>/<span>{this.state.totalNumberOfPackets}</span>
        </Typography>
        <Slider
          value={this.state.currentPacketNumber+1}
          //getAriaValueText={(this.state.currentPacketNumber+1).toString()}
          aria-labelledby="send-progress"
          step={1}
          marks
          min={1}
          max={this.state.totalNumberOfPackets}
          valueLabelDisplay="auto"
          style={{width: "74vmin"}}
        />
      </Box>: null}
      <Button variant="contained" color="primary" onClick={this.send}>Send</Button>
      
    </Container>;
  }
}

export default Sender;