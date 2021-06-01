import React, { useEffect, useState } from 'react';
import './CountryList.css'

const CountryList = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch("https://corona.lmao.ninja/v2/countries")
        .then(res => res.json())
        .then(data => setCountry(data))
        },[])
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
                {
                    country.map(country => 
                    <tr className="box mb-5">
                        <td>{country.country}</td>
                        <td>{country.cases}</td>
                        <td>{country.deaths}</td>
                        <td>{country.recovered}</td>
                        <td>{country.todayCases}</td>
                        <td>{country.todayDeaths}</td>
                        <td>{country.todayRecovered}</td>
                        <td><img src={country.countryInfo.flag}/></td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
};

export default CountryList;


