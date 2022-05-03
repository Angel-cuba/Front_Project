import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeManager } from '../context/Context';

const Car = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const { theme } = useContext(ThemeManager);

  const { cart } = useSelector((state) => state.carReducers);
  const { stateInCar } = useSelector((state) => state.carReducers);
  console.log(stateInCar);

  console.log('Data from BasketComponent', cart);

  const handleBasket = () => {
    setOpenBasket(!openBasket);
  };
  return (
    <div className="navbar-cart" onClick={handleBasket}>
      <div className="counter">{cart > 0 ? cart : 'Empty'}</div>
      <FaShoppingCart className="icon" />
      {openBasket && <BasketComponent theme={theme} stateInCar={stateInCar} />}
    </div>
  );
};

export default Car;

//Cart components
const BasketComponent = ({ theme, stateInCar }) => {
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
            <th className="tHead"></th>
          </tr>
        </thead>
        <tbody>
          {stateInCar?.map((country, index) => (
            <tr key={index} className="eachCountry">
              <td className="tFlag">
                <Link style={{ textDecoration: 'none' }} to={`/country/${country[0].name.common}`}>
                  {country[0].flag}
                </Link>
              </td>
              <td className="tBodyContent">{country[0].name.common}</td>
              <td className="tBodyContent">
                {country[0].capital ? (
                  country[0].capital
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
              <td className="tBodyContent">{country[0].language}</td>
              <td className="tBodyContent">{country[0].population}</td>
              <td className="tBodyContentTrash">
                <FaTrashAlt />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
