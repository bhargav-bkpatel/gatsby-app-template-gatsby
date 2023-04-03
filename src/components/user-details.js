import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './user-details.module.css'

const UserDetails = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={` ${styles['text']} ${projectStyles['text-s-m']} `}>
          {props.name}
        </span>
        <div className={styles['container2']}>
          <span className={` ${styles['text1']} ${projectStyles['text-x-s']} `}>
            Published
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={` ${styles['text2']} ${projectStyles['text-x-s']} `}>
            {props.time}
          </span>
          <span className={` ${styles['text3']} ${projectStyles['text-x-s']} `}>
            ago
          </span>
        </div>
      </div>
    </div>
  )
}

UserDetails.defaultProps = {
  image_src: '/playground_assets/team4-200h.png',
  name: 'Laura Hanks',
  time: '3 days',
  image_alt: 'image',
}

UserDetails.propTypes = {
  image_src: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
}

export default UserDetails
