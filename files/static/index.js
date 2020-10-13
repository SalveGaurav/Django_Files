$(document).ready(function(){
    $('#Send').click(function(){
        const Ipfiles=document.getElementById("files");
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
        });
    
    });
    });