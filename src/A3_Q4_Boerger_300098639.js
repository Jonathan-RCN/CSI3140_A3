var seive = [];

for (i =0; i<1000; i++){
  seive.push(1);
}

seive[0]=0;
seive[1]=0;
count = 998;
var prime = [];
var primeList ='';

for (i=2; i<1000; i++){

  if (seive[i]==1) { //testing to see if the number still is maybe prime

    for (j=i+1; j<1000; j++){ // iterating over all remaining numbers in array

      if (seive[j] != 0){ // if a number has already been set to not prime -> don't care

        if ((j % i) ==0) { // if the number is a multiple of the base number -> set to not prime
          seive[j] = 0;
          count--;
        }
      }
    }
  }

}

//alert(count) // confirming that there script counted 168 primes.

for (k=0; k<1000; k++){
  if (seive[k]==1){
    prime.push(k);
  }

}

for (i = 1; i < prime.length; i++) {
  primeList += prime[i-1] + ",  " ;

}
document.getElementById("primeList").innerHTML=primeList;
//alert(prime);
