
    var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="galeria"]', function (e) {
    firebase.database().ref('contato').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
              listHtml += '<div class="col-20">'+ item.val().name +'</div>';
                listHtml += '<div class="col-20">'+ item.val().email +'</div>';
                listHtml += '<div class="col-20">'+ item.val().phone +'</div>';
                listHtml += '<div class="col-20">'+ item.val().assunto +'</div>';
                listHtml += '<div class="col-20">'+ item.val().bio +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});
