import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/app.css';

import ProjectThumb from './components/ProjectThumb'
import { Thumb as Skynet } from './components/projects/SkynetKitchens'
import { Thumb as MWGA } from './components/projects/MWGA'

const Wrapper = styled.div`
  padding: 1rem 4rem;
  @media (max-width: 700px) {
    padding: 1rem 0rem;
  }
`

class App extends Component {
  state = { color: 'red' }
  componentDidMount() {
    const color = "#"+((1<<24)*Math.random()|0).toString(16);
    document.body.style.backgroundColor = color;
    this.setState({ color });
  }
  render() {
    const { color } = this.state;
    return (
      <Wrapper className="flex flex-wrap justify-center">
        <ProjectThumb
          folder="skynet"
          title="Skynet Kitchens"
          type="app/installation"
          width="23rem">
          <Skynet color={color} />
        </ProjectThumb>

        <div>
          <ProjectThumb
            folder="wikiconga"
            title="Wikiconga"
            type="art/poetry"
            width="26rem">
            <p style={{ color: 'white', fontSize: '.8rem' }}>
              Mathematics is the study of such topics as quantity. 
              <br /> Quantity is a property that can exist as a multitude. 
              <br /> Counting is the action of finding the number of elements. 
              <br /> In mathematics.
            </p>
          </ProjectThumb>

          <ProjectThumb
            folder="publication"
            pic="lettering-white.svg"
            title="Publication"
            type="graphic/layout"
            width="26rem" />
        </div>

        <ProjectThumb
          folder="mwga"
          title="MWGA"
          type="game/graphic"
          width="18rem">
          <MWGA color={color} />
        </ProjectThumb>

      </Wrapper>
    );
  }
}

export default App;
