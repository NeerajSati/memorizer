let count= 0,x=0,flipcount=20,hintcount=3,complete=0;
let prev,curr,prevc,currc;
const button=document.querySelectorAll('.btn');
const btn=document.querySelector('.btn');
const hintBtn=document.querySelector('.hintBtn');
const fcount = document.querySelector('.fcount');
const hcount = document.querySelector('.hcount');
const myrules = document.querySelector('.myrules');
let a = [
    'A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'
];
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
a.sort(() => Math.random() - 0.5);
button.forEach(function(btn) {
    btn.style.backgroundColor="white";
    btn.textContent=a[x];
    x=x+1;
});
myrules.addEventListener("click",function(){
    alert('1.You have to select two matching pairs by memorizing the locations of the cards \n 2.You can do 20 flips of cards  \r\n3.You have 3 hints to view the cards \r\n4.Lets go!! ')
});

hcount.textContent = hintcount;
hintBtn.addEventListener("click",function(){

    if(hintcount>0)
    {
    button.forEach(function(btn) {
        if(btn.style.backgroundColor=="white")
        {
    btn.style.backgroundColor="black"; }
});

    setTimeout(()=> {
        button.forEach(function(btn) {
            if(btn.style.backgroundColor=="black")
            {
        btn.style.backgroundColor="white"; 
    }}); }
        ,1100);
    
    hintcount = hintcount - 1;
    hcount.textContent = hintcount;
    }
    else{
        alert('Oops!! Out of Hints..., But dont lose hope continue trying without hints')
    }
});
    
button.forEach(function(btn) {
    
    btn.addEventListener("click",function(){
        count=count + 1;
        btn.style.backgroundColor="black";
        btn.style.color="white";
        btn.disabled= true;
        if(count==1)
        {
        prev = btn.textContent;
        prevc = btn;
        }
        if(count==2)
        {
        curr =btn.textContent;
        currc = btn;
        if(prev != curr)
        {
            prevc.disabled = false;
            currc.disabled= false;

            setTimeout(()=> {
            prevc.style.backgroundColor="white";
            currc.style.backgroundColor="white";
            },600);
            flipcount--;
            fcount.textContent= flipcount;
        }
        else{
            setTimeout(()=> {
                prevc.style.backgroundColor="red";
                currc.style.backgroundColor="red";
                },600);
                complete = complete+1;
                if(complete==8)
                {
                    setTimeout(()=> {alert(`You Won!`)},1000);
                }
        }
        count=0;
        }
    });
});

function getRandom()
{
    return Math.floor(Math.random() * 16);
}