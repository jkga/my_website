import React from 'react'
import { Header, Container, Divider, Segment, Grid, Responsive} from 'semantic-ui-react'
import './style.css'
export default () => {
  return (
    <Container style={{marginTop: '10vh'}}>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Interests</Header.Content>
        <Header.Subheader>
          <Divider horizontal>These are the <span style={{color: '#e91e63'}}>things I like to do or learn</span></Divider>
        </Header.Subheader>
      </Header>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: 100}}>
      <Segment style={{border: 'none', boxShadow: 'none'}}>
        <Grid doubling columns={2}>
          <Grid.Column>
              <div className='interests-sprite arduino'/>
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>Internet of things (IOT)</span> Aenean commodo ligula eget dolor.
              Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu
            </p>
          </Grid.Column>
          <Grid.Column>
            <div className='interests-sprite foss'/>
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>Free and Open Source Software (FOSS)</span> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
            </p>
          </Grid.Column>

          <Grid.Column>
            <div className='interests-sprite ne555'/>
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>Electronics</span> Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
            </p>
          </Grid.Column>
          <Grid.Column>
            <div className='interests-sprite guitar'/>
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>Music Rocks</span> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
            </p>
          </Grid.Column>
        </Grid>

        <Divider vertical>And</Divider>
      </Segment>
      </Container>
    </Container>
  )
}