import React, { Component } from 'react'


export default class Checkerboard extends Component {
    state = { value: 8 }

    createBoard = () => {
        let arr = []

        for(let i = 0; i < this.state.value; i++) {
            if(i % 2 === 1) {
                arr.push('_')
            } else if(i % 2 === 0) {
                arr.push('#')
            }
        }

        return arr.map(el => el === '#' ? 
        <div className='hash'>#</div>: <div className='space'>_</div>)
    }


    render() {
        return (
            <>
            <div className='boardContainer'>{this.createBoard()}</div>
            <form>
                <label htmlFor='checkerVal'>input checkerboard val</label>
                <input id='checkerVal'></input>
            </form>
            <style jsx>{`
        .boardContainer {
            margin: 50px auto 20px auto;
            border: 1px solid black;
            display: flex;
        }

        .space {
            background-color: black;
            border: 1px solid black;
        }
        .hash {
            background-color: white;
            border: 1px solid black;
        }
      `}</style>
            </>
        )
    }
}