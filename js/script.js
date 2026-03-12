
function calcPrice(){
 let area=document.getElementById('area').value;
 let material=document.getElementById('material').value;
 let price=0;
 if(material==='kirpich'){price=60000}
 if(material==='gazobeton'){price=50000}
 let total=area*price;
 document.getElementById('result').innerText='Примерная стоимость: '+total.toLocaleString()+' ₽';
}
