// Noakhali flood victims start
document.getElementById('donate-btn').addEventListener('click', function(){
    const addMoney = getInputFieldById('input-field');
    if(isNaN(addMoney) || addMoney < 0){
      alert('Please put your amount')
      return;
    }
    const moneyMinus = getTextFieldById('availabe-money');
    const availableMoney = moneyMinus - addMoney;
    if(addMoney > moneyMinus){
      alert('You do not have insuficient balance');
      return;
    }
    document.getElementById('availabe-money').innerText = availableMoney;
     const donationMoney = getTextFieldById('money-add')
    const newDonation = donationMoney + addMoney;
    document.getElementById('money-add').innerText = newDonation;
    appendToHistory(addMoney);
    document.getElementById('modal').showModal();

    function appendToHistory(amount) {
    const donationText = document.getElementById('show-this').innerText; // Get the donation title
    const historyContainer = document.getElementById('append-here');

    const div = document.createElement("div");
    div.className = "bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] mb-2";
    
    div.innerHTML = `
        <h4 class="text-xl font-bold text-[rgb(17,17,17)]">
            You have donated ${amount} BDT for ${donationText}
        </h4>
        <div class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-4">
            <span class="text-xl font-bold text-[rgb(17,17,17)]">Date:</span> ${new Date().toLocaleString()}
        </div>`;
    
    historyContainer.appendChild(div);
}
})
// Noakhali flood victims end

document.getElementById('history').addEventListener('click',function(){
    getFooterById('foot');  
})
document.getElementById('donation').addEventListener('click',function(){
    getContainerById('donation-page',);  
})
document.getElementById('history').addEventListener('click',function(){
    getContainerById('history-page'); 
})
document.getElementById('donation').addEventListener('click',function(){
    getBtnColorById('donation');
})
document.getElementById('history').addEventListener('click',function(){
    getBtnColorById('history');
})