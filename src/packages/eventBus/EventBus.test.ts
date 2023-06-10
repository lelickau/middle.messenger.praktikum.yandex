import { expect } from 'chai'
import sinon from 'sinon'

import EventBus from './EventBus'

const callback = sinon.stub()

describe('EventBus', () => {
  beforeEach(() => {
    callback.reset()
  })

  it('Should erase event with off method', () => {
    const eventBus = new EventBus()

    eventBus.on('test event', callback)
    eventBus.off('test event', callback)
    eventBus.emit('test event')

    expect(callback.called).to.eq(false)
  })

  it('Should record event and emit it', () => {
    const eventBus = new EventBus()

    eventBus.on('test event', callback)
    eventBus.emit('test event')

    expect(callback.calledOnce).to.eq(true)
  })
})
