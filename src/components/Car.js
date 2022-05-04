import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaTrashAlt, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThemeManager } from '../context/Context';

const Car = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const { theme } = useContext(ThemeManager);

  const { cart } = useSelector((state) => state.carReducers);
  console.log('stateInCar', cart);
  // useSelector((state) => console.log(state));

  // console.log(stateInCar);

  // console.log('Data from BasketComponent', cart);

  const handleBasket = () => {
    setOpenBasket(!openBasket);
  };
  return (
    <div className="navbar-cart" onClick={handleBasket}>
      <div className="counter">{cart.length > 0 ? cart.length : 0}</div>
      <FaShoppingCart className="icon" />
      {openBasket && (
        <p>Cart</p>
        // <BasketComponent
        //   theme={theme}
        //   stateInCar={cart}
        //   openBasket={openBasket}
        //   setOpenBasket={setOpenBasket}
        // />
      )}
    </div>
  );
};

export default Car;

//Cart components
const BasketComponent = ({ theme, stateInCar, setOpenBasket, openBasket }) => {
  const dispatch = useDispatch();
  const removeItem = (index) => {
    // const itemFromCart = items.filter((itemInCart) => itemInCart.id !== item.id);
    dispatch(index, stateInCar);
  };
  const handleBasket = () => {
    setOpenBasket(false);
  };
  return (
    <>
      {stateInCar.length === 0 ? (
        <div className="basket-empty">
          <h1>Your basket is empty</h1>
        </div>
      ) : (
        <div className="basket">
          <FaWindowClose className="closeWindow" onClick={handleBasket} />
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
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/country/${country[0].name.common}`}
                    >
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
                  <td
                    className="tBodyContentTrash"
                    onClick={() => removeItem(country[0].name.common)}
                  >
                    <FaTrashAlt />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
