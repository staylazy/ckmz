import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import back from "../images/home-background.jpg"

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <div style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            margin: -8
        }}>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
