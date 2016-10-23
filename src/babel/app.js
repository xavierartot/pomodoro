(function() {
  addMessage()
  function addMessage( ) {
    createNewChatMessage({
      date: '12/20/1993',
      content: 'Hey there! Hiiii!',
      author: 'Tim Jones',
      authorImage: 'http://bit.ly/2b53L1B'
    })
  }

  function createNewChatMessage(message) {

    console.log(message.date );
    //const messageDate = document.createTextNode(message.date),
    //messageDateSmall = document.createElement('small'),
    //
    //messageDateDiv = document.createElement('div');
    //messageDateDiv.appendChild(messageDateSmall);

    //messageDateSmall.appendChild(messageDate);
    //messageDateDiv.classList.add('date');

  }
}());
