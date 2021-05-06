import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import { getToprated } from "../modules/toprated";

const TopRatedContainer = () => {
  const dispatch = useDispatch();
  const { topRated, loading } = useSelector((state) => ({
    topRated: state.toprated.topRated,
    loading: state.toprated.loading,
  }));

  useEffect(() => {
    dispatch(getToprated());
  }, [dispatch]);

  return <Content title="Top Rated" movies={topRated} loading={loading} />;
};

export default TopRatedContainer;
