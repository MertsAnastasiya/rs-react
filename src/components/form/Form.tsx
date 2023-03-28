import React, { Component, Fragment } from 'react';
import { FieldInput } from './FieldInput';
import { FieldCheckbox } from './FieldCheckbox';
import { FieldRadio } from './FieldRadio';
import { FormState } from 'types';
import { Card } from '../cards/Card';
import './Form.scss';
import { isEmpty, isNumber } from '../../utils';
import { cities } from '../../data';

export class Form extends Component<Record<string, never>, FormState> {
  public state: FormState = {
    streetText: '',
    cityText: '',
    avalableDate: '',
    price: 0,
    file: '',
    parking: false,
    balcony: false,
    terrace: false,
    rooms: 0,
    card: <div></div>,
  };

  private inputStreetRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputFileRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputFileLabelRef: React.RefObject<HTMLLabelElement> = React.createRef();
  private inputCityRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private inputPriceRef: React.RefObject<HTMLInputElement> = React.createRef();
  private inputAvailabilityRef: React.RefObject<HTMLInputElement> = React.createRef();
  private checkboxBalconyRef: React.RefObject<HTMLInputElement> = React.createRef();
  private checkboxParkingRef: React.RefObject<HTMLInputElement> = React.createRef();
  private checkboxTerraceRef: React.RefObject<HTMLInputElement> = React.createRef();
  private radioOneRoomRef: React.RefObject<HTMLInputElement> = React.createRef();
  private radioTwoRoomRef: React.RefObject<HTMLInputElement> = React.createRef();
  private radioThreeRoomRef: React.RefObject<HTMLInputElement> = React.createRef();
  private radioFourRoomRef: React.RefObject<HTMLInputElement> = React.createRef();
  private radioRoomRef: React.RefObject<HTMLInputElement> = React.createRef();

  private handleChangeInput = (event: React.ChangeEvent): void => {
    if (event.target.classList.value.includes('input_file')) {
      this.inputFileLabelRef.current!.textContent = this.inputFileRef.current!.files
        ? this.inputFileRef.current!.files[0]!.name
        : '';
    }

    //TODO RadioButton

    this.setState({
      streetText: this.inputStreetRef.current!.value,
      cityText: this.inputCityRef.current!.value,
      avalableDate: this.inputAvailabilityRef.current!.value,
      price: Number(this.inputPriceRef.current!.value),
      file: this.inputFileLabelRef.current!.textContent || '',
      parking: this.checkboxParkingRef.current!.checked,
      balcony: this.checkboxBalconyRef.current!.checked,
      terrace: this.checkboxTerraceRef.current!.checked,
      rooms: Number(this.radioOneRoomRef.current!.id[0]) || 0,
    });
  };

  private handleClickFile = (): void => {
    this.inputFileRef.current!.click();
  };

  private handleClickSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    let isShow = false;
    isShow =
      isEmpty(this.inputCityRef.current!.value) && this.inputCityRef.current!.value !== 'select';
    isShow = isEmpty(this.inputStreetRef.current!.value);
    isShow = isEmpty(this.inputAvailabilityRef.current!.value);
    isShow = isEmpty(this.inputFileRef.current!.value);
    isShow =
      isEmpty(this.inputPriceRef.current!.value) && isNumber(this.inputPriceRef.current!.value);

    if (isShow) {
      this.setState({
        card: (
          <Card
            key={5}
            classes={['card', 'card_big']}
            street={this.state.streetText}
            price={this.state.price}
            city={this.state.cityText}
            thumbnail={''}
            living={90}
            rooms={Number(this.state.rooms)}
          />
        ),
      });
      this.inputStreetRef.current!.value = '';
      this.inputCityRef.current!.value = 'select';
      this.inputAvailabilityRef.current!.value = '';
      this.inputPriceRef.current!.value = '';
      this.inputFileLabelRef.current!.textContent = 'Load photo...';
      this.checkboxParkingRef.current!.checked = false;
      this.checkboxBalconyRef.current!.checked = false;
      this.checkboxTerraceRef.current!.checked = false;
      this.radioOneRoomRef.current!.checked = false;
    }
  };

  private getCities = (cities: string[]): JSX.Element[] => {
    return cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ));
  };

  public render() {
    return (
      <Fragment>
        <div className="main main__container">
          <div className="container">
            <h1 className="h1">Form</h1>
            <div className="wrapper__form-card">
              <form className="form">
                <label htmlFor="city" className="label">
                  Choose a city:
                </label>
                <select
                  id="city"
                  ref={this.inputCityRef}
                  className="input input_select"
                  name="selectedCity"
                  defaultValue={'select'}
                  onChange={this.handleChangeInput}
                >
                  <option value="select" disabled>
                    -- Select the city --
                  </option>
                  {this.getCities(cities)}
                </select>

                <FieldInput
                  type="text"
                  id="street"
                  ref={this.inputStreetRef}
                  label="Street:"
                  classNames={['input', 'input_text']}
                  onChange={this.handleChangeInput}
                />

                <FieldInput
                  type="date"
                  id="date"
                  ref={this.inputAvailabilityRef}
                  label="Available date:"
                  classNames={['input', 'input_date']}
                  onChange={this.handleChangeInput}
                />
                <div className="form__item">
                  <p className="label">Additional options:</p>
                  <div className="checkboxes__wrapper">
                    <FieldCheckbox
                      ref={this.checkboxBalconyRef}
                      classNames={['label']}
                      label="balcony"
                      onChange={this.handleChangeInput}
                    />
                    <FieldCheckbox
                      ref={this.checkboxTerraceRef}
                      classNames={['label']}
                      label="terrace"
                      onChange={this.handleChangeInput}
                    />
                    <FieldCheckbox
                      ref={this.checkboxParkingRef}
                      classNames={['label']}
                      label="parking"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                </div>

                <div className="form__item">
                  <p>Rooms:</p>
                  <div className="radio__wrapper">
                    <FieldRadio
                      ref={this.radioOneRoomRef}
                      id="1-rooms"
                      name="rooms"
                      label="1"
                      onChange={this.handleChangeInput}
                    />
                    <FieldRadio
                      ref={this.radioTwoRoomRef}
                      id="2-rooms"
                      name="rooms"
                      label="2"
                      onChange={this.handleChangeInput}
                    />
                    <FieldRadio
                      ref={this.radioThreeRoomRef}
                      id="three-rooms"
                      name="rooms"
                      label="3"
                      onChange={this.handleChangeInput}
                    />
                    <FieldRadio
                      ref={this.radioFourRoomRef}
                      id="four-rooms"
                      name="rooms"
                      label="4"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                </div>

                <FieldInput
                  type="text"
                  id="price"
                  ref={this.inputPriceRef}
                  label="Price:"
                  classNames={['input', 'input_text']}
                  onChange={this.handleChangeInput}
                />

                <label
                  ref={this.inputFileLabelRef}
                  htmlFor="image"
                  className="label label_file"
                  onClick={this.handleClickFile}
                >
                  Load photos...
                </label>
                <input
                  ref={this.inputFileRef}
                  type="file"
                  className="input input_file"
                  onChange={this.handleChangeInput}
                />
                <button onClick={this.handleClickSubmit} className="button">
                  Submit
                </button>
              </form>
              {this.state.card !== <div></div> && this.state.card}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
