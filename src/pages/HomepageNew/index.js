import React from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import Default from '../../layouts/Default'
import styles from './styles.css'
import PlatformBetaCTA from '../../fragments/PlatformBetaCTA'
import PreFooterNew from '../../fragments/PreFooterNew'
import Testimonial from '../../fragments/Testimonial'
import FeaturesBgSvg from '../../assets/images/home/features-bg.png'
import BoltIconSvg from '../../assets/icons/bolt.svg'
import GatewayIconSvg from '../../assets/icons/gateway.svg'
import DashboardIconSvg from '../../assets/icons/dashboard.svg'
import AutoScalingSvg from '../../assets/icons/benefits/autoscaling.svg'
import PayPerExecutionSvg from '../../assets/icons/benefits/usage.svg'
import OverheadSvg from '../../assets/icons/benefits/overhead.svg'
import AwsSvg from '../../assets/images/providers/aws.svg'
import AzureSvg from '../../assets/images/providers/azure.svg'
import GcpSvg from '../../assets/images/providers/gcp.svg'
import IbmSvg from '../../assets/images/providers/ibm.svg'
import KubernetesSvg from '../../assets/images/providers/kubernetes.svg'
import FrameworkSvg from '../../assets/images/home/framework.svg'
import GatewaySvg from '../../assets/images/home/gateway.svg'
import DashboardSvg from '../../assets/images/home/dashboard.svg'
import CocaColaSvg from '../../assets/images/customers/cocacola.svg'
import EaSvg from '../../assets/images/customers/ea.svg'
import ExpediaSvg from '../../assets/images/customers/expedia.svg'
import NordstromSvg from '../../assets/images/customers/nordstrom.svg'
import ReutersSvg from '../../assets/images/customers/reuters.svg'
import GlitchPng from '../../assets/images/glitch-footer.png'

const baseUrl = process.env.S3_BUCKET 

