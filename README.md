<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <label>请输入北京今天空气质量：<input id="aqi-input" type="text" value=""></label>
  <button id="button" onclick="show()">确认填写</button>

  <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

<script type="text/javascript">

function show() {

     var value = document.getElementById("aqi-input").value;
     document.getElementById("aqi-display").innerHTML = value;

}

</script>
</body>
</html>
