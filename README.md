# Redux echo

minimal echo sample using [Redux](http://redux.js.org/).
this is not using [React](https://facebook.github.io/react/).

## how to use

1. set up.

  ```
  $ npm i
  $ npm run build
  ```
2. access to src/index.html with web browser.

## npm scripts

### build
```
$ npm run build
$ npm run build:watch
```

### test
```
$ npm test
$ npm run test:watch
```

## my notes

### actions
ref: http://redux.js.org/docs/basics/Actions.html

> Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed.


### reducers
ref: http://redux.js.org/docs/basics/Reducers.html

> Things you should never do inside a reducer:

> * Mutate its arguments;
> * Perform side effects like API calls and routing transitions;
> * Call non-pure functions, e.g. Date.now() or Math.random().

### store
ref: http://stackoverflow.com/questions/35300419/redux-do-i-have-to-import-store-in-all-my-containers-if-i-want-to-have-access-t

> In general you want to only make top-level container components ones that have access to the store
