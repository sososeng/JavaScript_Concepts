<div id="subTree">
  <form>
    <input type="text"/>
  </form>
  <p>Paragraph</p>
  <span>Span</span>
</div>

<script>
  function traverseDOM(element, callback) {
    callback(element);
    element = element.firstElementChild;
    while (element) {
      traverseDOM(element, callback);
      element = element.nextElementSibling;
    } 
  }
  const subTree = document.getElementById("subTree");

  traverseDOM(subTree, function(element) {
    if(element !== null){
      console.log(element.nodeName);
    }
  });
</script>