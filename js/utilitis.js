function getInputFieldById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function getTextFieldById(id){
    const textField =parseFloat(document.getElementById(id).innerText);
    return textField;
}

function getFooterById(id){
    document.getElementById('foot').classList.remove('hidden');
    document.getElementById(id).classList.add('hidden');
}

function getContainerById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function getBtnColorById(id){
    document.getElementById('donation').classList.remove('bg-primary');
    document.getElementById('history').classList.remove('bg-primary');

    document.getElementById(id).classList.add('bg-primary');
}