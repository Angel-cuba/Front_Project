import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Small.scss';

const Country = () => {
  const { theme } = useContext(ThemeManager);
  const { data } = useSelector((state) => state.reducers);
  console.log(data);

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
              <td className="tFlag">{country.flag}</td>
              <td className="tBodyContent">{country.name.common}</td>
              <td className="tBodyContent">
                {country.capital ? country.capital : "Doesn't have a capital name"}
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
