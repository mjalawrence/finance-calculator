import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState} from "@types/react";

function App() {
    const [borrowAmount, setBorrowAmount] = useState(0)
    const [annualSalary, setAnnualSalary] = useState(0)
    const [monthlyRepay, setMonthlyRepay] = useState(0)

    const [click, setClick] = useState(0)

    const setters = () => {
        setBorrowAmount(0)
        setAnnualSalary(0)
        setMonthlyRepay(0)
    }

    let inputtedValues = {
            toBorrow: borrowAmount,
            salary: annualSalary,
            repayment: monthlyRepay
    }

  return (
    <div className="container">
        <div className="App">
            <Form
                setters={setters}
                inputtedValues={inputtedValues}
                borrowAmount={borrowAmount}
                annualSalary={annualSalary}
                monthlyRepay={monthlyRepay}
                click={click}
                setClick={setClick}
            />
            <Display
                setters={setters}
                inputtedValues={inputtedValues}
                borrowAmount={borrowAmount}
                annualSalary={annualSalary}
                monthlyRepay={monthlyRepay}
                click={click}
                setClick={setClick}
            />
        </div>
    </div>
  );
}

export default App;
