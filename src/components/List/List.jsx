import React from "react";
import Button from "../Button/Button";
import Item from "../Item/Item";

const list = [{
    id: 1,
    text: 'Написать программу',
    checked: false
},
{
    id: 2,
    text: 'Создать кнопку',
    checked: false
}, {
    id: 3,
    text: 'Выполнить удаление из списка',
    checked: false
}]

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { elements: [] }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.setState({ elements: list })
    }

    handleCheck = ({ text, checked, id }) => {
        const time = new Date();
        alert(`Вы изменили задачу "${text}"  ${time.toLocaleTimeString()}`)

        const elems = this.state.elements.map(item =>
            item.id === id ? { ...item, checked: !checked } : item,
        );

        this.setState({ elements: elems })
    };

    handleClick() {
        let count = 0
        this.state.elements.forEach(item => item.checked && count++)
        alert(`Выполненые задачи: ${count}`)
    }

    render() {
        const { elements } = this.state
        return <>
            <div>
                {elements.map((item) => (
                    <Item key={item.id} handleCheck={this.handleCheck}>
                        {item}
                    </Item>
                ))}
                <Button handleClick={this.handleClick}/>
            </div>
        </>
    }
}