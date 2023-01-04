import React from "react";

const Item = ({ children, checked, handleCheck }) => (
    <div>
        <input
            id={children.id}
            type="checkbox"
            defaultChecked={checked}
            onChange={e => handleCheck(children)}
        />
        <label htmlFor={children.id}>{children.text}</label>
    </div>
)

export default Item