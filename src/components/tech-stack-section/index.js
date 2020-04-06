import React from 'react'
import { Header, Container, Image, Grid, Segment, Divider, Label } from 'semantic-ui-react'
import Techs from './assets/img/techs.png'
import './style.css'
export default () => {
  return (
    <Container>
      <Header as='h1' icon textAlign='center'>
        <Header.Content>Tech & Certs</Header.Content>
      </Header>
      <Divider horizontal>Technology Stacks and <span style={{color: '#e91e63'}}>acquired certificates</span></Divider>
      
       <Grid doubling columns={2} style={{marginTop: '4em'}}>
        <Grid.Column>
          <Segment style={{padding: '10%'}}>
            <Header as='h3' icon textAlign='center'>
              <Header.Content>Technology Stacks</Header.Content>
              <Header.Subheader>
                Tools / Markup / Programming Languages I <span style={{color: '#e91e63'}}>used in developing</span> various web applications
              </Header.Subheader>
            </Header>

            <Image src={Techs} style={{width: '80%', minWidth: '250px', margin: '10%'}}/>
           
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>ITILv4 Foundation</span>
              ITIL 4 brings the ITIL framework up to date, introducing a holistic approach to service management and focusing on 'end-to-end service management from demand to value'.<br/>
              The new edition of ITIL 4 is the first major update to ITIL since 2007 and is arguably a response to the emergence of newer service management frameworks such as VeriSM™, SIAM® and FitSM. It expands the previous version of ITIL V3 ('ITIL 2011') and provides a flexible basis to support organizations on their journey to the new world of digital transformation.
              ITIL 4 describes an operating model for the delivery of tech-enabled products and services. The documentation has been completely revised and streamlined to make it easier to read, and enhanced with many practical examples.
              ITIL 4 also reflects recent trends in software development and IT operations, and includes advice on how to apply philosophies such as Agile, DevOps and Lean in the domain of service management.
              <br/><br/>
              Last but not least, ITIL 4 makes a point of being "a framework for service management" (as opposed to "IT service management"), reflecting the growing trend of applying service management best practices in the domain of enterprise and business services.
              <small>https://wiki.en.it-processmaps.com/index.php/ITIL_4</small>
            </p>
          </Segment>
        </Grid.Column>
        
        <Grid.Column style={{padding: 20, marginTop: 50}}>
            <Header as='h3' icon textAlign='center'>
              <Header.Content>Information Technology Infrastructure Library</Header.Content>
              <Header.Subheader>
                ITILv4 foundation by <span style={{color: '#e91e63'}}> Axelos </span>
                <Label as='a' tag size='mini' color='teal'>@2020</Label>
              </Header.Subheader>
            </Header>
            <div className='cert-sprite itilv4'></div>
            <p>
              <span style={{color: 'rgb(0, 150, 136)'}}>ITIL 4 brings the ITIL framework </span>
              up to date, introducing a holistic approach to service management and focusing on 'end-to-end service management from demand to value'.
              The new edition of ITIL 4 is the first major update to ITIL since 2007 and is arguably a response to the emergence of newer service management frameworks such as VeriSM™, SIAM® and FitSM. It expands the previous version of ITIL V3 ('ITIL 2011') and provides a flexible basis to support organizations on their journey to the new world of digital transformation.<br/><br/>
              <small>source: <a href='https://wiki.en.it-processmaps.com/index.php/ITIL_4' target="_blank" rel='noopener noreferrer'>wiki.en.it</a></small>
            </p>
            <br/><br/>
            <Divider horizontal>and</Divider>

            <Header as='h3' icon textAlign='center'>
              <Header.Content>Computer Hardware Servicing NCII</Header.Content>
              <Header.Subheader>
                CHS National Certificate II by <span style={{color: '#e91e63'}}> TESDA </span>   
                <Label as='a' tag size='mini' color='teal'>@2011</Label>
              </Header.Subheader>
            </Header>
            <p>
            <span style={{color: 'rgb(0, 150, 136)'}}>This certification / course</span> is designed
            to develop knowledge, skills and attitudes of a Computer Service Technician in accordance with 
            the industry standards. It covers basic and common competencies such as installing, configuring and diagnosing
            computer systems and networks.
            </p>
            
        
          
        </Grid.Column>
      </Grid>
      
    </Container>
  )
}