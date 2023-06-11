const incomes = document.querySelector('incomes');
const expenses = document.getElementById('expenses');
const incomtitle = document.getElementById('incom-title');
const incomvalue = document.getElementById('incom-value');
const expensetitle = document.getElementById('expense-title');
const expensevalue = document.getElementById('expenensevalue');
const incomeForm = document.getElementById('incomeForm');
const incomesArray = [];
const incomesList = document.getElementById('incomesList');
let expensesArray = [];
const expensesList = document.getElementById('expensesList');
const expenseForm = document.getElementById('expenseForm');

incomeForm.addEventListener('submit', handleIncomeFormSubmit);
expenseForm.addEventListener('submit', handleExpenseFormSubmit);

function handleIncomeFormSubmit(event) {
	event.preventDefault();
	incomesArray.push({ title: event.target.incomeTitle.value, value: event.target.incomeValue.value });
	renderIncomeList();
	countIncomes();
	differenceIncomesAndExpenses();
	interator =interator +1;
}
function renderIncomeList() {
	incomesList.innerHTML = '';
	incomesArray.forEach((income, index) => {
		const li = document.createElement('li');
		li.id = income.id;

		li.innerHTML = `${income.title} ${income.value}`;
		const btn = document.createElement('button');
		btn.textContent = 'edycja';
		li.appendChild(btn);
		btn.addEventListener('click', () => {
			console.log('effect');
		});
		const btnDelete = document.createElement('button');
		btnDelete.textContent = 'usun';
		li.appendChild(btnDelete);
		btnDelete.addEventListener('click', () => {
			console.log('effect');
			li.remove();
		});
		incomesList.appendChild(li);
	});
}
let iterator = 0;
function handleExpenseFormSubmit(event) {
	event.preventDefault();
	expensesArray.push({ id: iterator, title: event.target.expenseTitle.value, value: event.target.expenseValue.value });
	renderExpenseList();
	countExpenses();
	differenceIncomesAndExpenses();
	iterator = iterator + 1;
}
function renderExpenseList() {
	expensesList.innerHTML = '';
	expensesArray.forEach((expense, index) => {
		const li = document.createElement('li');
		li.id = expense.id;
		li.innerHTML = `${expense.title} ${expense.value}`;
		const btn = document.createElement('button');
		btn.textContent = 'edycja';
		li.appendChild(btn);
		btn.addEventListener('click', () => {
			console.log('effect');
		});
		const btnDelete = document.createElement('button');
		btnDelete.textContent = 'usun';
		li.appendChild(btnDelete);
		btnDelete.addEventListener('click', () => {
			calculateExpenses(expense.id);
			li.remove();
		});
		expensesList.appendChild(li);
	});
}
function countIncomes() {
	const incomesSum = incomesArray.reduce((previousValue, currentValue) => {
		return previousValue + Number(currentValue.value);
	}, 0);
	const incomesValue = document.getElementById('incomesValue');
	incomesValue.innerHTML = incomesSum;
	return incomesSum;
}
function countExpenses() {
	const expensesSum = expensesArray.reduce((previousValue, currentValue) => {
		return previousValue + Number(currentValue.value);
	}, 0);
	const expensesValue = document.getElementById('expensesValue');
	expensesValue.innerHTML = expensesSum;
	return expensesSum;
}
function differenceIncomesAndExpenses() {
	const stateOfBudget = countIncomes() - countExpenses();
	const difference = document.getElementById('budgetValue');
	difference.innerHTML = stateOfBudget;
}
function calculateExpenses(value) {
	expensesArray = expensesArray.filter((item) => {
		return item.id !== value;
	});
	countExpenses();
}
function calculateIncomes(value) {
	incomesArray = incomesArray.filter((item) => {
		return item.id !== value;
	});
	countIncomes();
stworzyc funkcję calculte incomes tam analogicznie bede przypisywała incomes Arraya tan count expenses count Income,
jak robię hendle income zrobic lt iterator income,
dodac id do tablicy i potem w renderincome list dodac li id i wywołanie funkcji 

