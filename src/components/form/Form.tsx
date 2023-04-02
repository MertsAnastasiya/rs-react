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

  // const handleClickFile = (): void => {
  //   // inputFileRef.current!.click();
  // };

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();

    const isShow = false;
    // isShow = isEmpty(inputCityRef.current!.value) && inputCityRef.current!.value !== 'select';
    // isShow = isEmpty(inputStreetRef.current!.value);
    // isShow = isEmpty(inputAvailabilityRef.current!.value);
    // isShow = isEmpty(inputFileRef.current!.value);
    // isShow = isEmpty(inputPriceRef.current!.value) && isNumber(inputPriceRef.current!.value);

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
    //   inputStreetRef.current!.value = '';
    //   inputCityRef.current!.value = 'select';
    //   inputAvailabilityRef.current!.value = '';
    //   inputPriceRef.current!.value = '';
    //   inputFileLabelRef.current!.textContent = 'Load photo...';
    //   checkboxParkingRef.current!.checked = false;
    //   checkboxBalconyRef.current!.checked = false;
    //   checkboxTerraceRef.current!.checked = false;
    //   radioOneRoomRef.current!.checked = false;
    // }
  };

  return (
    <Fragment>
      <div className="main main__container">
        <div className="container">
          <h1 className="h1">Form</h1>
          <div className="wrapper__form-card">
            <form onSubmit={onSubmitForm} className="form">
              <FieldSelect label="Select a city" data={CITIES} name="city" register={register} />

              <FieldInput
                type="text"
                id="street"
                label="Street:"
                classNames={['input', 'input_text']}
                {...register('street', {
                  required: true,
                  minLength: 4,
                })}
              />
              {errors.street && errors.street.type === 'required' && (
                <p className="error-message">Street is required.</p>
              )}
              {errors.street && errors.street.type === 'minLength' && (
                <p className="error-message">Street should be at least 4 characters.</p>
              )}

              <FieldInput
                type="date"
                id="date"
                label="Available date:"
                classNames={['input', 'input_date']}
                {...register('availableDate', {
                  required: true,
                })}
              />
              {errors.availableDate && errors.availableDate.type === 'required' && (
                <p className="error-message">Available date is required.</p>
              )}

              {/* <FormItem title="Additional options">
                <div className="checkboxes__wrapper">
                  {CHECKBOX_PROPERTIES.map((property, index) => {
                    return (
                      <FieldCheckbox
                        key={property.label}
                        ref={checkboxRefs[index]}
                        classNames={['label']}
                        label={property.label}
                        onChange={handleChangeInput}
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
                        ref={roomsRef[0]}
                        onChange={handleChangeInput}
                        name="rooms"
                      />
                    );
                  })}
                </div>
                </FormItem>*/}

              <FieldInput
                type="text"
                id="price"
                label="Price:"
                classNames={['input', 'input_text']}
                {...register('price', {
                  required: true,
                })}
              />
              {errors.price && errors.price.type === 'required' && (
                <p className="error-message">Price is required.</p>
              )}

              {/*<FieldFile
                refLabel={inputFileLabelRef}
                refFile={inputFileRef}
                onClick={handleClickFile}
                onChange={handleChangeInput}
                />*/}
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
