function readNumber() {
    let a = prompt('Введите число', '');
    
    for (let i = 0; ; i++) {
    if (a === null || a === '') {
        return( 'Отмена' );
    } else if (typeof +a === 'number') {
        return a;
    } else a = prompt('Введите число', '');
    }
}