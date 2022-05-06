import React, { useContext, useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
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
  const [sortData, setSortData] = useState(null);
  const [sortAscending, setSortAscending] = useState(null);
  const [sortDescending, setSortDescending] = useState(null);

  console.log('Ascending', sortAscending);
  console.log('Descending', sortDescending);
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

  //Sorting by name and  by population
  const sortByName = () => {
    setSortAscending(null);
    setSortDescending(null);
    const sortedData = data.sort((a, b) => {
      let nameA = a.name.common.toLowerCase();
      let nameB = b.name.common.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      return 0;
    });
    setSortData(sortedData);
    return sortedData;
  };
  //By population size
  const sortByPopulationAscending = () => {
    setSortDescending(null);
    setSortData(null);
    const sortedData = data.sort((a, b) => {
      let populationA = a.population;
      let populationB = b.population;
      if (populationA > populationB) {
        return -1;
      }
      if (a.population < b.population) {
        return 1;
      }
      return 0;
    });
    setSortAscending(sortedData);
    //  setSortData(sortedData);
    return sortedData;
  };
  const sortByPopulationDescending = () => {
    setSortAscending(null);
    setSortData(null);
    const sortedData = data.sort((a, b) => {
      let populationA = a.population;
      let populationB = b.population;
      if (populationA > populationB) {
        return 1;
      }
      if (a.population < b.population) {
        return -1;
      }
      return 0;
    });

    setSortDescending(sortedData);
    //setSortData(sortedData);
    return sortedData;
  };

  //Refresh the list
  const refreshData = () => {
    setSortData(null);
    setSortAscending(null);
    setSortDescending(null);
  };
  return (
    <>
      <div className="buttonContainer">
        <button
          style={{ padding: 10, backgroundColor: 'black', color: 'white', fontSize: 33 }}
          onClick={() => refreshData()}
        >
          Back
        </button>
        <button
          style={{ padding: 10, backgroundColor: 'black', color: 'white', fontSize: 33 }}
          onClick={() => sortByName()}
        >
          Sort By Name
        </button>
        <button
          style={{ padding: 10, backgroundColor: 'black', color: 'white', fontSize: 33 }}
          onClick={() => sortByPopulationDescending()}
        >
          Sort By Population (descending)
        </button>
        <button
          style={{ padding: 10, backgroundColor: 'black', color: 'white', fontSize: 33 }}
          onClick={() => sortByPopulationAscending()}
        >
          Sorting By Population (ascending)
        </button>
      </div>
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
            {sortData
              ? sortData.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
                ))
              : data?.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
            {sortAscending
              ? sortAscending.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
                ))
              : data?.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
            {sortDescending
              ? sortDescending.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
                ))
              : data?.map((country, index) => (
                  <tr key={index} className="eachCountry">
                    <td className="tFlag">
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/country/${country.name.common}`}
                      >
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
            {!sortData &&
              !sortAscending &&
              !sortDescending &&
              data?.map((country, index) => (
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
    </>
  );
};

export default Country;
