import { Component } from 'react';
import { CardProps } from 'types';
import { createClassList } from '../../utils';
// import '../../components/cards/Card.scss';

export class Card extends Component<CardProps, Record<string, never>> {
  public render() {
    return (
      <div className={createClassList(this.props.classes)}>
        <img className="card__image" src={this.props.thumbnail}></img>
        <p className="card__street">{this.props.street}</p>
        <p className="card__city">{this.props.city}</p>
        <p className="card__price">$ {this.props.price}</p>
        <p className="card__detail">
          <span className="card__square">{this.props.living}m2</span>
          <span className="card__rooms">{this.props.rooms} rooms</span>
        </p>
        <p className="card__like"></p>
      </div>
    );
  }
}
