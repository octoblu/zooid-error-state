import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Button from 'zooid-button'

import styles from './styles.css'

const PrimaryAction = ({text, onClick}) => {
  if (!text || !onClick) return null

  return <Button kind="primary" onClick={onClick}>{text}</Button>
}

const ErrorState = ({ buttonText, className, description, onClick, title }) => {
  return <div className={classNames(styles.wrapper, className)}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    <PrimaryAction text={buttonText} onClick={onClick}/>
  </div>
}

ErrorState.defaultProps = {
  description: '',
  title: 'OOPS'
}

ErrorState.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default ErrorState
