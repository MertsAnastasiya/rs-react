import { Component, Fragment } from 'react';
import { Seacrh } from './input/Input';
import { createClassList } from '../utils';
import { Card } from './cards/Card';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="h1">Home</h1>
                <Seacrh
                    id="search"
                    classes={createClassList(['input', 'input_search'])}
                    placeholder="Search"
                />
                <Card />
            </Fragment>
        );
    }
}
