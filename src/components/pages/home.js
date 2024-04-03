import React, { Component, Fragment, useEffect, useState } from "react";
import Navbar from "../layout/Header";
import $, { error } from "jquery";
import UserItems from "../pageParts/UserItems";
import Search_form from "../pageParts/Search_form";
import axios from "axios";
import "../../styles/bootstrap.css";
import "../../styles/App.css";

const Home = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setApiValue();
  }, []);

  const setApiValue = async () => {
    setLoading(true);
    const allUsers = await axios.get("https://api.github.com/users");
    setLoading(false);
    setusers(allUsers.data);
  };
  const filterUser = (text) => {
    $(".each_User>h2")
      .filter(function (e) {
        return !$(this).text().includes(text);
      })
      .parents(".each_User")
      .addClass("d-none");

    $(".each_User>h2")
      .filter(function (e) {
        return $(this).text().includes(text);
      })
      .parents(".each_User")
      .removeClass("d-none");
  };

  var isOnLine = navigator.onLine;
  return (
    <Fragment>
      <Navbar />
      <div className=' mb-5 mt-5 container alert d-flex justify-content-center align-items-center  alert-primary'>
        لیست تما یوزر های گیت هاب
      </div>
      <Search_form filterUser={filterUser} />

      {isOnLine ? (
        <UserItems filterUser={filterUser} loadspier={loading} users={users} />
      ) : (
        <p className='container mt-5 d-flex justify-content-center align-items-center alert alert-danger'>
          لطفا اینترنت خود را برسی کنید و دوباره امتحان کنید
        </p>
      )}
    </Fragment>
  );
};
export default Home;
