const DOG_URL = "https://random.dog/woof.json";

const dogg = document.getElementById("doggo-target");

async function getPic() {
  const promise = await fetch(DOG_URL);
  console.log(promise);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.url;
  img.alt = "Cute DOGGO!";
  img.style.width = "300px";
  img.style.height = "200px";
  img.style.objectFit = "cover";
  dogg.appendChild(img);
}

document.getElementById("doggo-dispenser").addEventListener("click", getPic);