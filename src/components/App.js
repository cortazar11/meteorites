import React from 'react';
import meteorite from '../api/meteorite';
import axios from 'axios';

import SearchBar from './SearchBar';
import MeteoriteList from './MeteoriteList';

class App extends React.Component {
    state={
        meteorites: []
    }
   
    componentDidMount(){
        meteorite.get()
            .then(response=>
                this.setState({
                        meteorites: response.data
                        })
            )
        
    }

    onSearchSubmit= async (term )=>{
        console.log(term)
        meteorite
            .get('/',{
            params: {query: term}
                })
            .then((res)=>{
                console.log(res)
            })
        /*
        this.setState({
          
            meteorites: response.data
        })
        */
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}} >
                <SearchBar onSubmit={this.onSearchSubmit} />
                <MeteoriteList meteorites={this.state.meteorites}/>
            </div>
        )
    }
    
}

export default App;