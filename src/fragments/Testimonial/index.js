import React from 'react'
import styles from './styles.css'
import Svg from 'react-svg-inline'
import CocaColaSvg from '../../assets/images/customers/cocacola.svg'

const Testimonial = ({
  quote,
  author,
  authorTitle,
  logo,
  logoStyle,
  style
}) => (
  <div className={ styles.container }>
    <div style={style}>
      <div className={ styles.text }>

        <div>
          <div className={ styles.quote }>
            “ { quote } ”
          </div>
          <div className={ styles.meta }>
            <div>
                <div className={ styles.author }>
                { author }
              </div>
              <div className={ styles.authorTitle }>
                { authorTitle }
              </div>
            </div>
            <div className={styles.logo}> <Svg svg={logo} style={logoStyle} raw /></div>
          </div>

        </div>

      </div>
    </div>
  </div>
)

export default Testimonial