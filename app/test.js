var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
rl.on('line', function(line){
  inputs.push(line.trim());
  const x=parseInt(inputs[0]);
  // const y=parseInt(inputs[1]);
  // const z=parseInt(inputs[2]);
  console.log(x+'dfsfdsfds');
  // console.log(y);
  // console.log(z);
  // let arrA=[];
  // let arrB=[];
  // let arrRes=[];
  //   for(let i=0;i<x;i++){
  //     arrRes[i]=new Array();
  //   for(let j=0;j<z;j++){
  //     arrRes[i][j]=-1;
  //     }
  //   }
  //   for(let i=0;i<x;i++){
  //       inputs.push(line.split(' '));
  //       arrA[i]=new Array();
  //       for(let j=0;j<y;j++){
  //           arrA[i][j]=parseInt(inputs[j])
  //       }
  //   }
  //   for(let i=0;i<y;i++){
  //       arrB[i]=new Array();
  //       inputs.push(line.split(' '));
  //       for(let j=0;j<z;j++){
  //           arrB[i][j]=parseInt(inputs[j])
  //       }
  //   }

  //   let temp = 0;
  //   for(let i=0;i<x;i++){
  //     for(let j=0;j<z;j++){
  //       for(let k=0;k<y;k++){
  //           temp = temp+arrA[i][k]*arrB[k][j];
  //           arrRes[i][j] = temp;
  //       }
  //     }
  //   }
  //   for(let i=0;i<x;i++){
  //       for(let j=0;j<z-1;j++){
  //           console.log(arrRes[i][j]+' ')
  //       }
  //       console.log(arrRes[i][z-1])
  //   }
})