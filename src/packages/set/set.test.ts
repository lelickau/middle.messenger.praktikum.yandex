import { expect } from 'chai'

import { set } from './set'

type Index<T = any> = {
  [key in string]: T
}

describe('set helper', () => {
  let obj = {}
  const path = 'a.b'
  const value = 3

  beforeEach(() => {
    obj = {}
  })

  it('Should set value by keypath', () => {
    const result = set(obj, path, value) as Index

    expect(result.a.b).to.eq(value)
  })

  it('Should return "object" value, if passed parameter is not an object', () => {
    obj = 4
    const result = set(obj, path, value) as Index

    expect(result).to.eq(obj)
  })

  it('Should throw error if path is not string', () => {
    const numberPath = 5

    // @ts-ignore
    const func = () => set(obj, numberPath, value) as Index

    expect(func).to.throw(Error)
  })

  it('Should mutate passed object, not create new one', () => {
    const result = set(obj, path, value) as Index

    expect(result).to.eq(obj)
  })
})
