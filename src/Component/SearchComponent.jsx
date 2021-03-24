import React, { Component, Fragment } from "react";
class SearchComponent extends Component {
    state = {
        term: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        try {
            e.preventDefault();
            this.props.onTermSubmit(this.state.term)
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <Fragment>
                <section className="my-4">
                    <article className="col-md-4 mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="term"
                                    id="term"
                                    placeholder="Search Github User"
                                    className="form-control"
                                    value={this.state.term}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </form>
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default SearchComponent;
