if (window.location.href.includes('/topic/add')) {
    document.querySelector('.form-submit').insertAdjacentHTML('beforeBegin',`<div class="inform poll">
    <fieldset>
        <legend>Create a poll</legend>
        <div class="infldset" style="display: block;">
            <div class="rbox">
                <label for="id_question">Question:</label><input id="id_question" type="text" name="question" maxlength="200">
<label for="id_choice_count">Choice count:</label><input type="text" name="choice_count" value="1" id="id_choice_count"><br><span class="helptext">How many choices are allowed simultaneously.</span>
<label for="id_answers">Answers:</label><textarea id="id_answers" rows="10" cols="40" name="answers"></textarea><br><span class="helptext">Write each answer on a new line.</span>
<label for="id_days">Days:</label><input type="text" name="days" id="id_days"><br><span class="helptext">Number of days for this poll to run. Leave empty for never ending poll.</span>
            </div>
        </div>
    </fieldset>
</div>
`)
                                                             }
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
#poll .bar {
    height: 8px;
    background-color: royalblue!important;;
    border-radius: 3px;
    margin: 5px;
}
#poll li {
    height: 2.5em;
}
#poll {
    padding: 5px;
}

#poll > .box > .inbox {
    padding: 5px;
}

#poll > .box > .inbox >p > strong {
    font-size: 20px;
}
[class^=monitor_monitor-container] {
  background: #0004;
  color: #fff;
  border-color: #fff2;
}
[class^=monitor_value]{
  background: #0003;
}
div.inbox {
  padding: 20px;
}
div.inbox p {
    margin-bottom: 10px;
    margin-top: 5px;
}
.inbox ul li {
  overflow: hidden;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  background: #0001;
}
label {
    font-weight: bold;
}

span.helptext {
    font-style: italic;
    color: darkgray;
}

`
;
document.getElementsByTagName('head')[0].appendChild(style); 
