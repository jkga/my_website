import React, {Suspense, useEffect} from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

export default () => {

  useEffect(() => {
    if(!window) return
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    window.document.body.append(script)
  },[])

  return (
    <Grid doubling stackable columns={3}>
      <Grid.Column>
        <Segment>
          <Header>
            High-Lights
            <Header.Subheader>3d-Printed Case for voice activated light controller</Header.Subheader>
          </Header>
          <Suspense fallback={<></>}>
            <iframe title="hi-lights" src="https://www.facebook.com/plugins/video.php?height=266&href=https%3A%2F%2Fwww.facebook.com%2F0a92fab3230134cca6eadd9898325b9b2ae67998%2Fvideos%2F3026620817585349%2F&show_text=true&width=560&t=0" width="100%" height="381" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" loading="lazy"></iframe>
          </Suspense>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Header>
            High-Lights
            <Header.Subheader>Prototoype</Header.Subheader>
          </Header>
          <Suspense fallback={<></>}>
            <iframe title="prototype" src="https://www.facebook.com/plugins/video.php?height=266&href=https%3A%2F%2Fwww.facebook.com%2F0a92fab3230134cca6eadd9898325b9b2ae67998%2Fvideos%2F1945685072254640%2F&show_text=true&width=214&t=0" width="100%" height="381" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" loading="lazy"></iframe>
          </Suspense>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Header>
            Me- JAMSTACK Web Application
          </Header>
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing &quot;ME&quot; ! <br/>A next-gen JAMSTACK template for developers that leverage the use of JSON Resume in creating a web based vitae and portfolio.<br/><br/>{ <a href="https://twitter.com/jkga06?ref_src=twsrc%5Etfw">@jkga06</a> } <a href="https://twitter.com/hashtag/DEVCommunity?src=hash&amp;ref_src=twsrc%5Etfw">#DEVCommunity</a> <a href="https://t.co/qMLr761z0B">https://t.co/qMLr761z0B</a></p>&mdash; DEV Community 👩‍💻👨‍💻 (@ThePracticalDev) <a href="https://twitter.com/ThePracticalDev/status/1254417498977550341?ref_src=twsrc%5Etfw">April 26, 2020</a></blockquote>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}