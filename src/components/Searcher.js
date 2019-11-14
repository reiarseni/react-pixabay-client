import React, { Component } from 'react';

class Searcher extends Component {

    searchRef = React.createRef();

    fetchData = (e) => {
        e.preventDefault();
        const searchTerm = this.searchRef.current.value;
        this.props.searchMethod(searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.fetchData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                            placeholder="Search you image. Example: House"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..."></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default Searcher;