import React, { useState } from "react";
import Header from "../../components/header/Header";
import FormSpend from '../../components/form/Form'
function App() {
  const [costs, setCosts] = useState({
    budget: '',
    remaining: '',
    cost: {}
  });


  const addSpend = (spend) => {
    const cost = {...costs.cost};
    cost[`gasto${Date.now()}`] = spend;
    console.log(cost)
    setCosts({
      ...costs,
      cost
    })
  }


  return (
    <div className='container-fluid bg-danger' >
      <div className="container  bg-light ">
          <div className="row justify-content-center  text-center">
            <div>
              <Header 
                titulo='Gasto Semanal'
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <FormSpend 
                addSpend={addSpend}
              />
            </div>
            <div className="col-4">
              One of two columns
            </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
