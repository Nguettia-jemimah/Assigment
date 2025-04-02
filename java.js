document.addEventListener("DOMContentLoaded", function () {
  // ✅ 1. Highlight Active Navbar Link
  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function (event) {
          document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
          this.classList.add("active");
      });
  });

  // ✅ 2. Search Functionality
  document.getElementById("bis").addEventListener("input", function () {
      let searchQuery = this.value.toLowerCase();
      let blogPosts = document.querySelectorAll(".blog-post");

      blogPosts.forEach(post => {
          let title = post.querySelector(".title").textContent.toLowerCase();
          if (title.includes(searchQuery)) {
              post.style.display = "flex";
          } else {
              post.style.display = "none";
          }
      });
  });

  // ✅ 3. Follow Button Toggle
  document.querySelectorAll(".follow-btn").forEach(button => {
      button.addEventListener("click", function () {
          if (this.textContent === "Follow") {
              this.textContent = "Following";
              this.classList.add("following");
          } else {
              this.textContent = "Follow";
              this.classList.remove("following");
          }
      });
  });

  // ✅ 4. Like Button Functionality
  document.querySelectorAll(".like-btn").forEach(button => {
      button.addEventListener("click", function () {
          let likeCount = this.nextElementSibling;
          let count = parseInt(likeCount.textContent);

          if (this.classList.contains("liked")) {
              count--;
              this.classList.remove("liked");
          } else {
              count++;
              this.classList.add("liked");
          }
          likeCount.textContent = count;
      });
  });

  // ✅ 5. Comment Button Functionality
  document.querySelectorAll(".comment-btn").forEach(button => {
      button.addEventListener("click", function () {
          let commentCount = this.nextElementSibling;
          let count = parseInt(commentCount.textContent);
          count++;
          commentCount.textContent = count;
      });
  });
});
