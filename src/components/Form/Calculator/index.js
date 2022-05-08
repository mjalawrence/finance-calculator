import {useEffect, useState} from "react";
import Display from "./Display";
import Results from "./Results";

const Calculator = ({borrowAmount, annualSalary, monthlyRepay, click}) => {

    const [toPayPerMonth, setToPayPerMonth] = useState(0)
    const [payOffTimeMonths, setPayOffTimeMonths] = useState(0)
    const [payOffYearly, setYearlyPayOff] = useState(0)
    const [payOffTimeWholeYears, setPayOffTimeWholeYears] = useState(0)
    const [payOffTimeExtraMonths, setPayOffTimeExtraMonths] = useState(0)

    useEffect (() => {
        let monthlySalary = annualSalary/12

        let monthlyPercentageOfSalary = ((monthlySalary/100) * monthlyRepay)
        let monthlyPercentageOfSalaryWithPence = monthlyPercentageOfSalary.toFixed(2)
        setToPayPerMonth(parseInt(monthlyPercentageOfSalaryWithPence))

        let monthlyPayOff = (borrowAmount/monthlyPercentageOfSalary).toFixed(0)
        setPayOffTimeMonths(parseInt(monthlyPayOff))

        let yearlyPayOff = monthlyPayOff/12
        setYearlyPayOff(yearlyPayOff)
        console.log(yearlyPayOff)

        let wholeYears = Math.floor(yearlyPayOff)
        setPayOffTimeWholeYears(parseInt(wholeYears))
        console.log(parseInt(wholeYears))


        let extraMonths = monthlyPayOff % 12
        setPayOffTimeExtraMonths(extraMonths)

    }, [click])


    // Id say this bit here wants splitting up,
    //     the way you're doing it at the moment is running this useEffect each time click gets updated, ' +
    // 'which will work but isn't very clean.
    //     Instead what you could do is have multiple useEffects that run when a particular field changes
    //
    // For example all lines that involve the annualSalary state could go into a useEffect like this:
    //
    // useEffect(() => {
    //     // All stuff to do with annualSalary goes here
    // }, [annualSalary])

    //Questions:
        //I'm not sure what clean means in this context.
            //I tried to split them up as suggested above but it made the submit button redundant as the calculations were done live
                // which is something I was trying to avoid.
            //Also, the calculations are kind of interconnected
                // meaning I would have to repeat some calculations if I were to make separate useEffects for each input field
                    // Is this preferable or are the repeated calculations avoidable?

    return (
        <>
           <Display
               borrowAmount={borrowAmount}
               annualSalary={annualSalary}
               monthlyRepay={monthlyRepay}
           />
            <Results
                toPayPerMonth={toPayPerMonth}
                payOffTimeMonths={payOffTimeMonths}
                payOffTimeWholeYears={payOffTimeWholeYears}
                payOffTimeExtraMonths={payOffTimeExtraMonths}
                payOffYearly={payOffYearly}
            />
        </>
    )
}

export default Calculator;