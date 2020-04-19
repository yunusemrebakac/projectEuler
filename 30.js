let powerAlgorithm = (power) => {
    let total = 0,                                      
        minValue = 2,                                   
        maxValue = Math.pow(power, 9),                  
        getPows = (d) => Math.pow(d, power);            

    while (minValue <= maxValue) {                      

        let powerSum = 0;
        (minValue + '').split('').some((d) => {         
            powerSum += getPows(+d);                    
        });

        if (powerSum === minValue) {                    
            total += minValue                           
        }                                               
        minValue++;                                     
    }
    return total;                                       
}

console.log(powerAlgorithm(5));                         