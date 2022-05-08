import SubmitButton from "./SubmitButton";
import MasterInput from "./MasterInput";
import {useEffect, useState} from "react";


import Calculator from "../Calculator";
import {click} from "@testing-library/user-event/dist/click";


const Form = ({setters, inputtedValues, borrowAmount, monthlyRepay, annualSalary,  click, setClick}) => {
    // const [click, setClick] = useState(0)

    // const [toPayPerMonth, setToPayPerMonth] = useState('')
    // const [payOffTimeMonths, setPayOffTimeMonths] = useState('')
    // const [payOffTimeYears, setPayOffTimeYears] = useState('')
    // const [payOffTimeWholeYears, setPayOffTimeWholeYears] = useState('')
    // const [payOffTimeExtraMonths, setPayOffTimeExtraMonths] = useState('')

    const inputBorrowAmount = (e) => {
        setters(e.target.value)
    }

    const inputAnnualSalary = (e) => {
        setters(e.target.value)
    }

    const inputMonthlyRepay = (e) => {
        setters (e.target.value)
    }


    const submitAmounts = () => {
        // let inputtedValues = {
        //     toBorrow: borrowAmount,
        //     salary: annualSalary,
        //     repayment: monthlyRepay

        setClick(click + 1)
      // console.log(inputtedValues)
    }

    // useEffect (() => {
    //     let monthlySalary = annualSalary/12
    //     let monthlyPercentageOfSalary = ((monthlySalary/100) * monthlyRepay)
    //     setToPayPerMonth(monthlyPercentageOfSalary.toFixed(2))
    //     let monthlyPayOff = (borrowAmount/monthlyPercentageOfSalary).toFixed(0)
    //     setPayOffTimeMonths(monthlyPayOff)
    //     let yearlyPayOff = monthlyPayOff/12
    //     let extraMonths = monthlyPayOff % 12
    //     setPayOffTimeYears(yearlyPayOff)
    //     setPayOffTimeWholeYears(yearlyPayOff.toFixed(0))
    //     setPayOffTimeExtraMonths(extraMonths)
    //
    // }, [click])


    return (
        <>
            <div className="subtitle">
                <h2>Input Amounts Below:</h2>
            </div>
            <div className="form">
                {/*Question:*/}
                {/*I tried setting min/max for monthly percentage but wouldn't work*/}
                <div>
                    <label>Amount to Borrow: £</label>
                    <MasterInput value={borrowAmount} change={inputBorrowAmount} />
                </div>
                 <div>
                    <label>Expected Annual Salary: £</label>
                    <MasterInput value={annualSalary} change={inputAnnualSalary} />
                </div>
                <div>
                    <label>Percentage of monthly salary towards repayment:
                    <MasterInput value={monthlyRepay} change={inputMonthlyRepay} />%</label>
                </div>
                <div>
                    <SubmitButton clicker={submitAmounts} />
                </div>
            </div>
            {/*<div class="inputsDisplayed">*/}
            {/*    <p> You plan to borrow: £{borrowAmount === '' ? 10000 : borrowAmount}</p>*/}
            {/*    <p> Your expected annual salary is: £{annualSalary === '' ? 25000 : annualSalary}</p>*/}
            {/*    <p> The percentage of your monthly salary that will go towards loan repayment is: {monthlyRepay === '' ? 10 : monthlyRepay}%</p>*/}
            {/*</div>*/}
            {/*<div className="subtitle">*/}
            {/*    <h2>RESULTS BELOW:</h2>*/}
            {/*</div>*/}
            {/*<div className="resultsBox">*/}
            {/*    <div className="results">*/}
            {/*        <p>Your monthly repayment will be: £{toPayPerMonth}.</p>*/}
            {/*        <h3>How long will it take to pay off?</h3>*/}
            {/*        <p>{payOffTimeMonths > 0 ? payOffTimeMonths : '0'} months OR {Number.isInteger(payOffTimeYears) ? payOffTimeYears : payOffTimeWholeYears} years and {payOffTimeExtraMonths > 0 ? payOffTimeExtraMonths : 0 } months.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Form
