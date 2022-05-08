const Display = ({borrowAmount, annualSalary, monthlyRepay}) => {

    return (
        <div className="inputsDisplayed">
            <p> You plan to borrow: £{borrowAmount === 0 ? 10000 : borrowAmount}</p>
            <p> Your expected annual salary is: £{annualSalary === 0 ? 25000 : annualSalary}</p>
            <p> The percentage of your monthly salary that will go towards loan repayment
                is: {monthlyRepay === 0 ? 10 : monthlyRepay}%</p>
        </div>
    )
}

export default Display