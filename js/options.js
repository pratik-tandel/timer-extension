const nameInput = document.getElementById('name-input');
const timeInput = document.getElementById('time-input');
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const notificationTIme = timeInput.value;
    chrome.storage.sync.set({ name }, () => {
        name, notificationTIme
    });
});

chrome.storage.sync.get(["name", "test"], (res) => {
    nameInput.value = res.name ?? '???';
    timeInput.value = res.notificationTIme ?? 1000;
});


