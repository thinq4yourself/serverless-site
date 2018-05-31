import React, { Component } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import styles from './index.css'
import PlatformBetaCTA from '../PlatformBetaCTA'
import GlitchSvg from '../../assets/images/glitch-footer.svg'
import GlitchPng from '../../assets/images/glitch-footer.png'

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <div>
        <footer id='footer' className={styles.footer}>
          <div className={styles.bound}>
            <nav className={styles.navBlocks}>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>Toolkit</h4>
                <Link to='/framework/'>Serverless Framework</Link>
                <Link to='/event-gateway/'>Event Gateway</Link>
                <Link to='/framework/docs/platform/'>Serverless Platform</Link>
                <a href='https://github.com/serverless/guide' target='_blank'>Serverless Guide</a>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>Work with us</h4>
                <Link to='/enterprise/'>Enterprise</Link>
                <a href='https://github.com/serverless/plugins' target='_blank'>Plugins</a>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>Talk to us</h4>
                <a href='https://gitter.im/serverless/serverless' target='_blank'>Gitter</a>
                <a href='https://forum.serverless.com/' target='_blank'>Forum</a>
                <a href='https://twitter.com/goserverless' target='_blank'>Twitter</a>
                <a href='https://www.facebook.com/serverless/' target='_blank'>Facebook</a>
                <a href='https://www.instagram.com/serverlessinc/' target='_blank'>Instagram</a>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>About</h4>
                <Link to='/company/team/'>Company</Link>
                <a href='https://jobs.lever.co/serverless' target='_blank'>Jobs</a>
                <Link to='/blog/'>Blog</Link>
              </div>
            </nav>
            <div className={styles.ctaBlock}>
              <p className={styles.ctaText}>It’s not too late - sign up for the Platform beta and we’ll let you know when it’s ready for prime time.</p>
              <PlatformBetaCTA kind='whiteBordered' style={{marginTop: '1rem', marginBottom: '1rem'}} />
              <p className={styles.madeStatement}>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand.<br/><br/>
                Serverless, Inc. © {year}</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
