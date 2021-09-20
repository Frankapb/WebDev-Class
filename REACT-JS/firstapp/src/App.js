import react from 'react'
import './style.css'

const App = ()=>{
    let myNumber=18;
    let isOpen = false;
    return (
        <div>
            <h1>Sweet Paradise!</h1>
            <h2>Hello people</h2>
            <h3 className="myCustomFont" id="">Style????</h3>
            <h3 className="myCustomFont" id="">
                {5*5}
                {'\nRunning'+'Away'}
                {
                    console.log('Greeting people')
                }
             
            </h3>
            <h3 className="myCustomFont" id="">
                {
                    myNumber + myNumber
                }

            </h3>

            <h3 className="myCustomFont" id="">
                {
                   isOpen ? 'Yes' : 'No'
                }

            </h3>
        </div>
    )
}


export default App 