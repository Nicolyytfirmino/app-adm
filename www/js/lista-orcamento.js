
    var $$ = Dom7;

    $$(document).on('page:init', '.page[data-name="form"]', function (e) {
        firebase.database().ref('orcamento').on('value', function (snapshot){
            //usersList.innerHTML = '';
            $$("#usersList").empty();
        
            snapshot.forEach(function(item){
                  var listHtml = '<div class="row block block-strong">';
                  listHtml += '<div class="col-20">'+ item.val().nome +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().email +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().endereco +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().bairro +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().cidade +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().estado +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().cidade +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().telefone +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().finalidade +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().comodo +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().metragem +'</div>';
                    listHtml += '<div class="col-5">'+ item.val().dia +'</div>';
                    listHtml += '</div>';
                    //e.append(listHtml).innerHTML;
                    $$("#usersList").append(listHtml);
        
                
            })
        })
        
    });
   