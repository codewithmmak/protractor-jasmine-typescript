export class superCalculatorPageConstants {

    static get firstNumber() {
        return {
            sumNumber1: '2',
            divisionNumber1: '10',
        };
    }

    static get secondNumber() {
        return {
            sumNumber2: '2',
            divisionNumber2: '2',
        };
    }

    static get result() {
        return {
            sumResult: '4',
            divisionResult: '5',
        };
    }

    static get operator() {
        return {
            ADDITION: '+',
            DIVISION: '/',
            MODULO: '%',
            MULTIPLICATION: '*',
            SUBTRACTION: '-'
        };
    }

    static get locator() {
        return {
            operator: 'operator'
        };
    }

}
