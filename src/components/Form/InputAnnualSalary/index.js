const InputAnnualSalary = ({value, change}) => {

    return (
        <input
            type="number"
            placeholder="25000"
            min="0"
            value={value}
            onChange={change}
        />
    )
}

export default InputAnnualSalary