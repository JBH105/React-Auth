import React, { Component } from 'react'
export default class PopUp extends Component {

    render() {
        return (
            <div className="popupwrapper">
            <div className="popupMain">

                <h1>Are you Sure Want to Edit The Data?</h1>
                <div className="d-flex justify-content-end">

                <button className="btn btn-primary m-2">Ok</button>
                <button className="btn btn-primary m-2">Cancel</button>
                </div>
            </div>

            </div>
        )
    }
}
