import reducerEcho from '../src/reducer-echo';

describe('echo reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducerEcho(undefined, {})
    ).toEqual(
      'initail state'
    );
  });

  it('should handle DO_ECHO', () => {
    expect(
      reducerEcho([], {
        type: 'DO_ECHO',
        val: 'Run the tests'
      })
    ).toEqual(
      'Run the tests'
    );
  });
});
