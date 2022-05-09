import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchingDataById } from '../actions/actions';
import { ThemeManager } from '../context/Context';

import '../Styles/Pages/CountryDetails.scss';

const CountryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeManager);

  const { data } = useSelector((state) => state.reducers);
  useEffect(() => {
    dispatch(fetchingDataById(id));
  }, [dispatch, id]);

  return (
    <>
      {data ? (
        <div className="container">
          <div className={theme === 'light' ? 'card' : 'card-dark'}>
            <h1 className="title">{data[0]?.name.common}</h1>
            <img style={{ width: '150px', height: '150px' }} src={data[0]?.coatOfArms.png} alt="" />
            <div className="card-body">
              <h1>Full name</h1>
              <p>{data[0]?.altSpellings[1]}</p>
              <h1>Population</h1>
              <p> {data[0]?.population}</p>
              <h1>Region</h1>
              <p>{data[0]?.region}</p>
              <h1>Subregion</h1>
              <p>{data[0]?.subregion}</p>
              <h1>Continent </h1>
              <p>{data[0]?.continent}</p>
            </div>
          </div>
          <Link className="btnBack" to="/">
            Back
          </Link>
        </div>
      ) : (
        <div className="container">Loading...</div>
      )}
    </>
  );
};

export default CountryDetails;
