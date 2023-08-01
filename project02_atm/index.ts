const input = require('prompt-sync')(
    {sigint: true}
)

interface Account {
    balance: number,
    withDraw: number,
    withDrawLimit: number,
    withDrawMoney: (money:number) => void,
    depostMoney: (money:number) => void
}

const account:Account = {
    balance: Math.floor(Math.random() * 1000000),
    withDraw: Math.floor(Math.random() * 1000000),
    withDrawLimit: 2000,
    withDrawMoney: (money:number) => {
        if (money > account.withDrawLimit) {
            console.log(`You can only withdraw ${account.withDrawLimit}`)
        } else if (money > account.balance) {
            console.log(`You can only withdraw ${account.balance}`)
        } else {
            account.balance -= money
            console.log(`You have withdrawn ${money}`)
        }
    },
    depostMoney: (money:number) => {
        account.balance += money
        console.log(`You have deposited ${money}`)
    }
}



const atmChoices:string[] = [
    '1. Withdraw',
    '2. Deposit',
    '3. Check Balance',
    '4. Exit'
]


const main:Function = () => {
    const userId:string = input('Enter your user id: ')
    const pin:number = parseInt(input('Enter your pin: '))

    if (userId === '1234' && pin === 4321) {
        console.log('Login successful')

        let choice:number = 0
        while(choice != 4){
            console.log('Welcome to the ATM')
            console.log('What would you like to do?')
            atmChoices.forEach(choice => console.log(choice))
            choice = parseInt(input('Enter your choice: '))
            switch(choice){
                case 1:
                    const money:number = parseInt(input('Enter the amount you want to withdraw: '))
                    account.withDrawMoney(money)
                    break
                case 2:
                    const deposit:number = parseInt(input('Enter the amount you want to deposit: '))
                    account.depostMoney(deposit)
                    break
                case 3:
                    console.log(`Your balance is ${account.balance}`)
                    break
                case 4:
                    console.log('Thank you for using the ATM')
                    break
                default:
                    console.log('Invalid choice')
                    break
        }
        
    }
}
}

main()