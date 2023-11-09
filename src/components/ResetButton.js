function ResetButton(props) {
    const { onClick } = props

    const buttonStyle = {
        backgroundColor: 'lightgreen',
        color: 'darkblue',
        fontSize: 54,
    }

    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>
                Reset
            </button>
        </div>
    )
}

export default ResetButton
