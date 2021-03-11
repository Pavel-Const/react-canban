import './CardList.css'
import Card from "../Card/Card";

const CardList = props => {
    return(
        <div>
            {props.card.length !== 0
                ? props.card.map((item, index) => {
                    return (<Card
                        nameCard={item.nameCard}
                        qunt={item.quant}
                        authorName={item.authorName}
                        key={index}
                        index={props.index}
                        indexCard={index}
                        deleteCard={() =>props.deleteCard(props.index, index)}
                        openPopup={() =>props.openPopup(props.index, index)}
                        closePopup={() =>props.closePopup(props.index, index)}
                        addDescription={() =>props.addDescription(props.index, index)}
                        popupIsOpen={item.popupIsOpen}
                        changeNameCard={(event) => props.changeNameCard(event.target.value, props.index, index)}
                        changeDescription={(event) => props.changeDescription(event.target.value, props.index, index)}
                        title={props.title}
                        description={item.description}
                        descriptionVision={item.descriptionVision}
                    />)
                })
                : null
            }
        </div>
    )
}

export default CardList