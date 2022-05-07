const InputBorrowAmounts = ({value, change}) => {

    return (
        <input
            type="number"
            placeholder="10000"
            min="15"
            value={value}
            onChange={change}
        />
    )
}

export default InputBorrowAmounts
