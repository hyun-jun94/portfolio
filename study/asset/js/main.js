$(function(){
  
    function loadAjax(searchText){

        $.ajax({
                type: "GET",
                dataType: "JSON",
                url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchText + "&channelType=any&type=video&maxResults=9&key=AIzaSyD8zrrhBsRCSkxZfobaf7jXw8K9G-Tyt7A",
                contentType: "application/json",
                success: function (jsonData) {
                    
                    
                html = ''
                var detailUrl = "https://www.youtube.com/watch?v=";

                for (var i = 0; i < jsonData.items.length; i++) {
                    var items = jsonData.items[i];
                        html += '<div class="cont-item">';
                        html += '<a href="' + detailUrl + items.id.videoId + '">';
                        html += '<div class="thumbnail">';
                        html += '<img src="' + items.snippet.thumbnails.high.url + '" alt="">'
                        html += '</div>';
                        html += '<div class="txt-box">';
                        html += '<p class="title">' + items.snippet.title + '</p>';
                        html += '<span class="ch-name">' + items.snippet.channelTitle + '</span>';
                        html += '</div>';
                        html += '</a>';
                        html += '</div>';
                        html += '</div>';
                        html += '</section>';
                    // console.log("title : "+items.snippet.title);
                    // console.log("videoId : "+"https://youtu.be/"+items.snippet.resourceId.videoId);
                    // console.log("썸네일 : "+items.snippet.thumbnails.high.url);
                }
                $('.cont-list').html(html);
            },
            complete: function (data) {},
            error: function (xhr, status, error) {
                console.log("유튜브 요청 에러: " + error);
            }
        });

    }
    loadAjax('웹퍼블리셔'); //로딩시 실행

    $("#searchFrom").submit(function(){ //검색이벤트 실행

        searchText = $('#searchText').val()
        
        if(searchText == ''){ //검색어가 없을시
            alert('검색어를 입력하세요');
            return false;
        }else{ //검색어가 있을시 loadAjax 로딩을 시작한다
            loadAjax(searchText); 
            return false;  //비동기화
        }
    });

    $('.search-nav a').click(function(){ //텍스트 클릭 이벤트 실행
        searchText = $(this).text();
        loadAjax(searchText);
    })

});