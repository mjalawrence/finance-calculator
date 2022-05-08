// import {useEffect, useState} from "@types/react";
//
// const Display = ({setters, inputtedValues, borrowAmount, monthlyRepay, annualSalary, click, setClick}) => {
//
//     const [toPayPerMonth, setToPayPerMonth] = useState('')
//     const [payOffTimeMonths, setPayOffTimeMonths] = useState('')
//     const [payOffTimeYears, setPayOffTimeYears] = useState(0)
//     const [payOffTimeWholeYears, setPayOffTimeWholeYears] = useState('')
//     const [payOffTimeExtraMonths, setPayOffTimeExtraMonths] = useState(0)
//
//     useEffect (() => {
//         let monthlySalary = annualSalary/12
//         let monthlyPercentageOfSalary = ((monthlySalary/100) * monthlyRepay)
//         setToPayPerMonth(monthlyPercentageOfSalary.toFixed(2))
//         let monthlyPayOff = (borrowAmount/monthlyPercentageOfSalary).toFixed(0)
//         setPayOffTimeMonths(monthlyPayOff)
//         let yearlyPayOff = monthlyPayOff/12
//         let extraMonths = monthlyPayOff % 12
//         setPayOffTimeYears(yearlyPayOff)
//         setPayOffTimeWholeYears(yearlyPayOff.toFixed(0))
//         setPayOffTimeExtraMonths(extraMonths)
//
//     }, [click])
//
//
//     return (
//         <>
//             <div className="inputsDisplayed">
//                 <p> You plan to borrow: £{borrowAmount === '' ? 10000 : borrowAmount}</p>
//                 <p> Your expected annual salary is: £{annualSalary === '' ? 25000 : annualSalary}</p>
//                 <p> The percentage of your monthly salary that will go towards loan repayment
//                     is: {monthlyRepay === '' ? 10 : monthlyRepay}%</p>
//             </div>
//             <div className="subtitle">
//                 <h2>RESULTS BELOW:</h2>
//             </div>
//             <div className="resultsBox">
//                 <div className="results">
//                     <p>Your monthly repayment will be: £{toPayPerMonth}.</p>
//                     <h3>How long will it take to pay off?</h3>
//                     <p>{payOffTimeMonths > 0 ? payOffTimeMonths : '0'} months
//                         OR {Number.isInteger(payOffTimeYears) ? payOffTimeYears : payOffTimeWholeYears} years
//                         and {payOffTimeExtraMonths > 0 ? payOffTimeExtraMonths : 0} months.</p>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Display