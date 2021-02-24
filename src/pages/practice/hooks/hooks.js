import React, {  useState } from 'react'

function Hooks() {
    const [number, setNumber] = useState(0)
    return (<div>
        number { number }
        <button onClick={() => setNumber(number + 1)}>修改name</button>
    </div>)
}

export default Hooks