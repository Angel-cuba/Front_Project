import React, { useContext } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/carActions';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Small.scss';
import Car from './Car';

const Country = () => {
  const dispatch = useDispatch();
  //Checking for theme
  const { theme } = useContext(ThemeManager);

  //Getting the data from the storefind
  const { data } = useSelector((state) => state.reducers);
  const { cart } = useSelector((state) => state.carReducers);

  //Handlers for remove and add items
  const handleAdd = (country) => {
    dispatch(addToCart(country));
  };

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

  return (
    <div className="country">
      <table className={theme === 'light' ? 'table-light' : 'table-dark'}>
        <thead>
          <tr>
            <th></th>
            <th className="tHead">Country</th>
            <th className="tHead">Capital</th>
            <th className="tHead">Language</th>
            <th className="tHead">Population</th>
            <th className="tHead"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((country, index) => (
            <tr key={index} className="eachCountry">
              <td className="tFlag">
                <Link style={{ textDecoration: 'none' }} to={`/country/${country.name.common}`}>
                  {country.flag}
                </Link>
              </td>
              <td className="tBodyContent">{country.name.common}</td>
              <td className="tBodyContent">
                {country.capital ? (
                  country.capital
                ) : (
                  <span
                    style={{
                      color: 'red',
                      border: '1px solid red',
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  >
                    Unknown
                  </span>
                )}
              </td>
              <td className="tBodyContent">{country.language}</td>
              <td className="tBodyContent">{country.population}</td>
              <td className="tBodyContent">
                {cart.includes(country) ? (
                  <FaThumbsUp
                    className="btnClick"
                    onClick={() => handleRemove(country.name.common)}
                  />
                ) : (
                  <FaRegThumbsUp className="btnClicked" onClick={() => handleAdd(country)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Car />
    </div>
  );
};

export default Country;
