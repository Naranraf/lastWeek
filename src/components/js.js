function fibonacci(limit) {
    var sequence = [0, 1]; 
    
    while (sequence[sequence.length - 1] <= limit) {
      var nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];  
      if (nextNumber > limit) {
        break;  
      }
      sequence.push(nextNumber); 
    }
    
    return sequence;
  }
  