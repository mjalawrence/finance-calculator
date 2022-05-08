const Results = ({toPayPerMonth, payOffTimeMonths, payOffTimeWholeYears, payOffTimeExtraMonths, payOffYearly}) => {

    console.log(payOffTimeWholeYears)
    console.log('hello')
    console.log(payOffYearly)

    return (
        <>
            <div className="subtitle">
                <h2>RESULTS BELOW:</h2>
            </div>
            <div className="resultsBox">
                <div className="results">
                    <p>Your monthly repayment will be: £{toPayPerMonth}.</p>
                    <h3>How long will it take to pay off?</h3>
                    <p>{payOffTimeMonths > 11.999999 ? <span> {payOffTimeMonths} months </span>: ''}
                        {payOffTimeWholeYears > 0 ? <span> OR {payOffTimeWholeYears} years</span> : ''}
                        {payOffYearly !== payOffTimeWholeYears && payOffYearly > 1 ? <span> and </span> : ''}
                       {payOffTimeExtraMonths > 0 ? <span> {payOffTimeExtraMonths} months </span> : ''}
                    {/*    don't ask about singular '1 month' or '1 year', the above took long enough */}
                    </p>
                </div>
            </div>
        </>
    )
}


export default Results