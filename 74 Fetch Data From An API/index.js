// fetch("https://pokeapi.co/api/v2/pokemon/dragonite")
//     .then((response) => {
//         if(!response.ok)
//         {
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then((data) => console.log(data.id))
//     .catch((error) => console.error(error));

async function fetchData()
{
    try
    {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok)
        {
            throw new Error("Could not fetch the resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonSprite");
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
    }
    catch(error)
    {
        console.error(error);
    }
}
fetchData();