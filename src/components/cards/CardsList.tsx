import { IProduct } from 'types';
import { Card } from './Card';
import './Card.scss';

type CardsListProps = {
  productResult: IProduct[];
};

export const CardsList = (props: CardsListProps): JSX.Element => {
  return (
    <div className="card-list">
      {props.productResult.map((item) => {
        const { id, street, city, price, thumbnail, living, rooms } = item;
        return (
          <Card
            key={id}
            classes={['card']}
            street={street}
            price={price}
            city={city}
            thumbnail={thumbnail}
            living={living}
            rooms={rooms}
          />
        );
      })}
    </div>
  );
};
