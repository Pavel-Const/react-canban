import React, {Component} from "react";
import './Board.css'
import Column from "../Column/Column";
import Start from "../StartWindow/StartWindow";


class Board extends Component {
    constructor() {
        super();

        {
            if (JSON.parse(localStorage.getItem('board')) === null) {
                this.state = {
                    board: [
                        {
                            title: 'TODO',
                            id: 1,
                            card: [
                                {
                                    popupIsOpen: false,
                                    nameCard: 'Сделать описание карточки',
                                    quant: 6,
                                    description: 'Описание карточки',
                                    descriptionVision: true,
                                    authorName: 'chuk',
                                    comment: [
                                        {
                                            textComent: '',
                                            quantComent: 0
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            title: 'in Progress',
                            id: 2,
                            card: []
                        },
                        {
                            title: 'Testing',
                            id: 3,
                            card: []
                        },
                        {
                            title: 'Done',
                            id: 4,
                            card: []
                        }
                    ]
                }
            } else {
                this.state = JSON.parse(localStorage.getItem('board'));
            }
        }

        this.addNewCard = this.addNewCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this)
    }


    changeTitle(title, index) {
        const board = this.state.board.concat()
        board[index].title = title
        this.setState({board})
    }

    addNewCard(name, index) {
        const authName = localStorage.getItem('name')
        if (name.length !== 0) {
            const board = this.state.board.concat()

            board[index].card.push({
                nameCard: name,
                quant: 0,
                popupIsOpen: false,
                description: '',
                descriptionVision: false,
                authorName: authName,
                comment: [
                    {
                        textComent: '',
                        quantComent: 0
                    }
                ]
            })
            this.setState({board})

        } else return null
    }

    addNewComent = (text, indexColumn, indexCard) => {
        const board = this.state.board.concat()
        board[indexColumn].card[indexCard].comment.push({
            textComent: text,
            quantComent: board[indexColumn].card[indexCard].comment.length
        })
        this.setState({board})
    }

    deleteCard(index, cardIndex) {
        const board = this.state.board.concat()
        board[index].card.splice(cardIndex, 1)
        this.setState({board})
    }

    openPopup = (index, cardIndex) => {
        const board = this.state.board.concat()
        board[index].card[cardIndex].popupIsOpen = true
        this.setState({board})
    }

    closePopup = (index, cardIndex) => {
        const board = this.state.board.concat()
        board[index].card[cardIndex].popupIsOpen = false
        this.setState({board})
    }

    changeNameCard = (newName, index, cardIndex) => {
        const board = this.state.board.concat()
        board[index].card[cardIndex].nameCard = newName
        this.setState({board})
    }
    changeDescription = (description, index, cardIndex) => {
        const board = this.state.board.concat()
        board[index].card[cardIndex].description = description
        this.setState({board})
    }

    addDescription = (index, cardIndex) => {
        const board = this.state.board.concat()
        board[index].card[cardIndex].descriptionVision = true
        this.setState({board})
    }

    render() {
        localStorage.setItem('board', JSON.stringify(this.state));
        return (
            <div className={'Board'}>
                <Start/>

                {this.state.board.map((item, index) => {
                    return <Column
                        title={item.title}
                        key={index}
                        card={item.card}
                        index={index}
                        changeTitle={(event) => this.changeTitle(event.target.value, index)}
                        addNewCard={this.addNewCard}
                        openPopup={this.openPopup}
                        closePopup={this.closePopup}
                        deleteCard={this.deleteCard}
                        changeNameCard={this.changeNameCard}
                        changeDescription={this.changeDescription}
                        addDescription={this.addDescription}
                    />
                })}
            </div>
        )
    }
}


export default Board