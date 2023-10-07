

let btn=document.querySelector('button')
        
// let report=document.querySelector('.report').hidden=true
btn.addEventListener('click',(e)=>{
    e.preventDefault();
   
    let height=parseInt((document.getElementById('age')).value);
    let waight=parseInt((document.querySelector('#waight')).value);

    if(height==='' || height<0||isNaN(height) ){
        document.querySelector('.result').innerHTML="Enter Number"

    }
    if(waight===''|| waight<0 || isNaN(waight)){

        document.querySelector('.result').innerHTML="Enter Number"

    }
    else{
        let result=(waight/((height*height)/10000)).toFixed(2)

        // let report=document.querySelector('.report').hidden=false
                    
        document.querySelector('.result').innerHTML=result

     

        let condition=document.querySelector('.condition')

        if(result<18.5){
            condition.innerHTML='Underweight '
        }
        else if(result>=18.5 && result<=24.9){
            condition.innerHTML='Healthy Weight '
        }
        else if(result>=25.0 && result<=29.9){
            condition.innerHTML='Overweight'
        }
        else{
            condition.innerHTML='Obesity'
        }

    }

    
   
    

})


