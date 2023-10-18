// 1. Create an React JS project using the React JS framework



// 2. Create three components list component , cities-list component and result component.

// 3. List Component should have the following elements.

// a. a select box with the list of states(api provided ).

// b. cities-list Component

// c. Submit button

// 4. cities-list component should have a select box which would show the list of cities in the selected state (api provided).

// 5. when the submit button(on the list component) is clicked . Result component should open with url /result.

// 6. Result Component should show an h1 tag with the text "You Have selected {{selectedCityName}}, {{selectedStateName}}".

// NOTES:

// Please do not worry about the html design / styling as no styling is necessary.



// API Details:

// GET Method - http://api.minebrat.com/api/v1/states =to fetch all states

// GET METHOD - http://api.minebrat.com/api/v1/states/cities/{stateId} =to fetch all cities of the selected state  

// Please make sure you are running you chrome in unsecured mode or using React JS proxy as the api's wont work otherwise




import React, { useState, useEffect } from 'react';

const CityLists = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCityName, setselectedCityName] = useState('')

    const [submitdata, setsubmitdata] = useState('')

    useEffect(() => {
        fetch('https://api.minebrat.com/api/v1/states')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let d2 = data[0].stateName
                console.log(d2)
                setStates(data)
            })

            .catch(error => console.error(error));
    }, []);
console.log(states.stateName)
    useEffect(() => {
        // Fetch city data when selectedState changes
        if (selectedState) {
            console.log(selectedState)
            fetch(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`) // Replace with your API endpoint
                .then(response => response?.json())
                .then(data => {
                    console.log(data)
                    setCities(data)
                    let d1 = data[0].cityName
                    console.log(d1)
                })
                .catch(error => console.error(error));
        }
        setCities([])
    }, [selectedState]);

    console.log(cities[0]);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
    }

    const handleCityChange = (e) => {
        const state = e.target.value;
        setselectedCityName(state);
    }   
    console.log(cities)
    const handleClick = (e) => {
        // if (selectedState || selectedCityName) {
        //     // setSelectedState(selectedState.stateName);
        //     setStates(states.stateName)
        //     // setCities(cities.cityName)
        // }
        console.log('hi',e.target.value)
        console.log(selectedState)
        console.log(selectedCityName)
        setSelectedState(selectedState);
        setselectedCityName(selectedCityName)
    }
    return (
        <>
            <div>
                <label>Select a State:</label>
                <select onChange={handleStateChange} value={selectedState}>
                    <option value="">Select a state</option>
                    {states.map(state => (
                        <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
                    ))}
                </select>

                {selectedState && (
                    <div>
                        <label>Select a City:</label>
                        <select onChange={handleCityChange} value={selectedCityName}>
                            <option value="">Select a city</option>
                            {cities.map(city => (
                                <option key={city.cityId} value={city.cityId}>{city.cityName}</option>
                            ))}
                        </select>
                    </div>
                )}

            </div>
           
            {selectedState || selectedCityName ?
                <>
                    <button onClick={handleClick}>Submit</button>
                    <h1> You have selected State:{selectedState} and City: {selectedCityName}</h1>
                </>
                :<>
                <button onClick={handleClick}>Submit</button>
                <h1> You have selected State:{selectedState} and City: {selectedCityName}</h1>
                </>
            }
        </>
    );
};

export default CityLists;