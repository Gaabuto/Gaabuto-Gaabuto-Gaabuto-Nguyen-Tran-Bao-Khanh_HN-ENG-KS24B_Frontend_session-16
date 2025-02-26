let a = +prompt("Mời bạn nhập số thứ 1");
let b = +prompt("Mời bạn nhập số thứ 2");
if(a>b){
    [a,b] = [b,a];
}
let c = Math.floor(Math.random() * (b - a + 1) + a);
alert(`số random giữa 2 số là ${c}`)