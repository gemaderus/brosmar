console.log("Congratulations! You are set!");

var blocks = document.querySelectorAll("pre code");

[].forEach.call(blocks, function(block){
  var html = block.innerHTML;
  html = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
  block.innerHTML = html;
});

console.log("escaped");

Prism.highlightAll();
