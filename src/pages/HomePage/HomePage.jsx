import { Loading } from "notiflix";
import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../services/api";

const HomePage = () => {
  const { data } = useGetUsersQuery();
  Loading.remove(100);

  return (
    <div>
      <p>
        {" "}
        Are You one of our {data?.length} registered users? Then{" "}
        <Link to="/login">Sign In</Link>{" "}
      </p>
      <p>
        If not - <Link to="/register">Register new account</Link>{" "}
      </p>
    </div>
  );
};

export default HomePage;
