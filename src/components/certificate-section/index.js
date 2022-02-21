import React from 'react'
import { Header, Container, Image, Grid, Divider, Label } from 'semantic-ui-react'
import Tesda from './assets/img/tesda.png'
import './style.css'
export default () => {
  return (
    <Container style={{marginTop: 150}}>
      <a id='certificate-section'></a>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Certificates</Header.Content>
      </Header>
      <Divider horizontal>Recognitions / Awards / <span style={{color: '#e91e63'}}>Certifications</span></Divider>
       <Grid doubling columns={2} style={{marginTop: '4em'}}>
        <Grid.Column>
          <Container style={{padding: '10%', textAlign: 'center'}}>
            <Header as='h3' icon textAlign='center'>
              <Header.Content>Information Technology Infrastructure Library</Header.Content>
              <Header.Subheader>
                ITILv4 foundation by <span style={{color: '#e91e63'}}> Axelos </span>
              </Header.Subheader>
              <Label as='a' size='mini' color='teal'>@2020</Label>
            </Header>
            <div className='cert-sprite itilv4'></div>
            <p style={{textAlign: 'justify'}}>
              <span style={{color: 'rgb(0, 150, 136)'}}>ITIL 4 brings the ITIL framework </span>
              up to date, introducing a holistic approach to service management and focusing on 'end-to-end service management from demand to value'.
              The new edition of ITIL 4 is the first major update to ITIL since 2007 and is arguably a response to the emergence of newer service management frameworks such as VeriSM™, SIAM® and FitSM. It expands the previous version of ITIL V3 ('ITIL 2011') and provides a flexible basis to support organizations on their journey to the new world of digital transformation.<br/><br/>
              <small>source: <a href='https://wiki.en.it-processmaps.com/index.php/ITIL_4' target="_blank" rel='noopener noreferrer'>wiki.en.it</a></small>
            </p>
          </Container>
        </Grid.Column>

        <Grid.Column>
          <Container style={{padding: '10%', textAlign: 'center'}}>
            <Header as='h3' icon textAlign='center'>
              <Header.Content>Computer Hardware Servicing NCII</Header.Content>
              <Header.Subheader>
                CHS National Certificate II by <span style={{color: '#e91e63'}}> TESDA </span>   
              </Header.Subheader>
              <Label as='a' size='mini' color='teal'>@2011</Label>
            </Header>
            <Image src={Tesda} centered style={{width: 150, padding: 20}}/>
            <p style={{textAlign: 'justify'}}>
            <span style={{color: 'rgb(0, 150, 136)'}}>This certification / course</span> is designed
            to develop knowledge, skills and attitudes of a Computer Service Technician in accordance with 
            the industry standards. It covers basic and common competencies such as installing, configuring and diagnosing
            computer systems and networks.
            </p>
          </Container>
        </Grid.Column>
        
      </Grid>
      
    </Container>
  )
}