import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
export default () => {
  return (
    <Grid doubling columns={2}>
      <Grid.Column>
        <Segment>
          <Header>
            High-Lights
            <Header.Subheader>3d-Printed Case for voice activated light controller</Header.Subheader>
          </Header>
          <iframe title="hi-lights" src="https://www.facebook.com/plugins/video.php?height=266&href=https%3A%2F%2Fwww.facebook.com%2F0a92fab3230134cca6eadd9898325b9b2ae67998%2Fvideos%2F3026620817585349%2F&show_text=true&width=560&t=0" width="100%" height="381" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Header>
            High-Lights
            <Header.Subheader>Prototoype</Header.Subheader>
          </Header>
          <iframe title="prototype" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F0a92fab3230134cca6eadd9898325b9b2ae67998%2Fvideos%2F1945685072254640%2F&show_text=true&width=214&t=0" width="100%" height="591" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}