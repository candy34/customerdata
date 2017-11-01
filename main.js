
console.log(customers);
function createCustomersDatabaseItem (customerObj){


const template = `
<script type ="text/javascript">
window.onload = function what(){
document.getElementById('hello').innerHTML = 'hi';
};
</script>

    <div class= "container">
      <div class ="thumbnail"><img src="${customerObj.picture.large}">
      <h3>${customerObj.name.first} ${customerObj.name.last}</h3>
      <h3>${customerObj.email}</h3>
      </div>
      <p>${customerObj.location.street}</p>
      <p>${customerObj.location.city} ${customerObj.location.state} ${customerObj.location.postcode}</p>
      <p>${customerObj.phone}</p>
       <br />
    <div class= "blur">
      <p>${customerObj.id.value}</p>
    </div>
`
return template;
}


 let allHTML = "";
let innerHTML = allHTML

customers.results.forEach(function (item, idx, arr){
  allHTML += createCustomersDatabaseItem(item);
  console.log(allHTML);
})
const customersDOM = document.querySelectorAll('.customers')[0]
customersDOM.innerHTML = allHTML;
