import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './index.css'

const ErrorState = ({ className, description, title }) => {
  return <div className={classNames(styles.wrapper, className)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
}

ErrorState.defaultProps = {
  description: '',
  title: 'OOPS'
}

ErrorState.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default ErrorState
