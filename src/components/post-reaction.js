import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './post-reaction.module.css'

const PostReaction = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <span className={` ${styles['text']} ${projectStyles['text-l-g']} `}>
            {props.name}
          </span>
          <span className={` ${styles['text1']} ${projectStyles['text-m-d']} `}>
            {props.text}
          </span>
          <div className={styles['container3']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
            </svg>
            <span
              className={` ${styles['text2']} ${projectStyles['text-x-s']} `}
            >
              {props.likes}
            </span>
            <span
              className={` ${styles['text3']} ${projectStyles['text-x-s']} `}
            >
              likes
            </span>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
            </svg>
            <span
              className={` ${styles['text4']} ${projectStyles['text-x-s']} `}
            >
              {props.shares}
            </span>
            <span
              className={` ${styles['text5']} ${projectStyles['text-x-s']} `}
            >
              shares
            </span>
          </div>
        </div>
      </div>
      <div className={styles['divider']}></div>
    </div>
  )
}

PostReaction.defaultProps = {
  image_src: '/playground_assets/team4-200h.png',
  name: 'John Snow',
  image_alt: 'image',
  likes: '10',
  text: 'You have the opportunity to play this game of life you need to appreciate every moment.',
  shares: '2',
}

PostReaction.propTypes = {
  image_src: PropTypes.string,
  name: PropTypes.string,
  image_alt: PropTypes.string,
  likes: PropTypes.string,
  text: PropTypes.string,
  shares: PropTypes.string,
}

export default PostReaction
