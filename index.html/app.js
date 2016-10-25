'use strict';

(function () {
  console.log(1);
  addMessage();
  function addMessage() {
    createNewChatMessage({
      date: '12/20/1993',
      content: 'Hey there! Hiiii!',
      author: 'Tim Jones',
      authorImage: 'http://bit.ly/2b53L1B'
    });
  }

  function createNewChatMessage(message) {

    console.log(message.date);
    //const messageDate = document.createTextNode(message.date),
    //messageDateSmall = document.createElement('small'),
    //
    //messageDateDiv = document.createElement('div');
    //messageDateDiv.appendChild(messageDateSmall);

    //messageDateSmall.appendChild(messageDate);
    //messageDateDiv.classList.add('date');
  }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYWRkTWVzc2FnZSIsImNyZWF0ZU5ld0NoYXRNZXNzYWdlIiwiZGF0ZSIsImNvbnRlbnQiLCJhdXRob3IiLCJhdXRob3JJbWFnZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBVztBQUNWQSxVQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNBQztBQUNBLFdBQVNBLFVBQVQsR0FBdUI7QUFDckJDLHlCQUFxQjtBQUNuQkMsWUFBTSxZQURhO0FBRW5CQyxlQUFTLG1CQUZVO0FBR25CQyxjQUFRLFdBSFc7QUFJbkJDLG1CQUFhO0FBSk0sS0FBckI7QUFNRDs7QUFFRCxXQUFTSixvQkFBVCxDQUE4QkssT0FBOUIsRUFBdUM7O0FBRXJDUixZQUFRQyxHQUFSLENBQVlPLFFBQVFKLElBQXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUQ7QUFDRixDQXpCQSxHQUFEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coMSk7XG4gIGFkZE1lc3NhZ2UoKVxuICBmdW5jdGlvbiBhZGRNZXNzYWdlKCApIHtcbiAgICBjcmVhdGVOZXdDaGF0TWVzc2FnZSh7XG4gICAgICBkYXRlOiAnMTIvMjAvMTk5MycsXG4gICAgICBjb250ZW50OiAnSGV5IHRoZXJlISBIaWlpaSEnLFxuICAgICAgYXV0aG9yOiAnVGltIEpvbmVzJyxcbiAgICAgIGF1dGhvckltYWdlOiAnaHR0cDovL2JpdC5seS8yYjUzTDFCJ1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOZXdDaGF0TWVzc2FnZShtZXNzYWdlKSB7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLmRhdGUgKTtcbiAgICAvL2NvbnN0IG1lc3NhZ2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZS5kYXRlKSxcbiAgICAvL21lc3NhZ2VEYXRlU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpLFxuICAgIC8vXG4gICAgLy9tZXNzYWdlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vbWVzc2FnZURhdGVEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURhdGVTbWFsbCk7XG5cbiAgICAvL21lc3NhZ2VEYXRlU21hbGwuYXBwZW5kQ2hpbGQobWVzc2FnZURhdGUpO1xuICAgIC8vbWVzc2FnZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuXG4gIH1cbn0oKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
