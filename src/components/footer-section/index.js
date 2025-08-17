import React from 'react'
import { List, Container, Grid, Header } from 'semantic-ui-react'
import './assets/index.css'
export default () => {
  return (
    <Container style={{marginTop: '20vh', marginBottom: '5vh'}}>
      <Header>Related Links</Header>
      <Grid columns={'equal'} stackable>
        <Grid.Column textAlign='left'>
          <List className='footer-list'>
            <List.Item href='https://www.buymeacoffee.com/jkga/posts'>Buy me a coffee</List.Item>
            <List.Item href='https://ko-fi.com/kenabella'>Ko-Fi</List.Item>
            <List.Item href='https://dev.to/jkga'>Dev.to</List.Item>
          </List>
        </Grid.Column>

        <Grid.Column textAlign='left' className='footer-list'>
          <List>
            <List.Item href='https://github.com/jkga'>Github</List.Item>
            <List.Item href='https://www.upwork.com/freelancers/~018724209767272f28'>Upwork</List.Item>
          </List>
        </Grid.Column>

        <Grid.Column textAlign='left'></Grid.Column>
      </Grid>
    </Container>
  )
}