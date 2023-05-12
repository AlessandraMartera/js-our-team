/*
    DATI:
    nome                ruolo                   img
    Wayne Barnett	    Founder & CEO	        wayne-barnett-founder-ceo.jpg
    Angela Caroll	    Chief Editor	        angela-caroll-chief-editor.jpg
    Walter Gordon	    Office Manager	        walter-gordon-office-manager.jpg
    Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
    Scott Estrada	    Developer	            scott-estrada-developer.jpg
    Barbara Ramos	    Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const team = [
    {
        'nome': "Wayne Barnett",
        'ruolo': "Founder & CEO",
        'img': "wayne-barnett-founder-ceo.jpg"
    },
    {
        'nome': "Angela Caroll",
        'ruolo': "Chief Editor",
        'img': "angela-caroll-chief-editor.jpg"
    },
    {
        'nome': "Walter Gordon",
        'ruolo': "Office Manager",
        'img': "walter-gordon-office-manager.jpg"
    },
    {
        'nome': "Angela Lopez",
        'ruolo': "Social Media Manager",
        'img': "angela-lopez-social-media-manager.jpg"
    },
    {
        'nome': "Scott Estrada",
        'ruolo': "Developer",
        'img': "scott-estrada-developer.jpg"
    },
    {
        'nome': "Barbara Ramos",
        'ruolo': "Graphic Designer",
        'img': "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(team.length);

console.log(team);
for ( let i = 0; i < team.length; i++) {
    let teamMember = team[i];
    
    for ( let key in team[i] ) {
        console.log(key, teamMember[key]);
    }
}

/*
const ciccio = {
    'nome': "Wayne Barnett",
    'ruolo': "Founder & CEO",
    'img': "wayne-barnett-founder-ceo.jpg"
}

for ( let key in ciccio ) {
    console.log(ciccio[key]);
}
*/
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
