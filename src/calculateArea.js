function calculateArea(num1, num2) {
    if(num1 < 0 || num2 < 0 || num1 === undefined || num2 === undefined) {
        return undefined;
    }
    return num1 * num2;

}