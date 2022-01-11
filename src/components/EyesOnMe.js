function EyesOnMe() {
    function handleFocus(e) {
        console.log('Good!')
    }

    function handleBlur(r) {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe
