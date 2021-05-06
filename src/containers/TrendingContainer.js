import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import { getTrending } from "../modules/trending";

const TrendingContainer = () => {
  const dispatch = useDispatch();
  const { trending, loading } = useSelector((state) => ({
    trending: state.trending.trending,
    loading: state.trending.loading,
  }));

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  return <Content title="Trending" movies={trending} loading={loading} />;
};

export default TrendingContainer;
