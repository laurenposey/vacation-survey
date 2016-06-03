// backend

var peruCount = 0;
var greeceCount = 0;
var indiaCount = 0;

var evalQuestion = function (res) {
  if (res==="greece") greeceCount++;
  if (res==="peru") peruCount++;
  if (res==="india") indiaCount++;
}

var returnResult = function () {
  if (greeceCount>peruCount && greeceCount>indiaCount) {
    $("#greece").show();
  } else if (peruCount>greeceCount && peruCount>indiaCount) {
    $("#peru").show();
  } else {
    $("#india").show();
  }
}

// frontend

$(document).ready(function(){
  $("form#vacaSurvey").submit(function(event){
    event.preventDefault();
    evalQuestion($("#animal").val());
    evalQuestion($("#activity").val());
    evalQuestion($("#personality").val());
    evalQuestion($("#food").val());
    evalQuestion($("#fabric").val());


    $("#result").text(returnResult());
  });
});
