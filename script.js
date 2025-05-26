function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
       let aticlePrincipaleContainer = document.getElementById("articleprincipale")
       
       let date = data.journal.articlePrincipal.date
       console.log(date);

      let description = data.journal.articlePrincipal.description
      console.log(description);
      
       let image = data.journal.articlePrincipal.image
       console.log(image);      
       
      let theme = data.journal.articlePrincipal.theme
      console.log(theme);
       
      let titre = data.journal.articlePrincipal.titre
      console.log(titre);
      

       articleprincipale.innerHTML = `<h2>${titre}</h2>
                                       <p>${description}</p>
                          <p><b>date</b>: ${date}</p>
                         <p><b>Thème</b>: ${theme}</p>
                                <img src="${image}" alt "image article">` ;  


 let aticles = document.getElementById("articles")

       date = data.journal.articles.date
       console.log(date);
    
        image = data.journal.articles.image 
       console.log(image);      
       
       theme = data.journal.articles.theme
      console.log(theme);
       
       titre = data.journal.articles.titre
       console.log(titre);
       
articles.innerHTML =     `<h2>${titre}</h2> 
              <p><b>date</b>: ${date}</p>
             <p><b>Theme</b>: ${theme}</p>
                    <img src="${image}" alt "image">`;          



date = 








       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici