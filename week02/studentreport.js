const days = 6;
const LIMIT = 30;

let studentReport = [11,42,33,64,29,37,44];

for(i = 0;i< studentReport.length;i++){
    if(studentReport[i]< LIMIT){
        console.log(studentReport[i]);
    };

};

// while loop 

while(i<studentReport.length){
    if(studentReport[1] < LIMIT){
        console.log(studentReport[1])

    }
}

// forEach loop

studentReport.forEach(function(item){
    if (item < LIMIT) {
        console.log(item);
    }
});