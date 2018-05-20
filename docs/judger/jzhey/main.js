function appendText(){
    var li = "<li><textarea class='txta1'></textarea><textarea class='txta2'></textarea><button class='btn1'>Delete</button></li>"
    $("#addTesting").append(li);        // 追加新元素
}

function  delTextarea() {
    $("#addTesting").empty();
}

function delOne() {
  console.log( $(this));
    $(this).parent().remove();
}

$(function(){
  var langDict = {
    "PYTHON27":"python",
    "PYTHON35":"python",
    "JAVA8":"java",
    "C":"c_cpp",
    "CPP":"c_cpp"
  }
  $("#doc-select-1").click(function() {
    var lan = $("#doc-select-1").val();
    if (lan == "-Select the language-") {
      return;
    }
    editor.getSession().setMode("ace/mode/" + langDict[""+lan]);
  })
  $("#submitBtn").click(function(){
    var lan = $("#doc-select-1").val();
    //var code  = $(".ace_content").text();
    var code  = editor.getValue();
    var limitTime = $(".limitTime").val();
    var limitMemory =$(".limitMemory").val();
    var a = $("#addTesting").children();
    var len = a.length;
    var inputCode = null,outputCode = null;
    var testArr = [];
    for(var i = 0;i<len;i++){
        inputCode = $(".txta1").eq(i).val();
        outputCode = $(".txta2").eq(i).val();
        var obj = {stdin: inputCode, stdout: outputCode}
        testArr.push(obj);
    }
    var httpID = $(".httpID").val();

    $.ajax({
        type: 'POST',
        url: httpID,
        data: JSON.stringify({
          lang:lan,
          source_code:code,
          time_limit: parseInt(limitTime),
          memory_limit: parseInt(limitMemory),
          test_cases:testArr
        }),
        //contentType: "application/json",
        contentType:"application/json;charset=UTF-8",
        processData:false,
        success: function (data,status) {
          data = JSON.stringify(data,null,'\t');
          $(".backOutput").text(data);
        },
    });
  });
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/java");
    $("body").on("click", ".btn1", function(){
        // console.log($(this).parent().html());
        $(this).parent().remove();
    });
});
