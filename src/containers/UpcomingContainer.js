import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import { getUpcoming } from "../modules/upcoming";

const UpcomingContainer = () => {
  const dispatch = useDispatch();
  const { upcoming, loading } = useSelector(({ upcoming }) => ({
    upcoming: upcoming.upcoming,
    loading: upcoming.loading,
  }));

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);
  return <Content loading={loading} movies={upcoming} title="Upcoming" />;
};

export default UpcomingContainer;
