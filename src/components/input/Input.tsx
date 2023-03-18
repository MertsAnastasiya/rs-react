import { Component } from 'react';
import { InputProps, InputState } from 'types';
import './Input.scss';

export class Seacrh extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {searchValue: this.props.searchValue};
  }

  private handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      this.props.changeStateBySeacrh(target.value);
      // localStorage.setItem('searchValue', this.state.searchValue);
    }
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    this.setState({
      searchValue: target.value,
    });
    this.props.changeStateBySeacrh(target.value);
  }

  public render(): JSX.Element {
    const { id, classes, placeholder } = this.props;
    const { searchValue } = this.state;
    return (
      <input
        type="text"
        value={searchValue}
        name={id}
        className={classes}
        placeholder={placeholder}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
      />
    );
  }
}
