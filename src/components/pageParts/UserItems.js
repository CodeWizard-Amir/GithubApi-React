import React, { Component, Fragment } from "react";
import Loading from "../layout/Spiner";
import { Link } from "react-router-dom";
class UserItems extends Component {
  render() {
    const user = this.props.users;
    const load = this.props.loadspier;
    if (load) {
      return (
        <Fragment>
          <Loading />
        </Fragment>
      );
    } else {
      return (
        <div className='allUser row'>
          {this.props.users.map((u) => (
            <div className='each_User'>
              <img src={u.avatar_url} alt='' />
              <h2>{u.login}</h2>
              <a
                href={`/user/${u.login}`}
                className='btn btn-primary btn-block'
              >
                more
              </a>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserItems;
