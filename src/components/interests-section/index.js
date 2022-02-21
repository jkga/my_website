import React, { useState } from 'react'
import { Header, Container, Divider, Segment, Grid, Button, Icon, Item} from 'semantic-ui-react'
import './style.css'

const interests = {
  'iot': {
    title: 'Internet of things (IOT)',
    spriteClass: 'interests-sprite arduino',
    details: "During my free time, I used to make some cool stuff with my arduino and esp8266. With a cheap board and micro-controller, It's never been easier to control various electronic devices using our laptop and smart phones.",
  },
  'foss': {
    title: 'Free and Open Source Software (FOSS)',
    spriteClass: 'interests-sprite foss',
    details: "If time permits, I try my best to contribute something on the community by creating an open source software/programs which I usually upload to my github account. It's not big, but I hope it to be great.",
  },
  'electronics': {
    title: 'Electronics',
    spriteClass: 'interests-sprite ne555',
    details: "The technology we have today is a major upgrade of what we had from the past. An analog television, cassette tapes, and candle stick telephones are just a piece of artworks that you might have on your precious collection. But whats really interesting is the more it becomes older, the more the cooler it could be. And it is one of the things I love on studying electronics. Do you think this 555 IC Timer is cool? Definitely!",
  },
  'music': {
    title: 'Music Rocks',
    spriteClass: 'interests-sprite guitar',
    details: "Oooh YeahhH!! Did I say rock ? Yes. Music really rocks but to tell you honestly, I am not a fan of rock music. I prefer romantic songs, it really soothes my heart and ear. I love those vibrations that are calm and silent, but could hit one soul even with just a single tone.",
  },
}

export default () => {
  const [isInterestList, showInterestList] = useState (false)

  const showInterestListHandle = () => {
    showInterestList (true)
  }

  const showInterestSegmentHandle = () => {
    showInterestList (false)
  }

  const showInterestContent = () => {
    let interestNodes = []
    for(let [key, interest] of Object.entries(interests)) {
      interestNodes.push(<Grid.Column key={key}>
        <div className={interest.spriteClass}/>
      <p>
        <span style={{color: 'rgb(0, 150, 136)'}}>{interest.title}.&nbsp;</span> 
        {interest.details}
      </p>
    </Grid.Column>)
    }
    return (interestNodes)
  }

  const showInterestContentasItem = () => {
    let interestNodes = []
    for(let [key, interest] of Object.entries(interests)) {
      interestNodes.push(<Item>
          <Item.Image size='small' as='div' key={key}>
            <div className={interest.spriteClass.concat(' display-list')}/>
          </Item.Image>
          <Item.Content  verticalAlign='left'>
            <Item.Header as='div' style={{color: 'rgb(0, 150, 136)'}}>{interest.title}</Item.Header>
            <Item.Description>{interest.details}</Item.Description>
        </Item.Content>
      </Item>)
    }
    return (interestNodes)
  }

  const viewInterestAsSegments = () => {
    return (<Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: 50}}>
        <Segment style={{border: 'none', boxShadow: 'none'}}>
          <Grid stackable columns={2}>
            <Grid.Row verticalAlign='middle'>
              { showInterestContent () }
            </Grid.Row>
          </Grid>

          <Divider vertical className='interest-divider'>And</Divider>
        </Segment>
      </Container>)
  }

  const viewInterestAsList = () => {
    return (
    <Item.Group relaxed>{ showInterestContentasItem () }</Item.Group>)
  }

  return (
    <Container style={{marginTop: '10vh', minHeight: '120vh'}}>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Interests</Header.Content>
        <Header.Subheader>
          <Divider horizontal>These are the <span style={{color: '#e91e63'}}>things I like to do/learn</span></Divider>
        </Header.Subheader>
        <a id='interest-section'></a>
      </Header>
      <Container style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
        <Button.Group>
          <Button onClick={showInterestListHandle}><Icon name="list"/></Button>
          <Button.Or text='or' />
          <Button color="black" onClick={showInterestSegmentHandle}><Icon name="columns"/></Button>
        </Button.Group>
      </Container>
      {!isInterestList ? viewInterestAsSegments () : viewInterestAsList ()}
    </Container>)
}