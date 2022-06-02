import React, {useState,useEffect} from "react";
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = ()=>{
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList ] = useState(
        data? JSON.parse(data): []
    );

    //entradas
    const [income, setIncome]= useState(0);

    //saidas
    const [expense, setExpense] = useState(0);

    //total
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        //saidas
        const amountExpense = transactionsList.filter((item)=> item.expense).map((transaction) => Number(transaction.amount));

        //entradas
        const amountIncome = transactionsList.filter((item)=> !item.expense).map((transaction)=> Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur)=> acc + cur, 0).toFixed(2);
        const income= amountIncome.reduce((acc, cur)=> acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);

        //se entrada for menor que saida adiciona o - no total
        setTotal(`${Number(income)< Number(expense)? "-": ""}R$ ${total}`);

    }, [transactionsList]);

    //adicionar valores
    const handleAdd = (transaction)=>{
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);
        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    }

    return(
    <>
        <Header />
        <Resume income={income} expense={expense} total={total} />
        <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
        <GlobalStyle />
    </>
    
)}
export default App;