import React, { Component } from 'react'
import { Link } from 'react-router'
import track from '../../utils/analytics/track'
import Svg from 'react-svg-inline'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import styles from './index.css'
import PlatformBetaCTA from '../PlatformBetaCTA'

const logo = process.env.LOGO

export default class Footer extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: false,
      error: false,
      success: false,
    }
  }
  onSubmit = (event, data) => {
    event.preventDefault()
    const formId = event.target.id

    this.setState({
      loading: true
    })

    const formData = {
      formId: formId,
      fields: data
    }

    // return false

    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      })
    }).catch((e) => {
      console.log('ERROR', e)
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })
  }

  renderForm() {
    const { loading, success } = this.state
    const formId = 'newsletter-signup'

    if (success) {
      track('site:footer_newsletter', {
        category: 'Newsletter'})
      return (
        <div>
          <p className={styles.thanks}>
            Look out in your email for some awesome.
          </p>
        </div>
      )

    }

    const buttonText = (loading) ? "thinking" : "sign up"

    return (
      <Form className={styles.form} id={formId} onSubmit={this.onSubmit} onChange={this.onChange} trimOnSubmit>
        <div className={styles.fieldSet}>
          <TextInput
            name='email'
            validation={'isEmail'}
            placeholder='Email'
            className={styles.input}
            errorMessageClassName={styles.errorMessage}
            required
          />
        </div>
        <div className={styles.submit}>
          <Button kind={'red'} style={{padding: '13px 23px'}}>
            {buttonText}
          </Button>
        </div>
      </Form>
    )
  }
  render() {
    const year = new Date().getFullYear()

    return (
      <div>
        <footer id='footer' className={styles.footer}>
          <div className={styles.logoContainer}>
            <Link to='/' className={styles.logo}>
              <img
                id='logo'
                width={28}
                height={23}
                src={logo.ICON}
                className={styles.logoIcon}
                ref={logo => { this.logo = logo }}
              />
              <span className={styles.logoText}>
                serverless
              </span>
            </Link>
          </div>
          <div className={styles.bound}>
            <nav className={styles.navBlocks}>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>learn</h4>
                <Link to='/learn/'>why?</Link>
                <Link to='/learn/use-cases/'>use cases</Link>
                <Link to='/learn/comparisons/'>comparisons</Link>
                <Link to='/learn/comparisons/'>case studies</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>developers</h4>
                <Link to='/docs/'>docs</Link>
                <Link to='/learn/quick-start/'>quick starts</Link>
                <a href='https://github.com/serverless/examples' target='_blank'>examples & guides</a>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>platform</h4>
                <Link to='/framework/'>framework</Link>
                <Link to='/enterprise/'>dashboard</Link>
                <Link to='/event-gateway/'>gateway</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>resources</h4>
                <Link to='/blog/'>framework</Link>
                <a href='https://forum.serverless.com/' target='_blank'>forum</a>
                <Link to='/community/meetups/'>meetups</Link>
                <a href='https://github.com/amv/serverless-slack-invite-api' target='_blank'>slack</a>
                <Link to='/workshops/'>workshops</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>company</h4>
                <a href='https://jobs.lever.co/serverless' target='_blank'>jobs</a>
                <a href='#'>contact</a>
                <Link to='/community/champions/'>champions</Link>
              </div>
              <p className={styles.madeStatement}>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand.<br/><br/></p>
              <div className={styles.privacy}>
                <span>Serverless, Inc. © {year}</span>
                <Link to='/terms/'>terms of service</Link>
                <Link to='/privacy/'>privacy</Link>
              </div>
            </nav>
            <div className={styles.ctaBlock}>
              <p className={styles.ctaText}>Join our newsletter and get the latest news about Serverless products and happenings. <br />#noSpamWePromise</p>
              <div className={styles.form}>
                {this.renderForm()}
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
