$(document).ready(function(){
    $('#Send').click(function(){
       /* const Ipfiles=document.getElementById("files");
        console.log(Ipfiles.files)
        const button=document.getElementById("Send");
        //const xhr=new XMLHttpRequest();
        const formdata=new FormData();
        for(const file of Ipfiles.files){
            formdata.append("myfiles",file)
        }
        console.log(formdata);        
        $.ajax({
            processData: false,
            contentType: false,
            type: "POST",
            url: "/upload",  
            data: {
                
                    data:formdata,
                    csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),        
                }, 
            success:  function(data){
              
                 alert("sucessful")
               }
        });*/
        var data = new FormData();
        $.each($("#files")[0].files, function(i, file){
            data.append("file", file);
        });
        data.append("csrfmiddlewaretoken", $('input[name=csrfmiddlewaretoken]').val());
        console.log(data);        
        $.ajax({
            type: "POST",
            url: "/upload/",  
            data:data,
            processData: false,
            contentType: false,
            success:  function(data){
              
                 alert("sucessful")
                 for(var i in data){
                    var aTag = document.createElement('a');
                    aTag.setAttribute('href',"{{i.file.url}}");
                    aTag.innerText = i.url;
                    $("#right").append(aTag);
                 }
                     
                 
               
        }
        });
    });
    });