import React, { Component } from 'react'


export default class Checkerboard extends Component {
    state = { value: null }
    render() {
        return (
            <>
            <div>hello world</div>
            <form>
                <label htmlFor='checkerVal'>input checkerboard val</label>
                <input id='checkerVal'></input>
            </form>
            </>
        )
    }
}