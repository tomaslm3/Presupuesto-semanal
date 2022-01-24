import React from "react";

function Budget({ budget }) {
    return ( 
        <div className="alert alert-primary">
            Presupuesto semanal: $ {budget}
        </div>
    )
}

export default Budget;