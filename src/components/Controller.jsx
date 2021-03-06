import React from 'react';

const Controller = ({count, onChange}) => {

    const onFizzBuzz = () => onChange('fizzbuzz')
    const onFizz = () => onChange('fizz')
    const onBuzz = () => onChange('buzz')
    const onNumber = () => onChange('number')

    
    return (
        <div className="controller">
            {/* 条件付きレンタリング */}
            <p>{count % 3 === 0 && count % 5 === 0 ? "FizzBuzz" : count % 3 === 0 ? "Fizz" : count % 5 === 0 ? "Buzz" : count}：：fieldタグに移行</p>
            <button onClick ={onFizz}>Fizz</button>
            <button onClick ={onBuzz}>Buzz</button>
            <button onClick ={onFizzBuzz}>FizzBuzz</button>
            <button onClick ={onNumber}>Number</button>
        </div>
    );
}

export default Controller;