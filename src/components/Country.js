import React, { useContext } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/carActions';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Small.scss';
import Car from './Car';

const Country = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeManager);
  const { data } = useSelector((state) => state.reducers);

  const handleAdd = (index) => {
    dispatch(
      addToCart(
        index,
        data?.filter((c) => c.name.common === index)
      )
    );
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
                {/* <button className="btn" onClick={() => handleAdd(country.name.common)}>
                  Add
                </button> */}
                <FaRegThumbsUp
                  // className={favourites ? 'btnClicked' : 'btnClick'}
                  className="btnClicked"
                  onClick={() => handleAdd(country.name.common)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Car element */}
      <Car />
    </div>
  );
};

export default Country;
