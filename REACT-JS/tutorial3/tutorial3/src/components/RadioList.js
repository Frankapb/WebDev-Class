import React, { useEffect, useState } from 'react'

function RadioList({ radioHandler, radioname }) {
    const [allradios, setRadios] = useState([]);

    const getRadioNames = () => {
        fetch('http://localhost:4000/streamingurl')
            .then(res => res.json())
            .then(data => {
                setRadios(data)
            })
    }

    useEffect(() => {
        getRadioNames();
        console.log('componentdidmount, useeffect')

    },[])


  

    return (
        <div>
            {/* <a href="#" onClick={() => radioHandler('testtttttt')}> test</a> */}

            {/* {console.log(allradios)} */}
            {
                allradios.map((radio, index) => (
                    <p key={index} onClick={() => radioHandler(radio.radio_name)}>{radio.radio_name}</p>
                ))
            }

            <h3>   {radioname}</h3>
        </div>
    )
}

export default RadioList