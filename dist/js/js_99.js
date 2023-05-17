const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    if (!n1) {
        return;
    }

    if (n1.value <= 0) {
        return;
    }

    if (!n2) {
        return;
    }

    if (n2.value <= 0) {
        return;
    }

    console.log('I can!');
}



let make = document.querySelector('#make');

make.addEventListener('click', genTable);