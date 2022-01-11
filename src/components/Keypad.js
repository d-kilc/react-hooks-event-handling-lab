import React from "react"

function Keypad() {
    
    function handleChange(e) {
        // const str = e.target.value
        console.log('Entering password...')
    }
    
    return (
        <React.Fragment>
            <label>Password</label>
            <input onChange={handleChange} name="pw" type="password" />
        </React.Fragment>
    )
}

export default Keypad