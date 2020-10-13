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
                alert(data);
                console.log(length.data)
                console.log(data)
                data = JSON.parse(data);
                
                
                for(var i in data){
                    console.log(i)
                    var newLine=document.createElement('br');
                    var aTag = document.createElement('a');
                    var loc="/media/"+data[i]['file']
                    aTag.setAttribute('href',loc);
                    aTag.setAttribute('download',"download")
                    var fileName=data[i]['file'];
                    var fileName=fileName.split("/")
                    aTag.innerText = fileName[1];
                    $("#right").append(aTag);
                    $("#right").append(newLine);
                }         
                               
       }
        });
    });
    });