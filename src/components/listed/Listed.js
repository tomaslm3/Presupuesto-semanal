import React from "react";

function Listed( { cost }) {
    const { nameSpend, amountSpend } = cost
    return (
        <li>
            <p>
                {nameSpend}
                <span> $ {amountSpend} </span>
            </p>
        </li>
    )
}

export default Listed;