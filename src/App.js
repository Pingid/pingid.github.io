import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/app.css';

import ProjectThumb from './components/ProjectThumb'
import { Thumb as IDA2017 } from './components/projects/IDA2017'
import { Thumb as Skynet } from './components/projects/SkynetKitchens'
import { Thumb as MWGA } from './components/projects/MWGA'
import { Thumb as Wikiconga } from './components/projects/Wikiconga'

const Wrapper = styled.div`
  padding: 1rem 4rem;
  @media (max-width: 700px) {
    padding: 1rem 0rem;
  }
`

class App extends Component {
  state = { color: 'black' }
  componentDidMount() {
    // const color = "#"+((1<<24)*Math.random()|0).toString(16);
    // document.body.style.backgroundColor = color;
    // this.setState({ color });
  }
  render() {
    const { history } = this.props;
    const { color } = this.state;
    return (
      <Wrapper className="flex flex-wrap justify-center px2 border-box">
        <ProjectThumb
          onSelect={() => history.push('/project/skynet-kitchens')}
          folder="skynet"
          title="Skynet Kitchens"
          type="app/installation"
          width="23rem">
          <Skynet color={color} />
        </ProjectThumb>

        <div>
          <ProjectThumb
            onSelect={() => window.location.assign('http://www.wikicon.ga/')}
            link="http://www.wkicon.ga"
            folder="wikiconga"
            title="Wikiconga"
            type="art/poetry"
            width="26rem">
            <Wikiconga />
          </ProjectThumb>

          <ProjectThumb
            onSelect={() => history.push('/project/publication')}
            folder="publication"
            pic="lettering-black.svg"
            title="Magazine"
            type="graphic/layout"
            width="26rem" />
        </div>

        <ProjectThumb
          onSelect={() => history.push('/project/MWGA')}
          folder="mwga"
          title="MWGA"
          type="game/graphic"
          width="18rem">
          <MWGA color={color} />
        </ProjectThumb>
        {
          // <ProjectThumb
          //   onSelect={() => history.push('/project/skynet-kitchens')}
          //   folder="skynet"
          //   title="Skynet Kitchens"
          //   type="app/installation"
          //   width="23rem">
          //   <IDA2017 color={color} />
          // </ProjectThumb>
        }

      </Wrapper>
    );
  }
}

export default App;
