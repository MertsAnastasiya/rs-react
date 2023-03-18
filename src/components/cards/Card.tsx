import { Component } from 'react';
import './Card.scss';

export class Card extends Component {
  public render(): JSX.Element {
    return (
      <div className="card">
        <img className="card__image"></img>
        <p className="card__title">Title</p>
        <p className="card__price">$536</p>
        <p className="card__like"></p>
        <p className="card__like liked"></p>
      </div>
    );
  }
}
