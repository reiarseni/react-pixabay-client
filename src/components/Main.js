import React, { Component } from 'react';
import Searcher from './Searcher';
import Result from './Result';

class Main extends Component {

    state = {
        searchTerm: '',
        images: [],
        page: ''
    }

    scroll = () => {
        const elem = document.querySelector('.jumbotron');
        elem.scrollIntoView('smooth', 'start');
    }

    pagePrev = () => {
        let page = this.state.page;
        if (page > 0) {
            page -= 1
        };
        this.setState({
            page
        }, () => {
            this.queryApi();
            this.scroll();
        });
    }

    pageNext = () => {
        let page = this.state.page;
        page += 1;
        this.setState({
            page
        }, () => {
            this.queryApi();
            this.scroll();
        });
    }

    searchMethod = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
            page: 1
        }, () => {
            this.queryApi();
        });
    }

    queryApi = () => {

        const API_KEY = '14268751-f664c22b047633881bdaea476';

        const searchTerm = this.state.searchTerm;

        const page = this.state.page;

        const URL = 'https://pixabay.com/api/?key=' + API_KEY +
            '&q=' + encodeURIComponent(searchTerm) +
            '&per_page=8&page=' + page;

        fetch(URL)
            .then(response => response.json())
            .then(result => this.setState({
                images: result.hits
            })
            );
    }

    render() {

        return (
            <div className="app container">

                <div className="jumbotron">

                    <p className="lead text-center">Images Search</p>

                    <Searcher searchMethod={this.searchMethod} />

                </div>

                {this.state.searchterm}

                <div className="row justify-content-center">
                    <Result
                        images={this.state.images}
                        pagePrev={this.pagePrev}
                        pageNext={this.pageNext}
                    />
                </div>

            </div>
        );
    }
}

export default Main;