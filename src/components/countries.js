import useStatistics from "../../utils/useStatistics";
import Statistics from "./statistics";
import { useEffect, useState } from "react";

export default function Country() {
    const { stats: countries, loading, error } = useStatistics(
        'https://covid19.mathdro.id/api/countries'
      );
    const [selectedCountry, setSelectedCountry] = useState('IND');
    if (loading || !stats) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <h2>Showing {selectedCountry}</h2>
            <select onChange={e => {
                setSelectedCountry(e.target.value);
            }}>
                {Object.entries(countries.countries).map((
                    [country, code]) => (
                        <option 
                        selected={selectedCountry === countries.iso3[code]}
                        key={code} 
                        value={countries.iso3[code]}>
                            {country}
                        </option>
                    )
                    )}
            </select>
            <Statistics url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Statistics>
        </div>
    );
}