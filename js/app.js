function borderStyle() {
    const addBorder = document.getElementById('friend-container');
    addBorder.style.border = '2px solid teal';
    addBorder.style.padding = '20px'
}

document.getElementById('add-border').addEventListener('click', function () {
    borderStyle();
})
function addBackgroundColor() {
    const friend = document.getElementsByClassName('friends');
    for (const friends of friend) {
        friends.style.backgroundColor = 'lightgray';
    }
}
function addFontColor() {
    const color = document.getElementsByClassName('friendName');
    for (const friendName of color) {
        friendName.style.color = 'DarkOrange';
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friends');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>hjfgsf jfs</p>
    `;
    container.appendChild(friendDiv);
})

