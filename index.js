//Pop up name

function callName(){
    myName = document.getElementById("name");
    alert("Hello world, "+myName.value)
}


//Counting numbers
function countNumber(){
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = ''; // clear any existing numbers

    for (let i = 1; i <= 100; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = i;
        numbersDiv.appendChild(number);
    }
};

//Summation
function sum(){
    var num1 = document.getElementById('1')
    var num2 = document.getElementById('2')
    var num3 = document.getElementById('3')
    var num4 = document.getElementById('4')
    var num5 = document.getElementById('5')

    var sum = 0;
    sum += parseInt(num1.value);
    sum += parseInt(num2.value);
    sum += parseInt(num3.value);
    sum += parseInt(num4.value);
    sum += parseInt(num5.value);
    alert("The sum of the five values is: "+sum);
}
