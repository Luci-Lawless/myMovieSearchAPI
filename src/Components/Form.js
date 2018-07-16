import React from 'react';

class Form extends React.Component {

  render() {

    return (
      <div className="search-bar">
        <form onSubmit={this.props.getMovie}>
          <input type="text" name="title" placeholder="Movie Title" />
          <button>Search</button>
          <button type="reset" onClick={this.props.handleClear}>Clear</button>
        </form>
      </div>
    );
  }
}

export default Form;
