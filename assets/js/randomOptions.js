function generateRandomDate() {
    const start = new Date('2024-04-05');
    const end = new Date('2024-04-10');
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate;
}

function generateRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 0);
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function generateRandomOptions() {
    const options = [];
    for (let i = 0; i < 10; i++) {
        const randomDate = generateRandomDate();
        const formattedDate = `${randomDate.toLocaleDateString()} ${generateRandomTime()}`;
        options.push(formattedDate);
    }
    return options;
}

function addRandomOptionsToSelect() {
    const selectElement = document.getElementById('shows');
    const randomOptions = generateRandomOptions();
    randomOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

addRandomOptionsToSelect();