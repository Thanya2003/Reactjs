import Lis  from './list.jsx';
function App() {
  const fruits=[{id: 1, name:"apple", calories: 95},
    {id: 2, name:"coconut", calories: 45},
    {id: 3, name:"banana",calories: 105} ,
    {id: 4, name:"pineapple", calories: 155}];

    const veg=[{id: 1, name:"potatoes", calories: 115},
            {id: 2, name:"tomato", calories: 25},
             {id: 3, name:"carrot",calories: 15} ,
             {id: 4, name:"spinch", calories: 65}];
  return(<>
  {fruits.length>0? <Lis items= {fruits} category="Fruits"/>: null}
  {veg.length>0? <Lis items= {veg} category="Vegetables"/>: null}
  </>)
}

export default App
