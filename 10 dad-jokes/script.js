// USING ASYNC/AWAIT

async function generateJoke(){
    const config = {
        headers: {
            Accept:'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke', config)
    
    const data = await res.json()

    jokeE1.innerHTML = data.joke
}

//USING .then()

//function generateJoke(){
//    const config = {
//        headers: {
//            Accept: 'application/json',
//       }
//    }
//
//    fetch('https://icanhazdadjoke.com', config)
//        .then((res) => res.json()//)
//        .then((data) => {
//            jokeE1.innerHTML = data.joke
//        })
//}