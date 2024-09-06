// import React from 'react'
"use client"
import { useState } from "react";
import Image from "next/image";

const Totalscore = () => {
  const [total, setTotal] = useState(0);
  const arrayNum = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(0);
  const [rollDice, setRollDice] = useState(1);
  const [showRules, setShowRules] = useState(false)
  console.log(selected);
  const rolldice = (max, min) => {
    const dice = parseInt(Math.random() * (max - min) + min);
    console.log(`dice ${dice}`);
    setRollDice(dice);
    if (rollDice === selected) {
      setTotal(prev => prev + selected);
    }
    else {
      setTotal(prev => prev - selected)
    }
    console.log(`total ${total}`)
  }
  return (
    <div>
      <div className="flex my-12 items-center justify-around flex-wrap">
          <div className="flex flex-col items-center" >
          <h1 className="text-6xl font-bold mb-2">{total}</h1>
          <p className="text-sm font-semibold">Total Score</p>

           </div>
           <div className='flex'>
          {arrayNum.map((value, i) => (
            <div className='text-xl font-bold border border-black px-4 py-2 cursor-pointer transition duration-200 hover:bg-black hover:text-white ' key={i} onClick={() => setSelected(value)}>{value}</div>
          ))}
          {/* <div className='h-2 w-2 border-e-red-200'>1</div> */}
          </div>
          <p className="text-sm font-bold flex justify-end">selected Number: {selected}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div >
          <Image
    src={`/dice${rollDice}.jpeg`}
    width={180}
    height={180}
    alt="dice image"
    />

       </div>
          <div className="flex flex-col">
            <button onClick={() => rolldice(1, 7)} className="font-semibold">Click here to roll</button>
            <button onClick={() => setTotal(0)} className="text-xs border border-black font-semibold text-black py-1 mt-5">Reset</button>
            <button onClick={() => setShowRules(!showRules)} className="text-xs border border-black bg-black font-semibold text-white py-1 mt-3">Show Rules</button>
          </div>
          <div>
            {
              showRules && (
                <div className="bg-red-100 mt-4 rounded">
                  <p className="px-4 py-2 font-bold">How to play Dice Game</p>
                  <p className="px-4 text-sm">Select any number </p >
                  <p>Click on Dice to roll </p>
                  <p> If selected number is equal to the dice number</p>
                  <p> you would get a positive score of a selected number</p>
                  <p> otherwise the score would be deducted by the number on the dice.</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    
  )
}

export default Totalscore