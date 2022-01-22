import React from "react";
import Listed from "../listed/Listed";

function List({ cost }) {
    return (
        <div>
            <h2>List</h2>
            {Object.keys(cost).map(key => (
                <Listed
                    key={key}
                    cost = {cost[key]}
                />
                
            ))}
            
        </div>
    )
}

export default List;