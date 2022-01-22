import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import FormSpend from '../../components/form/Form'
import List from "../../components/list/List";
import { validateBudget } from '../../helper/helper'
import ControlBudget from "../../components/controlBudget/ControlBudget";
function App() {
  const [costs, setCosts] = useState({
    budget: '',
    remaining: '',
    cost: {}
  });

  useEffect(() => {
    getBudget();
  }, []) 

  const getBudget = () => {
    let budget = prompt('How much is your budget?')
    
    let result = validateBudget(budget)
    if(result) {
      setCosts({
        ...costs,
        budget: budget,
        remaining: budget
      })
    } else {
      getBudget();
    }
  }

  const addSpend = (spend) => {
    const cost = {...costs.cost};
    cost[`gasto${Date.now()}`] = spend;
    setCosts({
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
              <List 
                cost = {costs.cost}
              />
              <ControlBudget
                budget = {costs.budget}
                remaining = {costs.remaining}
              />
            </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
