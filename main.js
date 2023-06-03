const incomes = document.querySelector('incomes');
const expenses = document.getElementById('expenses');
const incomtitle = document.getElementById('incom-title');
const incomvalue = document.getElementById('incom-value');
const expensetitle = document.getElementById('expense-title');
const expensevalue = document.getElementById('expenensevalue');
const incomeForm = document.getElementById('incomeForm');
const incomesArray = [];
const incomesList = document.getElementById('incomesList');
const expensesArray = [];
const expensesList = document.getElementById('expensesList');
const expenseForm = document.getElementById('expenseForm');

incomeForm.addEventListener('submit', handleIncomeFormSubmit);
expenseForm.addEventListener('submit', handleExpenseFormSubmit);

function handleIncomeFormSubmit(event) {
	event.preventDefault();
	incomesArray.push({ title: event.target.incomeTitle.value, value: event.target.incomeValue.value });
	renderIncomeList();
	countIncomes();
}
function renderIncomeList() {
	incomesList.innerHTML = '';
	incomesArray.forEach((income) => {
		const li = document.createElement('li');
		li.innerHTML = `${income.title} ${income.value}`;
		incomesList.appendChild(li);
	});
}
function handleExpenseFormSubmit(event) {
	event.preventDefault();
	expensesArray.push({ title: event.target.expenseTitle.value, value: event.target.expenseValue.value });
	renderExpenseList();
	countExpenses();
}
function renderExpenseList() {
	expensesList.innerHTML = '';
	expensesArray.forEach((expense) => {
		const li = document.createElement('li');
		li.innerHTML = `${expense.title} ${expense.value}`;
		expensesList.appendChild(li);
	});
}
function countIncomes() {
	const incomesSum = incomesArray.reduce((previousValue, currentValue) => {
		return previousValue + Number(currentValue.value);
	}, 0);
	const incomesValue = document.getElementById('incomesValue');
	incomesValue.innerHTML = incomesSum;
}
function countExpenses() {
	const expensesSum = expensesArray.reduce((previousValue, currentValue) => {
		return previousValue + Number(currentValue.value);
	}, 0);
	const expensesValue = document.getElementById('expensesValue');
	expensesValue.innerHTML = expensesSum;
}
