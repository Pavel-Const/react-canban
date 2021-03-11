import React from "react";
import './CardPopup.css'

export default class Start extends React.Component {
    render() {
        console.log(this.props.authorName)
        return (
            <div className={'CardPopup'}>
                <div className={'CardPopup-body'}>
                    <h2>{this.props.title}</h2>
                    <input
                        className={'CardPopup-input'}
                        type="text"
                        value={this.props.nameCard}
                        onChange={this.props.changeNameCard}
                    />

                    {this.props.descriptionVision ?
                        <textarea
                            className={'CardPopup-description'}
                            value={this.props.description}
                            type="text"
                            onChange={this.props.changeDescription}
                        />
                        : <button onClick={this.props.addDescription}>Add description</button>}
                    <button className={'CardPopup-close'} onClick={this.props.closePopup}>Close</button>
                    <button className={'CardPopup-delete'} onClick={this.props.deleteCard}>Delete</button>
                    <button onClick={this.props.addComent}>Add comment</button>
                    <h3 className={'CardPopup-authorName'}>by {this.props.authorName}</h3>
                </div>
            </div>
        )
    }

}