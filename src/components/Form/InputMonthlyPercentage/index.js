const InputMonthlyPercentage = ({value, change}) => {

    return (
        <input
            type="number"
            placeholder="10"
            min="10"
            max="100"
            value={value}
            onChange={change}
        />
    )

}

export default InputMonthlyPercentage
