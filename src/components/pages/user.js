import React, { Component, Fragment } from "react";
import Header from "../layout/Header";
export class user extends Component {
  componentDidMount() {
    this.props.getuser(this.props.match.params.username);
  }
  render() {
    const userinfo = this.props.myusername;
    return (
      <Fragment>
        <Header />
        {userinfo ? (
          <div className='mt-5  container'>
            <p className='alert alert-danger'>
              عکس پروفایل :{" "}
              <img
                className='rounded img-thumbnail img-fluid mx-auto w-25 h-25'
                src={userinfo.avatar_url}
                alt=''
              />
            </p>
            <p className='alert alert-info'>
              نام : <strong>{userinfo.login}</strong>
            </p>
            <p className='alert alert-info'>
              {" "}
              دنبال کننده ها : <strong>{userinfo.followers}</strong>
            </p>
            <p className='alert alert-info'>
              دنبال شونده ها : <strong>{userinfo.following}</strong>
            </p>
            <p className='alert alert-info'>
              شرکت یا گروه : <strong>{userinfo.company}</strong>
            </p>
          </div>
        ) : (
          <p className='alert alert-danger'>کسکش بازیا چیه ؟؟؟</p>
        )}
      </Fragment>
    );
  }
}

export default user;
