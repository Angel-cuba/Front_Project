import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchingDataById } from '../actions/actions';
import { handleLanguages } from '../components/utils/helpers';
import { ThemeManager } from '../context/Context';
import { FaRegThumbsDown, FaRegThumbsUp, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';


import '../Styles/Pages/CountryDetails.scss';
import { addToCart, removeFromCart } from '../actions/carActions';

const CountryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeManager);

  const { data } = useSelector((state) => state.reducers);
 const {cart} = useSelector(state => state.carReducers);
  useEffect(() => {
    dispatch(fetchingDataById(id));
  }, [dispatch, id]);
  console.log(cart)


//Handlers for remove and add countries
  const handleAdd = (country) => {
    dispatch(addToCart(country));
  }
  const handleRemove = (countryName) => {
    dispatch(removeFromCart(countryName));
  }
  const countryExists = (countryName) => {
  return cart.some((country) => country.name.common === countryName);
  }

  return (
    <>
      {data ? (
        <div className="container">
          <div className={theme === 'light' ? 'card' : 'card-dark'}>
    <div className={{width:'100%', height:'150px',display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

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
            <div className="card-buttons">
              
              {!countryExists(data[0].name.common) ? <FaRegThumbsUp className="btnClickUp" onClick={() => handleAdd(data[0])}/>: <FaThumbsUp className="btnClickUp" onClick={() =>console.log('first')}/>}
              {countryExists(data[0].name.common) ? <FaRegThumbsDown className="btnClickDown" onClick={() => handleRemove(data[0].name.common)}/>: <FaThumbsDown className="btnClickDown" onClick={() =>console.log('second')}/>}
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
