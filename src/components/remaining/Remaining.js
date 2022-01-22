import React from "react";

function Remaining({ remaining }) {
    return ( 
        <div className="alert alert-success">
            Remaining: $ {remaining}
        </div>
    )
}

export default Remaining;