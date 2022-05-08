const MainInputs = ({value, change, placeholder, min, max}) => {

    return (
        <input
            type="number"
            value={value}
            onChange={change}
            placeholder={placeholder}
            min={min}
            max={max}
        />
    )
}

export default MainInputs