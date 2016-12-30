import { createStore } from 'redux';
import actionCreaterEcho from './action-creater-echo';
import reducerEcho from './reducer-echo';

const store = createStore(reducerEcho);
const render = () => {
  document.getElementById('outputedVal').value = store.getState();
};

store.subscribe(render);

document.getElementById('echoBtn').addEventListener('click',() => {
  store.dispatch(actionCreaterEcho(
    document.getElementById('inputedVal').value
  ));
});
