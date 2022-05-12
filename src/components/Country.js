import React, { useContext, useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/carActions';
import { ThemeManager } from '../context/Context';
import '../Styles/Components/Small.scss';
import Car from './Car';
import { Input } from '../components/Input';

const Country = () => {
  const dispatch = useDispatch();
  //Checking for theme
  const { theme } = useContext(ThemeManager);
  const [sortData, setSortData] = useState(null);
  const [value, setValue] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  //Getting the data from the store
  const { data } = useSelector((state) => state.reducers);
  const { cart } = useSelector((state) => state.carReducers);

  //Searching the data by name

  const filteredData = data?.filter((item) =>
    item.name.common.toLowerCase().includes(value.toLowerCase())
  );

  //Handlers for remove and add items
  const handleAdd = (country) => {
    dispatch(addToCart(country));
  };

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

  //Sorting by name and  by population
  const sortAscByName = () => {
    const sorted = data.sort((a, b) => {
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
    setSortData([...sorted]);
  };
  
  const sortDescByName = () => {
    const sorted = data.sort((a, b) => {
      let nameA = a.name.common.toLowerCase()
      let nameB = b.name.common.toLowerCase()
      if (nameA < nameB) {
        return 1
      }
      if (a.name.common > b.name.common) {
        return -1
      }
      return 0
    })
    setSortData([...sorted])
  }
  //By population size
  const sortByPopulationAscending = () => {
    const sorted = data.sort((a, b) => {
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
    setSortData([...sorted]);
  };
  const sortByPopulationDescending = () => {
    const sorted = data.sort((a, b) => {
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
    setSortData([...sorted]);
  };

  // (country.map((arr, i) => <li key={i}>{arr}</li>))

 const handleLanguages = (country ) => {

  if (country.length > 3) {
    return (
      <>
        {country.splice(0,3).map((c) => {
          return (
            <li style={{textAlign: 'left', marginLeft: '36%'}} key={c}>{c}</li>
          )
        }) } 
        <strong>and {country.length} more...</strong>
      </>
    )
  }
  return country.map((language) => {
    return <li key={language}>{language}</li> 
  })
}
  
  const CountryData = (country, index) => {
    return (
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
                <td className="tBodyContent">{country.languages && handleLanguages(Object.values(country.languages))}</td>
                <td className="tBodyContent">{country.population}</td>
                <td className="tBodyContent">
                  {cart.some(c => c.name.common === country.name.common) ? (
                    <FaThumbsUp
                      className="btnClick"
                      onClick={() => handleRemove(country.name.common)}
                    />
                  ) : (
                    <FaRegThumbsUp className="btnClicked" onClick={() => handleAdd(country)} />
                  )}
                </td>
              </tr>
    )
  }
  const handleData = (countries) => {
    return countries?.map((country, index) => CountryData(country, index))
  }

    const handleSort = (sortBy) => {
    if (sortBy === 'name-asc') {
      sortAscByName()
    }
    if (sortBy === 'name-desc') {
      sortDescByName()
    }
    if (sortBy === 'pop-asc') {
      sortByPopulationAscending()
    }
    if (sortBy === 'pop-desc') {
      sortByPopulationDescending()
    }
  }
    const sortingButtons = [
    {
      id: 0,
      label: 'Ascending by Name',
      action: () => handleSort('name-asc'),
    },
    {
      id: 1,
      label: 'Descending by Name',
      action: () => handleSort('name-desc'),
    },
    { 
      id: 2, 
      label: 'Sorting Asc', 
      action: () => handleSort('pop-asc') },
    {
      id: 3,
      label: 'Sorting Desc',
      action: () => handleSort('pop-desc'),
    },
  ]
  return (
    <>
      <Input value={value} onChange={handleValue} />
      <div className="buttonContainer">
        {sortingButtons.map((button, index) => (
          <button
            key={index}
            className={theme === 'light' ? 'btn-light' : 'btn-dark'}
            onClick={() => button.action()}
          >
            {button.label}
          </button>
        ))}
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
            {
            handleData(filteredData || sortData)
            }
          </tbody>
        </table>
        <Car />
      </div>
    </>
  );
};

export default Country;
