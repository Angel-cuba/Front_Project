import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Small.scss';

const Country = () => {
  const { theme } = useContext(ThemeManager);
  const { data } = useSelector((state) => state.reducers);

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
                <Link to={`/country/${country.name.common}`}>{country.flag}</Link>
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
                <button className="btn">Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Country;
