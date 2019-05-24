  const ul = document.getElementById('recipe');
  const appId = 'f763ba97';
  const appKey = 'b1534ab1d1a19fb1ac89448c19494cf4';
  const url =  new URL ( 'https://api.edamam.com/search?q=pasta&app_id=f763ba97&app_key=b1534ab1d1a19fb1ac89448c19494cf4');
          params = {
          app_id: appId,
          app_key: appKey,
          q:"pasta"
        };

console.log('foo');


  fetch(url, {
    method: "GET",
    mode: "no-cors",
    headers: [
      ["Content-Type", "application/json"],
      ["Content-Type", "text/plain"]
    ],
    credentials: "include",
    body: JSON.stringify()
  })
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error))


    // const ul = document.getElementById('recipe');
    // const url =  new URL ('https://swapi.co/api/planets');
    //
    // fetch(url)
    // .then(data=>{return data.json()})
    // .then(res=>{console.log(res)})
    // .catch(error=>console.log(error))
