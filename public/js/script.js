function submit_form() {
    var form = document.getElementById("search_form").onkeydown = function (e) {
        if (e.which === 13) {
            form.submit();
        }
    }
}

function showDiv() {
    document.getElementById('logout-div').style.display = "block";
    document.getElementById('modal').style.display = "block";
}

function showDeleteDiv(){
    document.getElementById('delete-div').style.display = "block";
    document.getElementById('delete-modal').style.display = "block";
}



function displayTime() {
    const date_ob = new Date()
    if (date_ob.getMinutes < 10) {
        //document.getElementById("the-time").innerHTML = date_ob.getHours() + ":0" + date_ob.getMinutes();
        return date_ob.getHours() + ":0" + date_ob.getMinutes();
    } else {
        //document.getElementById("the-time").innerHTML = date_ob.getHours() + ":" + date_ob.getMinutes();
        return date_ob.getHours() + ":" + date_ob.getMinutes();
    }
    
}
//displayTime();
document.addEventListener("DOMContentLoaded", async ()=>{
    const cal = Calendar('calendar');
    const spr = Spinner('calendar'); 
    await spr.renderSpinner().delay(0);
    cal.bindData(mockData);
    cal.render();
  });

  $('#input_starttime').pickatime({});
