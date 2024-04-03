import React, { Component } from "react";
import PropTypes from 'prop-types'
import $ from "jquery";
export class Search_form extends Component {
  componentDidMount() {
    $(".s_from").submit(function (e) {
      e.preventDefault();
    });
  }

onchange = (e) => {
    this.props.filterUser(e.target.value.trim());
};
  render() {
    return (
      <div className='container p-5'>
        <form
          className=' s_from d-flex justify-content-center flex-column'
          action=''
          method='post'
        >
          <input placeholder="چیزی تایپ کنید ..." className='m-2 p-3 form-control' type='text' name='hi'  onChange={this.onchange}/>
        </form>
      </div>
      
    );
  }
}

export default Search_form;
