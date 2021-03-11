import React from "react";
import './StartWindow.css'

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = null;
    }
    state = {
        // name: '',
        isOpen: true
    }


    handleFormSubmit = (name) => {
        localStorage.setItem('name', name);
        this.setState({isOpen: false})
    };

    render() {
        return (
            <React.Fragment>
                {localStorage.getItem('name') === null ?
                    this.state.isOpen && (
                            <div className={'modal'}>
                                <div className={'modal-body'}>
                                    <input type="text" placeholder={'Введите ваше имя'}
                                           ref={ref => this.inputRef = ref}/>
                                    <button onClick={() => this.handleFormSubmit(this.inputRef.value)}>Ok</button>
                                </div>
                            </div>)
                    : null
                    }
            </React.Fragment>
        )
    }
}