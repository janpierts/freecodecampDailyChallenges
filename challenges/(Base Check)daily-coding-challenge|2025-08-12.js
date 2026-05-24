function isValidNumber(n, base) {
    if (base < 2 || base > 36) return false;
    if (!n || n.length === 0) return false;

    const upperStr = n.toUpperCase();

    for (let i = 0; i < upperStr.length; i++) {
        const charCode = upperStr.charCodeAt(i);
        let digitValue;
        if (charCode >= 48 && charCode <= 57) {
            digitValue = charCode - 48;
        }
        else if (charCode >= 65 && charCode <= 90) {
            digitValue = charCode - 65 + 10;
        }
        else {
            return false;
        }
        if (digitValue >= base) {
            return false;
        }
    }
    return true;
}
console.log(isValidNumber("1010", 2));
console.log(isValidNumber("1020", 2));
console.log(isValidNumber("751", 8));
console.log(isValidNumber("FF", 16));
console.log(isValidNumber("ff", 16));
console.log(isValidNumber("FG", 16));
console.log(isValidNumber("Z", 36));
