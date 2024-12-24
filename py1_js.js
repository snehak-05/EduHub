const form = document.getElementById('commentForm');
      const commentsContainer = document.getElementById('commentsContainer');
  
      function addComment(username, date, commentText) {
          const commentDiv = document.createElement('div');
          commentDiv.className = 'box';
  
          commentDiv.innerHTML = `
              <div class="user">
                  <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png" alt="">
                  <div>
                      <h3>${username}</h3>
                      <span>${date}</span>
                  </div>
              </div>
              <div class="comment-box">${commentText}</div>
              <form class="flex-btn">
                  <input type="button" value="Edit Comment" class="inline-option-btn" onclick="editComment(this)">
                  <input type="button" value="Delete Comment" class="inline-delete-btn" onclick="deleteComment(this)">
              </form>
          `;
  
          commentsContainer.appendChild(commentDiv);
      }
  
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
  
          const commentBox = form.querySelector('textarea[name="comment_box"]');
          const commentText = commentBox.value;
          const username = "sneha kundu"; 
          const date = new Date().toLocaleDateString(); 
  
          addComment(username, date, commentText);
  
          commentBox.value = '';
      });
  
      function editComment(button) {
          const commentBox = button.closest('.box').querySelector('.comment-box');
          const currentText = commentBox.textContent;
          const newText = prompt("Edit your comment:", currentText);
          if (newText !== null) {
              commentBox.textContent = newText;
          }
      }
  
      function deleteComment(button) {
          const commentDiv = button.closest('.box');
          commentsContainer.removeChild(commentDiv);
      }
