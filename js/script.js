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

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const arrayCardsDom = document.querySelectorAll('.card');
console.log(arrayCardsDom);

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

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(team);
for ( let i = 0; i < team.length; i++) {
    let teamMember = team[i];
    let elCard = arrayCardsDom[i];

    console.log(teamMember.img);
    console.log(teamMember.nome);
    console.log(teamMember.ruolo);

    elCard.innerHTML += `<img src="img/${teamMember.img}" alt="foto membro del team">
                        <h3>${teamMember.nome}</h3>
                        <div>${teamMember.ruolo}</div>`;
    /*
    for ( let key in teamMember ) {

        console.log(teamMember[key]);

        // MILESTONE 2:
        // Stampare le stesse informazioni su DOM sottoforma di stringhe 
        let elCard = arrayCardsDom[i];
        elCard.innerHTML += `${key} is ${teamMember[key]} - `;

    }*/
}
