function multiply(){
    a=0;
    b=0;
    let inputtwo=parseInt(document.getElementById('inputtwo').value);
    let num=parseInt(document.getElementById('input').value);
    let content=document.getElementById('content');
    ans=document.getElementById('ans');
    if(inputtwo && num!=null ){
        text='Table of the entered number '+num+':';
        content.innerText=text;
        king='';
    for (let i = 1; i <= inputtwo; i++) {
        king += num +'X'+i+"="+num*i+'\n';
    }
    ans.innerText=king;
}
    else{
    alert('Please Enter both items.');
    }



}