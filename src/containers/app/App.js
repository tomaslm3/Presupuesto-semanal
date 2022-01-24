import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import FormSpend from '../../components/form/Form'
import List from "../../components/list/List";
import { validateBudget } from '../../helper/helper'
import ControlBudget from "../../components/controlBudget/ControlBudget";
import background from '../../img/background.jpg'


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
    let budget = prompt('Cuanto es tu presupuesto?')
    
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
    const cost = costs.cost
    cost[`gasto${Date.now()}`] = spend;
    setCosts({
      ...costs,
      cost
    })
    substractBudget(spend.amountSpend)
  }

  const substractBudget = (amount) => {
    let substract = Number(amount)
    let remaining = costs.remaining;
    remaining = remaining - substract;
    setCosts({
      ...costs,
      remaining
    })
    console.log(remaining)

  }

  return (
    <div className="container-fluid" style={{
       backgroundImage: `url(${background})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       backgroundAttachment: 'fixed',
        height: '100vh',
        filter: 'contrast(1)',
        position: 'absolute'

    }}>
      <div className="container align-items-center" style={{
        width: '800px',
        backgroundColor: 'rgb(166 156 150 / 78%)',
        padding: '30px',
        marginTop: '60px',
        borderRadius: '30px',
        boxShadow: '10px 10px 5px rgba(6, 1, 1, 0.43)',
        color: 'rgb(53 53 53)'
      }}>
          <div className="row text-center ">
            <div style={{paddingBottom: '10px',}}>
              <Header 
                titulo='Gasto Semanal'
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <FormSpend 
                addSpend={addSpend}
              />
            </div>
            <div className="col-6">
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
