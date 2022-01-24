import React from "react";
import Budget from "../budget/Budget";
import Remaining from "../remaining/Remaining";

function ControlBudget({ budget, remaining }) {
    return (
        <React.Fragment>
            <Budget
                budget = {budget}
            />
            <Remaining
                budget = {budget}
                remaining = {remaining}
            />
        </React.Fragment>
    )
}

export default ControlBudget;