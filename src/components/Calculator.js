import React, { useState } from 'react'

const Calculator = () => {
  const[input1, setinput1] = useState("")
  const[input2, setinput2] = useState("")
  const[result, setresult] = useState("")

  const inputChange1 = (e)=>{
    setinput1(e.target.value)
  }

  const inputChange2 = (e)=>{
    setinput2(e.target.value)

  }

  const handleSum = ()=>{
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)
    const newSum = num1+num2;
    setresult(newSum)
  }

  const handleSubtract = ()=>{
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)
    const newSubtract = num1-num2;
    setresult(newSubtract)
  }

  const handleMultiply = ()=>{
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)
    const newMultiply = num1*num2;
    setresult(newMultiply)
  }

  const handleDivide = ()=>{
    const num1 = parseFloat(input1)
    const num2 = parseFloat(input2)
    if(num2 !==0){
      const newDivide = num1/num2;
    setresult(newDivide)
    } else {
      setresult("cannot divide by zero")
    }
    
  }
  return (
    <div>
      <h2> Basic calculator</h2>
      <div>
      <input 
      onChange={inputChange1}
      value={input1}
      type='number'
      placeholder='enter first number'
      />
      
      <input
      onChange={inputChange2}
      type='number'
      placeholder='enter second number'
      value={input2}
      />
      </div>
      
      
      
    
      <div>
      <button onClick={handleSum}> Add </button>
      <button onClick={handleSubtract}> Subtract </button>
      <button onClick={handleMultiply}> Multiply </button>
      <button onClick={handleDivide}> Divide </button>
      </div>
      {result !== "" && (
        <p>Result: {result}</p>
      )}
    </div>
  )
}

export default Calculator