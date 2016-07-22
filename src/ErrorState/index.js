import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const ErrorState = ({ className, description, title }) => {
  return <div className={classNames(styles.wrapper, className)}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
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
