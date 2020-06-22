import React, { Component } from 'react'


export default class Checkerboard extends Component {
    state = { value: 64 }

    createBoard = (value) => {
        let arr = []

        // for(let i = 0; i < this.state.value; i++) {
        //     if(i % 2 === 1) {
        //         arr.push('_')
        //     } else if(i % 2 === 0) {
        //         arr.push('#')
        //     }
        // }

        for(let i = 0; i < this.state.value; i++) {
            if(parseInt((i / 8) + i) % 2 === 0) {
                arr.push('_')
            } else {
                arr.push('#')
            }
        }

        return arr.map((el, index) => el === '#' ? 
        <div className='hash' key={index} 
        style={{ backgroundColor: 'black', width: '20px', height: '20px', float: 'left' }}></div>: 
        <div className='space' key={index}
        style={{ backgroundColor: 'grey', width: '20px', height: '20px', float: 'left' }}></div>)
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    }


    render() {
        return (
            <section className='boardSection'>
            <div className='boardContainer'>{this.createBoard(this.state.value)}</div>
            <form className='boardForm'>
                <label htmlFor='checkerVal'>input checkerboard val</label>
                <input id='checkerVal' value={this.state.value} onChange={this.handleValueChange}></input>
            </form>
            <style jsx>{`
        .boardContainer {
            margin: 50px auto 20px auto;
            border: 1px solid black;
            width: 160px;
            height: 160px;
        }
        .boardForm {
            margin: 20px auto 20px auto;
        }

        .boardSection {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
      `}</style>
            </section>
        )
    }
}