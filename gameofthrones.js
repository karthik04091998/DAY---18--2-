async function GOTQuotes(){
    try{
        const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/random/10`,
        {
            method: 'GET',
        }
    );
    const gotQuote = await response.json();

    const gotQuotes = document.querySelector('.GOTQuotes');

    const ul = document.createElement('ul');

    gotQuote.forEach(GOT => {
        const li = document.createElement('li');
        li.textContent = GOT.sentence;
        ul.appendChild(li);
    });

    gotQuotes.appendChild(ul);

    }
    catch(err){
        console.log(err);
    }
}

GOTQuotes();