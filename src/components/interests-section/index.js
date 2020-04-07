import React from 'react'
import { Header, Container, Divider, Segment, Grid, Button, Icon} from 'semantic-ui-react'
import './style.css'
export default () => {
  return (
    <Container style={{marginTop: '10vh'}}>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Interests</Header.Content>
        <Header.Subheader>
          <Divider horizontal>These are the <span style={{color: '#e91e63'}}>things I like to do/learn</span></Divider>
        </Header.Subheader>
      </Header>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
        <Button.Group>
          <Button><Icon name="list"/></Button>
          <Button.Or text='or' />
          <Button color="black"><Icon name="image"/></Button>
        </Button.Group>
      </Container>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: 50}}>
      <Segment style={{border: 'none', boxShadow: 'none'}}>
        <Grid stackable columns={2}>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
                <div className='interests-sprite arduino'/>
              <p>
                <span style={{color: 'rgb(0, 150, 136)'}}>Internet of things (IOT) </span> 
                During my free time, I used to make some cool stuff with my arduino and esp8266.
                With a cheap boards and micro-controllers, It's never been easier to control various electronic devices
                using our laptop or smart phone.
              </p>
            </Grid.Column>
            <Grid.Column>
              <div className='interests-sprite foss'/>
              <p>
                <span style={{color: 'rgb(0, 150, 136)'}}>Free and Open Source Software (FOSS).</span>
                If time permits, I try my best to contribute something on the community by creating an open source
                software/programs which I usually upload to my github account. It's not big, but I hope it to be great.
              </p>
            </Grid.Column>

            <Grid.Column>
              <div className='interests-sprite ne555'/>
              <p>
                <span style={{color: 'rgb(0, 150, 136)'}}>Electronics.</span>&nbsp;
                The technology we have today is a major upgrade of what we had from the past. An analog television, cassette tapes, and candles stick telephones
                are just a piece of artworks that you might have on your precious collection. But whats really interesting is the more it becomes older, the more the cooler it could be.
                And it is one of the thing I love on studying electronics. Do you think this 555 IC Timer is cool? Definitely!
              </p>
            </Grid.Column>
            <Grid.Column>
              <div className='interests-sprite guitar'/>
              <p>
                <span style={{color: 'rgb(0, 150, 136)'}}>Music Rocks.</span>
                Oooh YeahhH!! Did I say rock ? Yes. Music really rocks but to tell you honestly, I am not
                a fan of rock music. I prefer romantic songs, it really soothes my heart and ear. I love those 
                vibrations that are calm and silent, but could hit one soul even with just a single tone.

              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider vertical className='interest-divider'>And</Divider>
      </Segment>
      </Container>
    </Container>
  )
}