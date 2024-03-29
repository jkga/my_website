import React from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'
import Featured from './featured'
export default () => {
  return (
    <Container style={{marginTop: '15vh', marginBottom: '15vh'}}>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Featured Videos</Header.Content>
        <Header.Subheader>
          <Divider horizontal>Sample videos related to my <span style={{color: '#e91e63'}}>projects</span></Divider>
        </Header.Subheader>
        <a id='video-section'></a>
      </Header>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: 100}}>
        <Featured/>
      </Container>
    </Container>
  )
}