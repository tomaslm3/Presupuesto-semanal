import React, { useState } from "react";

function FormSpends({ addSpend }) {
    const [values, setValues] = useState({
        nameSpend: '',
        amountSpend: ''
    });

    const handleChange = (e) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSpend(values)
    }

    return(
        <form onSubmit={handleSubmit}>

        <h2>Agrega tus gastos aqui</h2>
        
        <div className="mb-3">
            <label htmlFor="Name Spend" className="form-label">Nombre Gasto</label>
            <input type="text" className="form-control" name="nameSpend" value={values.nameSpend} onChange={handleChange} placeholder="Ej: Transporte"/>
        </div>
        <div className="mb-3">
            < label htmlFor="Spend" className="form-label">Cantidad</label>
            < input type='text' className="form-control" name="amountSpend" value={values.amountSpend} onChange={handleChange} placeholder="Ej: 300"></input>
        </div>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">Agregar</button>
        </div>
        </form>
    )
}

export default FormSpends;