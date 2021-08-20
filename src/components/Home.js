import React, { Component } from 'react'
import Login from '../authontication/Login'
import SignUp from '../authontication/SignUp'

export default class Home extends Component {
    render() {
        return (
            <div>
                Home Page
                <SignUp/>
                <Login/>
            </div>
        )
    }
}
