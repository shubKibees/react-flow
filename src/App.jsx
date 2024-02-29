import './App.css'
import { createContext, useContext,useReducer } from 'react'
import Layout from './component/Layout'
import NavBar from './component/NavBar'

const initialNodes = [
  { id: '4', type:'RelationNodeDot',position: { x: 50, y: 200 }, data: { label: '4' } },
  { id: '5', type:'RelationNodeDot',position: { x: 100, y: 300 }, data: { label: '6' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


const formDataContext=createContext(null);
const formDataDispatchContext=createContext(null);
export function useFormData() {
  return useContext(formDataContext);
}
export function useFormDataDispatch() {
  return useContext(formDataDispatchContext);
};

function createNewNode(nodeType = "RelationNodeDot") {
  const randomValue = (Math.random() * 100).toString();
  return {
    id: randomValue,
    type: nodeType,
    data: { label: randomValue },
    label:randomValue
  };
}

function formDataReducer(state, action) {
  switch (action.type) {
    case 'addNode':
      return {
        ...state,
        initialNodes: state.initialNodes.concat(createNewNode(action.node.type)),
      };
    default:
      throw new Error();
  }
}

function App() {
  const initialState = { initialEdges, initialNodes };
  const [formData, formDataDispatch] = useReducer(formDataReducer, initialState);

  return (
    <>
      <NavBar />
      <formDataContext.Provider value={formData}>
        <formDataDispatchContext.Provider value={formDataDispatch}>
          <Layout />
        </formDataDispatchContext.Provider>
      </formDataContext.Provider>
    </>
  );
}

export default App;
