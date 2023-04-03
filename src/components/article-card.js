import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './article-card.module.css'

const ArticleCard = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <h3 className={` ${styles['text']} ${projectStyles['healine']} `}>
          {props.title}
        </h3>
        <div className={styles['container2']}>
          <span className={styles['text1']}>{props.description}</span>
        </div>
        <div className={styles['container3']}>
          <img
            alt={props.avatar_alt}
            src={props.avatar_src}
            className={styles['image1']}
          />
          <div className={styles['container4']}>
            <span className={styles['text2']}>{props.name}</span>
            <div className={styles['container5']}>
              <span
                className={` ${styles['text3']} ${projectStyles['text-s-m']} `}
              >
                {props.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  avatar_src: '15958451-f790-4024-a70e-cc38b82637f2',
  name: 'Laura Hanks',
  title: 'Portofino one of the best for remote working',
  image_src: '/playground_assets/city-1-1400w.jpg',
  time: 'Published 3 days ago',
  avatar_alt: 'avatar',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  image_alt: 'image',
}

ArticleCard.propTypes = {
  avatar_src: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  avatar_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
