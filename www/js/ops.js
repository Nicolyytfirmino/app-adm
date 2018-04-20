// function apagar(){
// 	var email = document.getElementById('email').value;

// 	apagadb(email);
// }

var $$ = Dom7;
$$(document).on('page:init','.page[data-name="form"]', function(e){
    var page = e.detail;
    console.log(page.name);

    $$('#apagadb').on('click',function () {
            console.log('clicou')
            //var formData = app.form.convertToData('#form-user-content')
            var name = $$('#name').val();

            
            var formData = { name: name }
            console.log(formData);
        //     alert(JSON.stringify(formData))
            firebase.database().ref().child(name).remove()
            .then( function () {
                    app.dialog.alert('Mensagem enviada!');
                    $$('input#name').val('');
                    
            }, function(error){
                    app.dialog.alert('Erro, confira no console');
                    console.error(error)
            })  
                                
            //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

    });      

});      


// function apagadb(name){
// 	return firebase.database().ref().child(name).remove();
// }

