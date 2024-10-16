
            console.log("Hi Everyone")
            let x=5;
            console.log(x)
            x=10
            console.log(x)
            let z=1.92;
            console.log(z)
            x="hi"
            console.log(x)
            if(9<8){
                console.log("True")
            }
            else{
                console.log("False")
            }
            let count=0;
            let count2=2;
            function myFunc(param1){
                   count+=count2;
                    console.log(` Hello ${param1}.Count is: ${count}. Hello `)
            }

            // document.querySelector('.subbutt').innerHTML="Subscribed"
            function changeButton(){
                if (document.getElementById('subbutt').innerText === 'Subscribe'){
                    document.getElementById('subbutt').innerText = 'Subscribed';
                    document.querySelector('.subbutt').classList.remove('subbutt');
                    document.querySelector('.subbutt').classList.add('subbuttJS');
                }
                else{
                    document.getElementById('subbutt').innerText = 'Subscribe';
                    document.querySelector('.subbuttJS').classList.add('subbutt');
                    // document.querySelector('.subbutJS').classList.remove('subbuttJS');
                }

            }
        
 