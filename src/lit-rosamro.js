import { render } from 'lit-html'
import rosmaro from 'rosmaro'
import makeStorage from 'rosmaro-in-memory-storage';
import makeLock from 'rosmaro-process-wide-lock';

const litRosmaro = ({
  graph,
  handlers,
  storage = makeStorage(),
  lock = makeLock(),
  afterTransition = () => { }
}) => {
  const model = rosmaro(Object.assign({},
    {
      graph,
      handlers,
      storage,
      lock,
      afterTransition
    },
    {
      afterTransition: () => {
        afterTransition();
        refreshView();
      }
    }));

  const refreshView = () => Promise.resolve(model.view())
    .then(view => render(view,document.body));

  refreshView()
}

export default litRosmaro;