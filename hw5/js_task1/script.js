function palindrom(string) {
    return string == string.split('').reverse().join('');
}
