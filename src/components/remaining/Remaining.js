import React from "react";
import { checkBudget } from '../../helper/helper'

function Remaining({ remaining, budget }) {
     budget = budget;
     remaining = remaining;

    return ( 
        <div className={checkBudget(budget, remaining)}>
            Restante: $ {remaining}
        </div>
    )
}

export default Remaining;