var divElement = document.querySelector('#app');
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");



function getRepos(){
    var username = inputElement.value;

    var xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.github.com/users/'+ username + '/repos');
    xhr.send(null);


    function carregando(){
        
    }


    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var reposList =  JSON.parse(xhr.responseText);

                var ulElement = document.createElement('ul');

                var pElement = document.createElement('p');
                var pText = document.createTextNode(username);

                pElement.appendChild(pText);
                ulElement.appendChild(pElement);




                reposList.forEach(repos => {
                    var liElement = document.createElement('li');
                    var liText = document.createTextNode(repos.name);
                    //console.log(repos);

                    liElement.appendChild(liText);
                    ulElement.appendChild(liElement);
                });
                divElement.appendChild(ulElement);

            }            
        }
    }

    inputElement.value = '';
};
