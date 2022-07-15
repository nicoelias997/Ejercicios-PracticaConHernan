let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];


let odd = [];
let even = [];
function mergeTwoList(arr){
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            odd.push(arr[i]);
        } else{
            even.push(arr[i]);
        }
    }
    return even.concat(odd);
}



console.log(mergeTwoList(list_of_numbers));

// instrucciones
// 1. crear una funcion mergeTwoList que reciba un array de numeros enteros
// 2. separar por par e impares en diferentes arrays
// 3. impar va a un array odd
// 4. par va a un array even
// 5. luego concatena odd con even 