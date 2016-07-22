import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import ErrorState from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<ErrorState />', () => {
  describe('when no props are set', () => {
    it('should render a default error state', () => {
      const sut = shallow(<ErrorState />)

      expect(sut.find('h1')).to.have.text('OOPS')
      expect(sut.find('p')).to.be.blank()
    })
  })

  describe('when a title is provided', () => {
    it('should render the custom title', () => {
      const sut = shallow(<ErrorState title="Quantum Drive Malfunction" />)

      expect(sut.find('h1')).to.have.text('Quantum Drive Malfunction')
    })
  })

  describe('when a description is provided', () => {
    it('should render the custom description', () => {
      const sut = shallow(<ErrorState description="Oh no! This is not good at all!" />)

      expect(sut.find('p')).to.have.text('Oh no! This is not good at all!')
    })
  })

  describe('when a className is provided', () => {
    it('should add the className', () => {
      const sut = shallow(<ErrorState className="pretty-error" />)

      expect(sut).to.have.className('pretty-error')
    })
  })
})
