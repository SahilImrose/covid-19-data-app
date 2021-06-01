import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../features/covidData/covidDataSlice";
import "./CountryList.css";

const CountryList = () => {
  // const [country, setCountry] = useState([])

  const countries = useSelector((state) => state.covid.allData);
  return (
    <div className="countryList mt-5">
      <table>
        <tr>
          <th>Name</th>
          <th>Cases</th>
          <th>deaths</th>
          <th>Recovered</th>
          <th>Today Cases</th>
          <th>Today deaths</th>
          <th>Today Recovered</th>
          <th>flag</th>
        </tr>
        {countries.length > 0 &&
          countries.map((country) => (
            <tr className="box mb-5">
              <td>{country.country}</td>
              <td>{country.cases}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
              <td>{country.todayCases}</td>
              <td>{country.todayDeaths}</td>
              <td>{country.todayRecovered}</td>
              <td>
                <img src={country.countryInfo.flag} />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default CountryList;
