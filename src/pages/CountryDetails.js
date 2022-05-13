import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchingDataById } from '../actions/actions';
import { handleLanguages } from '../components/utils/helpers';
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
  console.log(data)

  return (
    <>
      {data ? (
        <div className="container">
          <div className={theme === 'light' ? 'card' : 'card-dark'}>
    <div class={{width:'100%', height:'150px',display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

        <p className="title">{data[0]?.name.common}</p>
            <img style={{ width: '130px', height: '130px' }} src={data[0]?.coatOfArms.png} alt="" />

    </div>
            <div className="card-body">
              
              <p>Full name:<span>{data[0]?.altSpellings[1]}</span> </p>
              <p className="span-languages">Languages<span>{data[0].languages && handleLanguages(Object.values(data[0].languages))}</span></p>
              
              <p>Population: <span> {data[0]?.population}</span></p>
            
              <p>Region:<span>{data[0]?.region}</span></p>
              
              <p>Subregion:<span>{data[0]?.subregion}</span></p>
              
              <p>Continent: <span>{data[0]?.continents}</span></p>
              
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
