import { Component } from 'react';
import './Card.scss';

export class Card extends Component {
    render() {
        return (
        <div className="card">
            <image className="card__image"></image>
            <p className="card__title">Title</p>
            <p className="card__price">$536</p>
            <p className="card__like"></p>
            <p className="card__like liked"></p>
        </div>);
    }
}
