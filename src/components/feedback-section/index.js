import React from 'react'
import { Header, Container, Divider, Segment, Image, Button } from 'semantic-ui-react'
import Upwork from './assets/img/upwork.png'
export default () => {
  return (
    <Container style={{marginTop: '10vh'}}>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Feedback</Header.Content>
        <Header.Subheader>
          <Divider horizontal>What people <span style={{color: '#e91e63'}}>say about me</span></Divider>
        </Header.Subheader>
      </Header>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: 100}}>
        <Segment style={{textAlign: 'center'}}>
          <Image src={Upwork} style={{width: '100px', textAlign: 'center'}}/>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Kenneth did a great job. He was excellent with communication and knowledge. <br/>One of the best experiences I've had with a freelancer on Upwork.</p>
            <footer>—Anonymous <cite>Upwork</cite></footer>
          </blockquote>
          <Button    color="red" href="https://www.upwork.com/freelancers/~018724209767272f28" target="_blank" rel="noopener">View profile</Button>
        </Segment>
      </Container>
    </Container>
  )
}