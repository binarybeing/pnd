var Media = document.getElementById('video_player');
let i=0;
window.onload =function (){
    get("/v1/list_videos", loadVideoList);
    document.addEventListener("fullscreenchange", function (event){
        console.log(event);
        i = i+1;
        let target = event.target;
        if (i % 2 === 0) {
            console.log("exit full screen");
            target.pause();
            $(Media).css("display", "none");
        }
    })

}

function loadVideoList(data){
    console.log(data);
    if("success" === data["msg"]){
        for(let video of data["data"]){
            addVideo(video);
        }
        // let idx=0;
        // for (;idx < data["data"].length; idx = idx+2) {
        //     if(idx+1 >= data["data"].length){
        //         addVideo(data["data"][idx]);
        //     }else{
        //         addTwoVideo(data["data"][idx],data["data"][idx+1])
        //     }
        // }
    }
}
function addVideo(video){
    let div="<div class='row' style='margin: auto'>" +
            "  <div class='col-xs-12 col-md-12'>" +
            "    <a href='#' class='thumbnail play-btn' onclick=playVideo('"+video["streamUrl"]+"')>" +
            "      <img src='"+video["coverUrl"]+"' alt='' style='object-fit: fill; height: 250px'>" +
            "    </a>" +
            "    <h4>"+video["vedioName"]+"</h3><hr/>" +
            "  </div>" +
            "</div>";
    $("#app").append(div);
}
function addTwoVideo(video1, video2){
    let div="<div class='row' style='margin: auto'>" +
        "  <div class='col-xs-6 col-md-3'>" +
        "    <a href='#' class='thumbnail play-btn' onclick=playVideo('"+video1["streamUrl"]+"')>" +
        "      <img src='"+video1["coverUrl"]+"' alt='' style='object-fit: fill;height: 100px'>" +
        "    </a>" +
        "    <h4>"+video1["vedioName"]+"</h3><hr/>" +
        "  </div>" +
        "  <div class='col-xs-6 col-md-3'>" +
        "    <a href='#' class='thumbnail play-btn' onclick=playVideo('"+video2["streamUrl"]+"')>" +
        "      <img src='"+video2["coverUrl"]+"' alt='' style='object-fit: fill; height: 100px'>" +
        "    </a>" +
        "    <h4>"+video2["vedioName"]+"</h3><hr/>" +
        "  </div>" +
        "</div>";
    $("#app").append(div);
}

function playVideo(url){
    $(Media).attr("src", url);
    $(Media).css("display", "block");
    Media.play();
    Media.requestFullscreen({}).then();
}

function get(uri, onSuccess){
    $.ajax({url: uri, success: onSuccess})
}

