var posts=["2025/01/05/alist/alist安卓/","2025/01/05/alist/alistWindows/","2025/01/04/alist/小雅alist/","2025/01/04/alist安装/","2024/12/31/Hexo使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };