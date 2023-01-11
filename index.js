const Bamadash = {
    calc(operand1, operand2, operator) {
        switch(operator){
            case '+':
                return operand1+operand2;
            case '-':
                return operand1-operand2;
            case '*':
                return operand1*operand2;
            case '/':
                return operand1/operand2;
        }
    },
    compact(array){
        return array.filter(Boolean);
    },
    intersection(array1,array2, isStrict){
        intersection=[]
        if(isStrict){
            array1.forEach(element1 => {
                array2.forEach(element2 => {
                    if(element1===element2){
                        intersection.push(element1);
                    }
                });
            });
            return intersection;
        }
        else{
            array1.forEach(element1 => {
                array2.forEach(element2 => {
                    if(element1==element2){
                        intersection.push(element1);
                    }
                });
            });
            return intersection;

        }
    },
    
    size(collection) { 
        if(collection.length==undefined){
            return 0;
        }
        return collection;
    },
    castArray(value) {
        if(Array.isArray(value)){
            return value;
        }
        else{
            return arr=[value];
        }
    }
}

module.exports = Bamadash;