import React, { Component } from 'react';
import CardList from './CardList.js';
import { Elist } from './Elist.js';
import SearchBox from './SearchBox.js';
import './App.css';
import 'tachyons';

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
                <article class="mw7 Baner center ph3 ph5-ns tc br2 pv5 mb5 white">
                  <h4 class="fw6 f3 f2-ns lh-title mt0 mb3 white">
                    Additives are not boogeymans!
                  </h4>
                  <p class="fw2 f4 lh-copy mt0 mb3">
                    Modern food and supplements industry is unimaginable without wide range of additives that are neccessary to achieve wanted properties - safety, taste, color, texture, stability... 
                  </p>
                  <p class="fw1 f5 mt0 mb3">
                    Unfortunately, lot of texts over the internet talks about additive harmfulness, often going very far and wide. However, not all additives are same - as science progress, new ones are invented, old ones are improved, for some we discover they were toxic, and for some that they are not... Do not believe in horror stories over the net about terrible E-numbers that causes serious diseases, because if those were true, we would all be dead - or near dead until now.
                  </p>
                  <p class="fw1 f5 mt0 mb3">
                  There is plenty of good places on net where you can inform yourself properly, but for quick check is some additive safe or not, you can use this simple app.
                  </p>
                </article>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Elist={filteredList}/>
            </div>
        );
    }
}

export default App;