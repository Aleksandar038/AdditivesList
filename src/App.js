import React, { Component } from 'react';
import CardList from './CardList.js';
import { Elist } from './Elist.js';
import SearchBox from './SearchBox.js';

class App extends Component {
    constructor () {
        super()
        this.state = {
            Elist: Elist,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState ({ searchfield: event.target.value })
         console.log(event.target.value);
    }

    render() {
        const filteredList = this.state.Elist.filter (Elist => {
            return Elist.Code.toLowerCase().includes(this.state.searchfield.toLowerCase() )
        })
        return (
            <div className='tc'>
                <h1>Additive Checker</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Elist={filteredList}/>
            </div>
        );
    }
}

export default App;