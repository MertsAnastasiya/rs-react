import { Component } from 'react';
import { InputProps, InputState } from 'types';
import './Input.scss';

export class Seacrh extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  private handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      this.setState({
        searchValue: target.value,
      });
      localStorage.setItem('searchValue', this.state.searchValue);
      console.log('You pushed Enter');
    }
  };

  public render(): JSX.Element {
    const { id, classes, placeholder } = this.props;
    return (
      <input
        type="text"
        name={id}
        className={classes}
        placeholder={placeholder}
        onKeyUp={this.handleKeyUp}
      />
    );
  }
}
