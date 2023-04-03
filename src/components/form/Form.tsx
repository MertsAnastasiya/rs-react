import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { FieldInput } from './FieldInput';
import { FieldCheckbox } from './FieldCheckbox';
import { FieldRadio } from './FieldRadio';
import { FormState } from 'types';
import { Card } from '../cards/Card';
import './Form.scss';
import { isEmpty, isNumber } from '../../utils';
import { CITIES } from '../../data';
import { FormItem } from './FormItem';
import { FieldFile } from './FieldFile';
import { FieldSelect } from './FieldSelect';
import { CHECKBOX_PROPERTIES, RADIO_PROPERTIES } from '../../constants';
import { checkServerIdentity } from 'tls';

type FormData = {
  city: string;
  street: string;
  availableDate: string;
  price: number;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();

    const isShow = false;

    // if (isShow) {
    //   setCard(
    //     <Card
    //       key={5}
    //       classes={['card', 'card_big']}
    //       street={street}
    //       price={price}
    //       city={city}
    //       thumbnail={''}
    //       living={90}
    //       rooms={Number(rooms)}
    //     />
    //   );
  };

  const handleLoadClick = (): void => {
    console.log('load');
  };

  return (
    <Fragment>
      <div className="main main__container">
        <div className="container">
          <h1 className="h1">Form</h1>
          <div className="wrapper__form-card">
            <form onSubmit={onSubmitForm} className="form">
              <FieldSelect
                label="Select a city"
                data={CITIES}
                name="city"
                register={register}
                errors={errors}
              />

              <FieldInput
                type="text"
                id="street"
                label="Street:"
                classNames={['input', 'input_text']}
                register={register}
                errors={errors}
              />

              <FieldInput
                type="date"
                id="date"
                label="Available date:"
                classNames={['input', 'input_date']}
                register={register}
                errors={errors}
              />

              <FormItem title="Additional options">
                <div className="checkboxes__wrapper">
                  {CHECKBOX_PROPERTIES.map((property, index) => {
                    return (
                      <FieldCheckbox
                        key={property.label}
                        classNames={['label']}
                        label={property.label}
                        register={register}
                      />
                    );
                  })}
                </div>
              </FormItem>
              <FormItem title="Rooms">
                <div className="radio__wrapper">
                  {RADIO_PROPERTIES.map((property) => {
                    return (
                      <FieldRadio
                        key={property.id}
                        id={property.id}
                        label={property.label}
                        name="rooms"
                        register={register}
                        errors={errors}
                      />
                    );
                  })}
                </div>
              </FormItem>

              <FieldInput
                type="text"
                id="price"
                label="Price:"
                classNames={['input', 'input_text']}
                register={register}
                errors={errors}
              />

              <FieldFile register={register} errors={errors} onClick={handleLoadClick} />
              <button type="submit" className="button">
                Submit
              </button>
            </form>
            {/* {card !== undefined && card} */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
