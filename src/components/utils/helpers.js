import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { addToCart, removeFromCart } from "../../actions/carActions";


 export const HandleData = (countries) => {
    return countries?.map((country, index) => HandleRenderRow(country, index))
  }

 const HandleRenderRow = ({country, index}) => {
  const { cart } = useSelector((state) => state.carReducers);
  const dispatch = useDispatch();

    //Handlers for adding and removing country
   //Handlers for remove and add items
  const handleAdd = (country) => {
    dispatch(addToCart(country));
  };

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

    return (
            <>
             {country && (
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
             )}
            </>
    )
  }




 export  const handleLanguages = (country ) => {

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