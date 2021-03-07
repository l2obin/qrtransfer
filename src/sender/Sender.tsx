import React from 'react';
import './Sender.css';

import { Button, Container, Box } from '@material-ui/core';
import QRCode from 'qrcode.react';

const EACH_PACKET_SIZE = 30;

type SenderState = {
  each_packet_size: number,
  data: string,

  current_packet_number: number,
  total_number_of_packets: number,
  current_packet_data: string,
}

class Sender extends React.Component<{}, SenderState> {

  tick() {
    let nextPacket = (this.state.current_packet_number + 1) % this.state.total_number_of_packets;
    this.setState({
      current_packet_number: nextPacket,
      current_packet_data: this.getCurrentPacket(this.state.data, this.state.each_packet_size, nextPacket, this.state.total_number_of_packets),
    });
  }

  prepare() {
    if (this.state.data === null || this.state.data.length === 0) {
      this.setState({
        current_packet_number: 0,
        total_number_of_packets: 0,
        current_packet_data: ''
      })
      return;
    }

    const totalNumberOfPackets = Math.ceil(this.state.data.length / this.state.each_packet_size);
    this.setState({
      current_packet_number: 0,
      total_number_of_packets: totalNumberOfPackets,
      current_packet_data: this.getCurrentPacket(this.state.data, this.state.each_packet_size, 0, totalNumberOfPackets),
    });
  }

  getCurrentPacket(data:string, packetSize: number, currentPacketNumber: number, totalNumberOfPackets: number) {
    return (currentPacketNumber+1) + '/' + totalNumberOfPackets + "|" + data.substr(currentPacketNumber * packetSize, packetSize);
  }

  componentWillMount() {
    this.setState({
      data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      each_packet_size: EACH_PACKET_SIZE,
    });
  }

  componentDidMount() {
    this.prepare();
    setInterval(() => this.tick(), 100);
  }

  render() {
    return <Container maxWidth="sm">
      <h3>Send</h3>
      
      <Button variant="contained" color="primary">Send</Button>
      <span>{this.state.current_packet_number+1}</span>/<span>{this.state.total_number_of_packets}</span>
      <Box alignItems="center" style={{backgroundColor: 'white', padding: 10, width: "74vmin", height: "74vmin"}}>
        { this.state.current_packet_data != null ? <QRCode value={this.state.current_packet_data} renderAs='svg' style={{width: "70vmin", height: "70vmin"}} /> : null }
      </Box>
    </Container>;
  }
}

export default Sender;