# coding-raja-technologies-internship-
internship on python


Task 2:-

code:-
import json
from datetime import datetime
TRANSACTIONS_FILE = "transactions.json"
def load_transactions():
    try:
        with open(TRANSACTIONS_FILE, 'r') as file:
            transactions = json.load(file)
    except FileNotFoundError:
        transactions = {'income': 0, 'expenses': []}
    return transactions
def save_transactions(transactions):
    with open(TRANSACTIONS_FILE, 'w') as file:
        json.dump(transactions, file, indent=2)
def record_income(transactions):
    amount = float(input("Enter the income amount: "))
    category = input("Enter a category for income: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    transactions['income'] += amount
    transactions['expenses'].append({'type': 'income', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Income recorded successfully.")
def record_expense(transactions):
    amount = float(input("Enter the expense amount: "))
    category = input("Enter a category for expense: ")
    date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    transactions['income'] -= amount
    transactions['expenses'].append({'type': 'expense', 'amount': amount, 'category': category, 'date': date})
    save_transactions(transactions)
    print("Expense recorded successfully.")
def display_budget(transactions):
    remaining_budget = transactions['income']
    for expense in transactions['expenses']:
        remaining_budget -= expense['amount']

    print("\n==== Budget Tracker ====")
    print(f"Income: ${transactions['income']:.2f}")
    print(f"Expenses: ${sum(expense['amount'] for expense in transactions['expenses']):.2f}")
    print(f"Remaining Budget: ${remaining_budget:.2f}")
def display_expense_analysis(transactions):
    categories = {}
    for expense in transactions['expenses']:
        category = expense['category']
        categories[category] = categories.get(category, 0) + expense['amount']
    if not categories:
        print("No expenses recorded for analysis.")
    else:
        print("\n==== Expense Analysis ====")
        for category, amount in categories.items():
            print(f"{category}: ${amount:.2f}")
def main():
    transactions = load_transactions()
    while True:
        print("\n==== Budget Tracker Menu ====")
        print("1. Record Income")
        print("2. Record Expense")
        print("3. Display Budget")
        print("4. Display Expense Analysis")
        print("5. Exit")
        choice = input("Enter your choice (1-5): ")
        if choice == '1':
            record_income(transactions)
        elif choice == '2':
            record_expense(transactions)
        elif choice == '3':
            display_budget(transactions)
        elif choice == '4':
            display_expense_analysis(transactions)
        elif choice == '5':
            print("Exiting the budget tracker. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")
if __name__ == "__main__":
    main()
