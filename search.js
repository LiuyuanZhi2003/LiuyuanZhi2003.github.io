var pages = [
  { title: "home", content: "这是页面1的内容。" },
  { title: "service", content: "这是页面2的内容。" },
  { title: "about", content: "这是页面3的内容。" },
  
];

// 获取DOM元素
var searchInput = document.getElementById("search-input");
var searchResults = document.getElementById("search-results");

// 搜索功能的实现
function search() {
  var searchTerm = searchInput.value.toLowerCase();
  var matches = [];

  // 遍历页面数组，找到匹配的页面
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (page.title.toLowerCase().includes(searchTerm) || page.content.toLowerCase().includes(searchTerm)) {
      matches.push(page);
    }
  }

  // 清空搜索结果
  searchResults.innerHTML = "";

  // 显示搜索结果
  if (matches.length > 0) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];
      var result = document.createElement("div");
      result.innerHTML = "<h3>" + match.title + "</h3><p>" + match.content + "</p>";
      searchResults.appendChild(result);
    }
  } else {
    searchResults.innerHTML = "未找到匹配的结果。";
  }
}

// 监听搜索框的键盘事件
searchInput.addEventListener("keyup", search);
