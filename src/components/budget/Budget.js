import React from "react";

function Budget({ budget }) {
    return ( 
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
    )
}

export default Budget;