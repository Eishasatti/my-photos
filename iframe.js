const container = document.getElementById('container')
document.getElementById('s1').addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
  container.style.height = '300px';

                const query = event.target.value.trim();
                if (query) {
                    const blogSearchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}+blog`;
                    const imageSearchUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
                    document.getElementById('blogFrame').src = blogSearchUrl;
                    document.getElementById('imagesFrame').src = imageSearchUrl;
                }
            }
        });