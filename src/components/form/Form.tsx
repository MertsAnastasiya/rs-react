import React from 'react';
import { Component, Fragment } from 'react';
import './Form.scss';
import { FieldInput } from './FieldInput';
import { FieldCheckbox } from './FieldCheckbox';
import { FieldRadio } from './FieldRadio';
import { FormState } from 'types';
import { Card } from '../cards/Card';

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
    rooms: '',
  };

  private formRef: React.RefObject<HTMLFormElement> = React.createRef();
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
      rooms: this.radioOneRoomRef.current!.id || '',
    });
  };

  private handleClickFile = (): void => {
    this.inputFileRef.current!.click();
  };

  private handleClickSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();
    console.log('submit');
    console.log(this.state);

    console.log(
      <Card
        key={5}
        street={this.state.streetText}
        price={this.state.price}
        city={this.state.cityText}
        thumbnail={''}
        living={90}
        rooms={Number(this.state.rooms)}
      />
    );
  };

  public render(): JSX.Element {
    return (
      <Fragment>
        <div className="main main__container">
          <h1 className="h1">Form</h1>
          <form ref={this.formRef} className="form">
            <label htmlFor="city" className="label">
              Choose a city:
            </label>
            <select
              id="city"
              ref={this.inputCityRef}
              className="select"
              name="selectedCity"
              onChange={this.handleChangeInput}
            >
              <option value="hague">The Hague</option>
              <option value="amsterdam">Amsterdam</option>
              <option value="rotterdam">Rotterdam</option>
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
                  id="one-rooms"
                  name="rooms"
                  label="1"
                  onChange={this.handleChangeInput}
                />
                <FieldRadio
                  ref={this.radioTwoRoomRef}
                  id="two-rooms"
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
        </div>
      </Fragment>
    );
  }
}
