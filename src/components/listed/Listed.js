import React from "react";

function Listed( { cost }) {
    const { nameSpend, amountSpend } = cost
    return (
        <li style={{
            listStyleType: 'none',
          }}>
            <p className="fs-4" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    
                    borderRadius: '5px',
                    color: '565264'
                    
                }}>
                {nameSpend}:
                <span style={{
                    backgroundColor: '#565264',
                    color: 'white'
                }}> $ {amountSpend} </span>
            </p>
        </li>
    )
}

export default Listed;