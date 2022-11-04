import ExpenseItem from './components/ExpenseItem';

function App() {
    const expensies = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expensies[0].title} amount={expensies[0].amount} date={expensies[0].date}/>
            <ExpenseItem title={expensies[1].title} amount={expensies[1].amount} date={expensies[1].date}/>
            <ExpenseItem title={expensies[2].title} amount={expensies[2].amount} date={expensies[2].date}/>
            <ExpenseItem title={expensies[3].title} amount={expensies[3].amount} date={expensies[3].date}/>
        </div>
    );
}

export default App;
