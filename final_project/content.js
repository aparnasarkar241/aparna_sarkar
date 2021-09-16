alert("do it fast")

let html=`<div class="foms">
<form class="formss" method="post">  
<div class="noti_title">
<label>Notification Title</label><br>
<input type="text" id="title" placeholder="Write Title">
<img src="/images/search48.png" alt="icon" id="icon">
</div>
<div class="noti_mssge">
<label>Notification Message</label><br>
<textarea placeholder="Write Noification" id="Txtarea" style="height: 200px;"></textarea>

</div>
<div class="sub_button">
    <button type="submit" id="notice">Submit</button>
</div>
</form>
</div>`;



const myName='Aparna';
document.title = myName;
document.querySelector("body").insertAdjacentHTML('beforeend',html);