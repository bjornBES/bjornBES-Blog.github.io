function LoadPageContents()
{
    fetch('../assets/FixedFiles.html')
    .then(response => response.text())
    .then(text => document.getElementById('LoadedPageContent').innerHTML = text);

    fetch('../assets/navbar.html')
    .then(response => response.text())
    .then(text => document.getElementById('Navbar').innerHTML = text);

    fetch('../assets/footer.html')
    .then(response => response.text())
    .then(text => document.getElementById('footer').innerHTML = text);
}