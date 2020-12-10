import React from 'react'

export const renderField = ({
    input,
    label,
    type,
    value,
    name,
    meta: { touched, error, warning },
}) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div>
            <input
                {...input}
                placeholder={label}
                type={type}
                name={name}
                className="form-control"
            />
            {touched &&
                ((error && <span className="errors">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required field'
    }

    return errors
}
