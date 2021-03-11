import React from "react";
import './Card.css'
import CardPopup from "../CardPopup/CardPopup";

const Card = props => {
    return (
        <div>
            <div className={'Card'} onClick={props.openPopup}>
                <h2> {props.nameCard}</h2>
                <p>Коментариев {props.qunt}</p>
                {/*<button onClick={props.deleteCard}>Delete</button>*/}

            </div>
            {props.popupIsOpen && (
                <CardPopup
                    popupIsOpen={props.popupIsOpen}
                    openPopup={props.openPopup}
                    closePopup={props.closePopup}
                    deleteCard={props.deleteCard}
                    indexColumn={props.index}
                    indexCard={props.indexCard}
                    nameCard={props.nameCard}
                    changeNameCard={props.changeNameCard}
                    changeDescription={props.changeDescription}
                    authorName={props.authorName}
                    title={props.title}
                    description={props.description}
                    descriptionVision={props.descriptionVision}
                    addDescription={props.addDescription}
                />)}
        </div>
    )

}


export default Card