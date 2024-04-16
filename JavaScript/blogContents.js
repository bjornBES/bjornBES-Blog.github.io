
function LoadBlog()
{
    fetch('../blog.html')
    .then(response => response.text())
    .then(text => document.getElementById('Blog1').innerHTML = text)
    
    fetch('../blog1text.html')
    .then(response => response.text())
    .then(text => document.getElementById('BlogText1').innerHTML = text)
}
