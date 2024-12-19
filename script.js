// L’objectif est de comprendre comment fonctionne les événements en javascript. Il faut créer un cercle avec une div et un border radius, le mettre en position absolute. Et ensuite trouver la possibilité de récupérer les coordonnées de votre curseur dans votre document pour affecter les valeurs x et y à votre div en absolute.

const cercle = document.getElementById('cercle');

document.addEventListener('mousemove', (event) => {
    cercle.style.left = `${event.clientX}px`;
    cercle.style.top = `${event.clientY}px`;
})