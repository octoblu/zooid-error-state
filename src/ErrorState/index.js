import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Button from 'zooid-button'

import styles from './styles.css'

const PrimaryAction = ({text, href, onClick, kind}) => {
  if (!text) return null
  if (!href && !onClick) return null
  kind = kind || 'primary'

  return <Button kind={kind} href={href} onClick={onClick}>{text}</Button>
}

const ErrorState = ({ buttonKind, buttonText, className, description, href, onClick, title }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <PrimaryAction kind={buttonKind} text={buttonText} onClick={onClick} href={href} />
    </div>
  )
}

ErrorState.defaultProps = {
  description: '',
  title: 'OOPS',
}

ErrorState.propTypes = {
  buttonKind: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default ErrorState
