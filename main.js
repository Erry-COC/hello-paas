fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        document.getElementById('output').innerText = `Hello, ${data.name || '世界'}!`;
    })
    .catch(err => {
        document.getElementById('output').innerText = '加载失败';
        console.error(err);
    });