const HomePageNewPage = (props) => {

  return (
    <Default className={ styles.page } {...props} fullWidth whiteLogo coloredHeader={ true } headerHideSignUp={ true }>
      
      <div className={ styles.firstSection }>
        <div>

          <div className={ styles.nav }>
            <div>
              {
                [{
                  to: `/blog`,
                  label: `overview`
                }, {
                  to: `/blog`,
                  label: `framework`
                }, {
                  to: `/blog`,
                  label: `dashboard`
                }, {
                  to: `/blog`,
                  label: `event gateway`
                }].map(({ to, label }, i) => (
                  <Link
                    to={ to }
                    key={ i }
                  >
                    <div
                      className={
                        i === 3
                          ? styles.selectedNavItem
                          : styles.navItem
                      }
                    >
                      { label }
                    </div>
                  </Link>
                ))
              }
            </div>
            <div></div>
          </div>

          <div className={ styles.headingAndCallToAction }>
            <div className={ styles.heading }>serverless</div>
            <div className={ styles.heading2 }>platform</div>
            <div className={ styles.message }>Focus on outcomes, not infrastructure. Serverless Platform provides the ideal developer experience for building serverless applications, on any provider.</div>
          </div>

          <div className={ styles.features }>
            <div className={ styles.featureHighlight }>
              <div>
                <div><Svg svg={BoltIconSvg} height='100' cleanup /></div>
                <div className={ styles.featureServerless }>serverless</div>
                <div className={ styles.featureTitle }>framework</div>
              </div>
              <div>
                <div><Svg svg={GatewayIconSvg} width='100' cleanup /></div>
                <div className={ styles.featureServerless }>serverless</div>
                <div className={ styles.featureTitle }>event gateway</div>
              </div>
              <div>
                <div><Svg svg={DashboardIconSvg} width='100' cleanup /></div>
                <div className={ styles.featureServerless }>serverless</div>
                <div className={ styles.featureTitle }>dashboard</div>
              </div>
            </div>
          </div>

          <div className={ styles.callToAction }>
            <PlatformBetaCTA kind='red' text='sign up'/>
            <a onClick={() => Intercom('showNewMessage', 'I would like to know all of the things.  🔮 😍')}>
              <div>contact sales</div>
            </a>
          </div>

        </div>
        <div className={styles.providers}> 
          <div className={styles.providerTitle}>Deploy your functions easily, to any serverless or cloud provider:</div>
          <div className={styles.providerLogos}>
            <div> 
              <div><Svg svg={GcpSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={AzureSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={AwsSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={IbmSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={KubernetesSvg} raw /></div>
            </div>
          </div>
        </div>
      </div>

      <div className={ styles.sectionGlitch }>
        <div>

          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>You can build more when you administer less. Serverless lets you focus on driving business value.</div>
            <div className={ styles.sectionSubHeading }>The benefits of serverless technology:</div>
          </div>

          <div className={ styles.benefitsGrid }>
            {
              [{
                graphicUrl: `${ AutoScalingSvg }`,
                title: `Automatic Scaling`,
                body: `Forget about provisioning & managing your server fleet. Serverless applications scale with demand.`
              }, {
                graphicUrl: `${ PayPerExecutionSvg }`,
                title: `Pay-per-execution`,
                body: `Never pay for idle. Serverless applications charge you only when they run the service.`
              }, {
                graphicUrl: `${ OverheadSvg }`,
                title: `Low Overhead`,
                body: `Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.`
              }].map(({ graphicUrl, title, body }, i) => (
                <div
                  className={ styles.benefit }
                  key={ i }
                >
                  <Svg svg={ graphicUrl } />
                  <div>
                    <div>{ title }</div>
                  </div>
                  <div>{ body }</div>
                </div>
              ))
            }
          </div>

          <Testimonial
            quote={ `The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster.` }
            author={`Patrick Brandt`}
            authorTitle={`Solutions Architect at The Coca-Cola Company`}
            logo={CocaColaSvg}
            logoStyle={{ height: '42px' }}
            style={{ background: '#fff' }}
          />

        </div>
      </div>

      <div className={ styles.sectionFull }>
        <div>
        
          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>Serverless Platform empowers developers to build & deploy serverless applications, on any provider.</div>
          </div>


          <div className={ styles.featuresGrid }>
            {
              [{
                graphicUrl: `${ FrameworkSvg }`,
                title: `Automatic Scaling`,
                body: `Forget about provisioning & managing your server fleet. Serverless applications scale with demand.`,
                url: `/framework/`
              }, {
                graphicUrl: `${ GatewaySvg }`,
                title: `Pay-per-execution`,
                body: `Never pay for idle time. Serverless applications charge you only when they run the service.`,
                url: `/enterprise/`
              }, {
                graphicUrl: `${ DashboardSvg }`,
                title: `Low Overhead`,
                body: `Serverless teams prototype faster, get to market faster, and spend more time working on new ideas.`,
                url: `/enterprise/`
              }].map(({ graphicUrl, title, body, url }, i) => (
                <div
                  className={ styles.feature }
                  key={ i }
                >
                  <Svg svg={ graphicUrl } />
                  <div>
                    <div>{ title }</div>
                  </div>
                  <div>{ body }</div>
                  <div className={ styles.learnMore }>
                  <Link to={url}>
                    <span>learn more</span>
                  </Link>
                </div>
                </div>
              ))
            }
            <img className={styles.featuresBg} src={FeaturesBgSvg} />
          </div>

        </div>
      </div>

      <div className={ styles.sectionDot }>
        <div className={ styles.trustedBy }> 
          <div className={ styles.trustedByTitle }>Serverless Platform is trusted by:</div>
          <div className={ styles.trustedByLogos }>
            <div> 
              <div><Svg svg={EaSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={CocaColaSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={NordstromSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={ExpediaSvg} raw /></div>
            </div>
            <div>
              <div><Svg svg={ReutersSvg} raw /></div>
            </div>
          </div>
        </div>
         <div style={{ width: '100%', height: '80px', marginTop: '120px', background: `url('${GlitchPng}')` }} />
      </div>
      <PreFooterNew
          heading={ `Next Steps` }
          full={ false }
          subheadings={[
            `Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.`,
            `Or if you’re ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.`
          ]}
          links={[{
            external: false,
            to: '/learn/use-cases',
            label: 'use cases'
          }, {
            external: false,
            to: '/learn/comparisons/',
            label: 'comparisons'
          }, {
            external: false,
            to: '/learn',
            label: 'case studies'
          }]}
        />
    </Default>
  )
}

HomePageNewPage.hasLoadingState = true

export default HomePageNewPage
