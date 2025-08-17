import React, {Suspense} from 'react'
import { Responsive } from 'semantic-ui-react'
import Header from '../../components/header'
import './style.css'

const HeaderMenu = React.lazy(() => import('../../components/main-menu'))
const TechStack = React.lazy(() => import('../../components/tech-stack-section'))
const Certificate = React.lazy(() => import('../../components/certificate-section'))
const Feedback = React.lazy(() => import('../../components/feedback-section'))
const Interest = React.lazy(() => import('../../components/interests-section'))
const FeauturedVideo = React.lazy(() => import('../../components/featured-video-section'))
const Footer = React.lazy(() => import('../../components/footer-section'))

export default () => {
  return (
    <Responsive>
      <Suspense fallback={<div>...</div>}>
        <HeaderMenu></HeaderMenu>
        <Header></Header>
        <TechStack></TechStack>
        <Interest></Interest>
        <FeauturedVideo></FeauturedVideo>
        <Certificate></Certificate>
        <Feedback></Feedback>
        <Footer/>
      </Suspense>
    </Responsive>
  )
}