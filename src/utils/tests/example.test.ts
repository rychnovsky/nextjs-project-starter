import { exampleFunction } from '../example'

describe('Example utils', () => {
  it('example function should always return true', async () => {
    // arrange

    // act
    const res = exampleFunction()

    // assert
    expect(res).toEqual(true)
  })
})
