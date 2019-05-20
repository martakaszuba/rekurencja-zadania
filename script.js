 //rekurencja factorial

 function factorial(num){
    if (num === 1 || num === 0){
        return 1;
    }
    return factorial(num-1) * num;
}

//rekurencja Math.power

 function Power(num, exponent){
     if (exponent >= 0){
     if (exponent === 0){
         return 1;
     }
     if (exponent === 1){
         return num;
     }
     return Power(num, exponent-1) * num;
 }
 }


//rekurencja product of array

function productOfArray(arr){
    if (arr.length === 0){
        return undefined;
    }
    if (arr.length === 1){
    return arr[0];
    }
    return productOfArray(arr.slice(0,-1)) * arr[arr.length-1];
}


//rekurencja rangeSame(x,y)
//rangeSame(0,4) => [0,0,0,0]
//rangeSame(3,2) => [3,3]

function rangeSame(x,y){
    if (y<=0){
        return undefined;
    }
     if (y === 1){
         return [x];
     }
     return rangeSame(x, y-1).concat([x]);
}


//rekurencja reverse string

   function reverseString(str){
       if (str.length === 1){
         return str[0];
       }
       return str[str.length-1] + reverseString(str.slice(0,-1));
   }


//rekurencja palindrom

function palindrome(str){
    if (str[0] !== str.slice(-1)){
        return false;
    }

    if (str.length === 1){
        return true;
    }

    return palindrome(str.slice(1, -1))
}