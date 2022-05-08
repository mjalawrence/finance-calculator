import SubmitButton from "./SubmitButton";
import MainInputs from "./MainInputs";
import Calculator from "./Calculator";
import {useState} from "react";


const Form = () => {
    const [click, setClick] = useState(0)
    const [borrowAmount, setBorrowAmount] = useState('')
    const [annualSalary, setAnnualSalary] = useState('')
    const [monthlyRepay, setMonthlyRepay] = useState('')

    const inputBorrowAmount = (e) => {
        setBorrowAmount(e.target.value)
    }

    const inputAnnualSalary = (e) => {
        setAnnualSalary(e.target.value)
    }

    const inputMonthlyRepay = (e) => {
        setMonthlyRepay(e.target.value)
    }

    const submitAmounts = () => {
        let inputtedValues = {
            toBorrow: borrowAmount,
            salary: annualSalary,
            repayment: monthlyRepay
        }
        setClick(click + 1)
      console.log(inputtedValues)
    }

    return (
        <>
            <div className="subtitle">
                <h2>INPUT AMOUNTS BELOW:</h2>
            </div>
            <div className="form">
                <div>
                    <label>Amount to Borrow: £</label>
                    <MainInputs
                        value={borrowAmount}
                        change={inputBorrowAmount}
                        placeholder={10000}
                        min={0}
                    />
                </div>
                 <div>
                    <label>Expected Annual Salary: £</label>
                    <MainInputs
                        value={annualSalary}
                        change={inputAnnualSalary}
                        placeholder={25000}
                        min={0}
                    />
                </div>
                <div>
                    <label>Percentage of monthly salary towards repayment:
                    <MainInputs
                        value={monthlyRepay}
                        change={inputMonthlyRepay}
                        placeholder={10}
                        min={1}
                        max={100}
                    />%</label>
                </div>
                <div>
                    <SubmitButton clicker={submitAmounts} />
                </div>
            </div>
            <Calculator
                borrowAmount={borrowAmount}
                annualSalary={annualSalary}
                monthlyRepay={monthlyRepay}
                click={click}
            />
        </>
    )
}

export default Form
