import React, {Component} from "react";
import './Column.css'
import CardList from "../CradList/CardList";

class Column extends Component {
    constructor(props) {
        super(props);
        this.inputRef = null;
    }
    clearInput(){
        this.inputRef.value=''
    }
    render() {
        return (
            <div className={'Column'}>
                <input
                    className={'input-title'}
                    type="text"
                    value={this.props.title}
                    onChange={this.props.changeTitle}
                />
                <input type={'text'} ref={ref => this.inputRef = ref}/>
                <button onClick={() => {
                    this.props.addNewCard(this.inputRef.value, this.props.index)
                    this.clearInput()
                }} >Add New Card
                </button>

                <CardList
                    openPopup={this.props.openPopup}
                    closePopup={this.props.closePopup}
                    card={this.props.card}
                    deleteCard={this.props.deleteCard}
                    index={this.props.index}
                    popupIsOpen={this.props.popupIsOpen}
                    changeNameCard={this.props.changeNameCard}
                    changeDescription={this.props.changeDescription}
                    title={this.props.title}
                    addDescription={this.props.addDescription}
                />
            </div>)

    }
}

export default Column