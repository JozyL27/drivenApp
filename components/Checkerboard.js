import React, { Component } from 'react'


export default class Checkerboard extends Component {
    state = { value: 8 }

    createBoard = (value) => {
        let arr = []

        for(let i = 0; i < this.state.value; i++) {
            if(i % 2 === 1) {
                arr.push('_')
            } else if(i % 2 === 0) {
                arr.push('#')
            }
        }

        return arr.map(el => el === '#' ? 
        <div className='hash' 
        style={{ backgroundColor: 'black', padding: '10px' }}>#</div>: 
        <div className='space' 
        style={{ backgroundColor: 'grey', padding: '10px' }}>_</div>)
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    }


    render() {
        return (
            <>
            <div className='boardContainer'>{this.createBoard(this.state.value)}</div>
            <form>
                <label htmlFor='checkerVal'>input checkerboard val</label>
                <input id='checkerVal' value={this.state.value} onChange={this.handleValueChange}></input>
            </form>
            <style jsx>{`
        .boardContainer {
            margin: 50px auto 20px auto;
            border: 1px solid black;
            display: flex;
        }
      `}</style>
            </>
        )
    }
}