function LoadTopBar()
{
    fetch('../navbar.html')
    .then(response => response.text())
    .then(text => document.getElementById('Navbar').innerHTML = text);
    LoadBlog();
}