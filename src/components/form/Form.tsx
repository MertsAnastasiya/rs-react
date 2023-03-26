import React from 'react';
import { Component, Fragment } from 'react';
import './Form.scss';

type FormState = {
  streetText: string;
  cityText: string;
  avalableDate: string;
  price: number;
  file: string;
  parking: boolean;
  balcony: boolean;
  terrace: boolean;
  // rooms: string;
};

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
    // rooms: '',
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
  private imageRef: React.RefObject<HTMLDivElement> = React.createRef();
  // private inputRoomsRef: React.RefObject<HTMLInputElement> = React.createRef();
  // private inputMaleRef: React.RefObject<HTMLInputElement> = React.createRef();

  private handleChangeInput = (event: React.ChangeEvent): void => {
    if (event.target.classList.value.includes('input_file')) {
      this.inputFileLabelRef.current!.textContent = this.inputFileRef.current!.files
        ? this.inputFileRef.current!.files[0]!.name
        : '';
        const src: string = URL.createObjectURL(this.inputFileRef.current!.files![0]);
        this.imageRef.current!.style.backgroundImage = src.replace('blob:', '');
    }

    this.setState({
      streetText: this.inputStreetRef.current!.value,
      cityText: this.inputCityRef.current!.value,
      avalableDate: this.inputAvailabilityRef.current!.value,
      price: Number(this.inputPriceRef.current!.value),
      file: this.inputFileLabelRef.current!.textContent || '',
      parking: this.checkboxParkingRef.current!.checked,
      balcony: this.checkboxBalconyRef.current!.checked,
      terrace: this.checkboxTerraceRef.current!.checked,
      // rooms: this.inputRoomsRef.current!.value,
    });
    console.log(this.state);
  };

  private handleClickFile = (): void => {
    this.inputFileRef.current!.click();
  };

  private handleClickSubmit(event: React.MouseEvent): void {
    console.log('submit');
    event.preventDefault();
  }

  public render(): JSX.Element {
    const { streetText, cityText, avalableDate, price, file } = this.state;
    console.log(`${streetText} - ${cityText} - ${avalableDate} - ${price} - ${file}`);

    return (
      <Fragment>
        <div className="main main__container">
          <h1 className="h1">Form</h1>
          <form className="form">
            <label htmlFor="street" className="label">
              Street:
            </label>
            <input
              id="street"
              ref={this.inputStreetRef}
              type="text"
              name="street"
              className="input input_text"
              onChange={this.handleChangeInput}
            />

            {/* <label className="label">City:
              <input
                ref={this.inputCityRef}
                type="text"
                name="address"
                className="input input_text"
                onChange={this.handleChangeInput}
              />
            </label> */}

            <label htmlFor="date" className="label">
              Available date:
            </label>
            <input
              id="date"
              ref={this.inputAvailabilityRef}
              type="date"
              name="date"
              className="input input_date"
              onChange={this.handleChangeInput}
            />

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

            <div className="form__item">
              <p className="label">Additional options:</p>
              <div id="options" className="checkboxes__wrapper">
                <label className="label">
                  <input ref={this.checkboxBalconyRef} type="checkbox" name="balcony" onChange={this.handleChangeInput} />
                  Balcony
                </label>
                <label className="label">
                  <input ref={this.checkboxTerraceRef} type="checkbox" name="terrace" onChange={this.handleChangeInput} />
                  Terrace
                </label>
                <label className="label">
                  <input ref={this.checkboxParkingRef} type="checkbox" name="parking" onChange={this.handleChangeInput} />
                  Parking
                </label>
              </div>
            </div>

            {/* <label className="label">Sex:</label> */}
            {/* <div className="radio__wrapper">
              <label className="label_radio">
                <input
                  ref={this.inputMaleRef}
                  id="male"
                  type="radio"
                  name="sex"
                  value="male"
                  checked={true}
                  className="input input_radio"
                  onChange={this.handleChangeInput}
                />
                Male
              </label>
              <label className="label_radio">
                <input
                  ref={this.inputRoomsRef}
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                  className="input input_radio"
                  onChange={this.handleChangeInput}
                />
                Female
              </label>
            </div> */}
            <label htmlFor="price" className="label">
              Price:
            </label>
            <input
              id="price"
              ref={this.inputPriceRef}
              type="text"
              name="name"
              className="input input_text"
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
            <div ref={this.imageRef} className="image"></div>
            <button onClick={this.handleClickSubmit} className="button">Submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}
