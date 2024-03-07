import './App.css'
import NavBar from './component/NavBar';
import Layout from './component/Layout';
import { createContext, useContext,useReducer } from 'react';
import { initialNodes,initialEdges } from "./utility/tableDataDefault"

const initial_node=createContext();
const nodeDispatch=createContext();

function nodeReducer(node, action) {
  switch(action.type){
    case "add_row":{
      return{...node,initialNodes:[...node.initialNodes,action.payload]}
    }
      default:{
        return node;
      }
  }
}

export function useNode(){
  return useContext(initial_node);
}

export function useNodeDispatch(){
  return useContext(nodeDispatch);
}


function App() {
  const [node, dispatch] = useReducer(
    nodeReducer,
    {initialNodes,initialEdges}
  )
  return (
    <>
    <initial_node.Provider value={node} >
      <nodeDispatch.Provider value={dispatch} >
          <NavBar />
          <Layout />
      </nodeDispatch.Provider>
    </initial_node.Provider>
    </>
  )

}

export default App;
