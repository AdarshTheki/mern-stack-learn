import React, { useMemo } from "react";
import "./16-country_dropdown.css";
import { FaAngleDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [countries, setCountry] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [selected, setSelected] = useState(null);
  const fetchData = async () => {
    await fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountry(data);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {/* label of input button */}
      <button>
        {selected ? selected : "select country"} <FaAngleDown />
      </button>
      {/* country Lists */}
      <ul className='menu'>
        <div>
          <BsSearch className='icon' />
          <input
            autoComplete='off'
            type='text'
            name='country'
            placeholder='Enter your Country'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          />
        </div>
        {/* <CountriesClass
          countries={countries}
          inputValue={inputValue}
          setSelected={setSelected}
        /> */}
        <CountriesLists
          countries={countries}
          inputValue={inputValue}
          setSelected={setSelected}
        />
      </ul>
    </div>
  );
};

export default Main;

// useMemo(): optimize way
// Import data countries, inputValue and export setSelected value
const CountriesLists = ({ countries, inputValue, setSelected }) => {
  const filterCountries = useMemo(() => {
    if (!countries || !inputValue) {
      return [];
    }
    return countries?.filter((country) =>
      country?.name?.toLowerCase()?.startsWith(inputValue)
    );
  }, [countries, inputValue]);
  return (
    <>
      {filterCountries.map((country, index) => (
        <li onClick={() => setSelected(country?.name)} key={index}>
          {country?.name}
        </li>
      ))}
    </>
  );
};

// use ClassName
const CountriesClass = ({ countries, inputValue, setSelected }) => {
  return (
    <>
      {countries?.map((country, index) => (
        <li
          key={index}
          className={`${ country?.name?.toLowerCase()?.startsWith(inputValue) ? "block" : "hidden" }`}
          onClick={() => setSelected(country?.name)}
        >
          {country?.name?.toLowerCase()}
        </li>
      ))}
    </>
  );
};
