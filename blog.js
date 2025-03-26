
const blogList = document.getElementById('blog-list');
const blogDetail = document.getElementById('blog-detail');
const loadingIndicator = document.querySelector('.loading');

async function fetchBlogs() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const blogs = await response.json();
    const users = await usersResponse.json();

    blogList.innerHTML = blogs.map(blog => {
        const user = users.find(user => user.id === blog.userId);
        return `
            <article onclick="viewBlog(${blog.id})">
                <img src="https://source.unsplash.com/120x120/?technology,writing" alt="Blog Image">
                <div class="blog-content">
                    <h2>${blog.title}</h2>
                    <p>${blog.body.replace(/(?:\r\n|\r|\n)/g, ' ').substring(0, 100)}...</p>
                    <small>By: ${user.name}</small>
                </div>
            </article>
        `;
    }).join('');

    loadingIndicator.style.display = 'none';
    blogList.style.display = 'block';
}

async function viewBlog(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await response.json();
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${blog.userId}`);
    const user = await userResponse.json();

    blogDetail.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.body.replace(/(?:\r\n|\r|\n)/g, ' ')}</p>
        <p><strong>Author:</strong> ${user.name} (${user.email})</p>
        <button onclick="goBack()">Back</button>
    `;
    blogList.style.display = 'none';
    blogDetail.style.display = 'block';
}

function goBack() {
    blogList.style.display = 'block';
    blogDetail.style.display = 'none';
}

fetchBlogs();

