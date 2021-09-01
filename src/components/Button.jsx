import classNames from 'classnames'
import React from "react";


export const Button = ({className, onclick, outline, children}) => {
    return (

        <button
            onClick={onclick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    )
}