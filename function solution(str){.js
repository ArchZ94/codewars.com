function solution(str){
    let s ='';
    for (let i = str.length - 1; i >= 0; i--){
        for (let i = str.length - 1; i >= 0; i--){
      s += str[i];
    }
    return  s;
  }