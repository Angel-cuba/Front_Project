import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaTrashAlt, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/carActions';

import { ThemeManager } from '../context/Context';
import '../Styles/Components/Navbar.scss';


const Car = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const { theme } = useContext(ThemeManager);

  const { cart } = useSelector((state) => state.carReducers);
  const handleBasket = () => {
    setOpenBasket(!openBasket);
  };
  return (
    <div className="navbar-cart">
      <div className="counter">{cart.length > 0 ? cart.length : 0}</div>
      <FaShoppingCart className="icon"  onClick={handleBasket} />
          {
          openBasket && 
        <Basket theme={theme} cart={cart} setOpenBasket={setOpenBasket} />
      }
      </div>
  );
};

export default Car;

//Basket components
const Basket = ({ theme, cart, setOpenBasket }) => {
  const dispatch = useDispatch();
  const removeItem = (name) => {
    dispatch(removeFromCart(name));
  };
  const handleBasket = () => {
    setOpenBasket(false);
  };
  return (
    <>
      {cart.length === 0 ? (
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
              {cart.map((country, index) => (
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
                  <td className="tBodyContentTrash" onClick={() => removeItem(country.name.common)}>
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
