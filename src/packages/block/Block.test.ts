import { expect } from 'chai'
import proxyquire from 'proxyquire'
import sinon from 'sinon'

import OriginalBlock from './Block'

import type BlockType from './Block'

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake()
}

describe('Block', () => {
  describe('independent methods', () => {
    const { default: Block } = proxyquire('./Block', {
      '../eventBus/EventBus': {
        default: class {
          on = eventBusMock.on
          emit = eventBusMock.emit
        }
      }
    }) as { default: typeof BlockType }

    class ComponentMock extends Block<any> {}

    it('Should fire init event on initialization', () => {
      new ComponentMock({})

      expect(eventBusMock.emit.calledWith('init')).to.eq(true)
    })

    it('Should fire component-did-mount event on dispatchComponentDidMount', () => {
      const component = new ComponentMock({})

      component.dispatchComponentDidMount()

      expect(eventBusMock.emit.calledWith('component-did-mount')).to.eq(true)
    })
  })

  describe('Dependent methods', () => {
    it('Should call render', () => {
      let isCalled = false

      class Component extends OriginalBlock<any> {
        render() {
          isCalled = true

          return new DocumentFragment()
        }
      }

      new Component({})

      expect(isCalled).to.eq(true)
    })

    it('Should call componentDidUpdate', () => {
      let isCalled = false

      class Component extends OriginalBlock<any> {
        componentDidUpdate() {
          isCalled = true

          return true
        }
      }

      const component = new Component({
        testValue: 1
      })

      component.setProps({
        testValue: 2
      })

      expect(isCalled).to.eq(true)
    })
  })
})
