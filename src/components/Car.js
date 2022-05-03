import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeManager } from '../context/Context';

const Car = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const { theme } = useContext(ThemeManager);

  const handleBasket = () => {
    setOpenBasket(!openBasket);
  };
  return (
    <div className="navbar-cart" onClick={handleBasket}>
      <div className="counter">3</div>
      <FaShoppingCart className="icon" />
      {openBasket && <BasketComponent theme={theme} />}
    </div>
  );
};

export default Car;

//Cart components
const BasketComponent = ({ theme }) => {
  useSelector((state) => {
    console.log('State form cart', state);
  });
  return (
    <div className="basket">
      <table className={theme === 'light' ? 'table-light' : 'table-dark'}>
        <thead>
          <tr>
            <th></th>
            <th className="tHead">Country</th>
            <th className="tHead">Capital</th>
            <th className="tHead">Language</th>
            <th className="tHead">Population</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.map((country, index) => (
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
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};
