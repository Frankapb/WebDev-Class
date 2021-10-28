import React from 'react'

// import firebase.js
import firebase from './firebase'

function App() {
    // ref name
    const db = firebase.ref('/students');

    const getData = () => {
        console.log('testing get data')
        db.on('value', data => {
            console.log(data.toJSON())
        })
    }

    const addData = () => {

        db.push({
            title: 'blog news title',
            body: 'lorem ipsuasdasdasdasdasdasdm'
        })
            .then(() => {
                console.log('created data')
            }).catch(e => console.log(e))

    }

    const updateData = () => {
        console.log('test')
        // db.child("-MkaDj1Y75H2eLsWKpf_").on('value',data=>{
        //     console.log(data.val())
        // })
        db.child("-MkaDj1Y75H2eLsWKpf_").update({
            title: "this is updated title"
        }).then(() => console.log('updated')).catch(err => console.log(err))
    }

    const deleteData = () => {
        db.child("-MkaGZaMR58OgsbFQjpC").remove()
            .then(() => console.log('deleted data'))
            .catch(err => console.log(err))
    }

    const deleteallData = () => {
        db.remove().then(() => console.log('deleted all data')).catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="row p-4 text-center">
                <div className="col">
                    <h1>Realtime Database</h1>
                    <button className="btn btn-primary btn-lg m-1" onClick={getData} >Get data</button>
                    <button className="btn btn-warning btn-lg m-1" onClick={addData}>Add data</button>
                    <button className="btn btn-dark btn-lg m-1" onClick={updateData}>Update data</button>
                    <button className="btn btn-dark btn-lg m-1" onClick={deleteData}>delete data</button>
                    <button className="btn btn-dark btn-lg m-1" onClick={deleteallData}>delete all data</button>
                </div>
            </div>
        </div>
    )
}

export default App