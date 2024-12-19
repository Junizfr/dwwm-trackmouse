// L’objectif est de comprendre comment fonctionne les événements en javascript. Il faut créer un cercle avec une div et un border radius, le mettre en position absolute. Et ensuite trouver la possibilité de récupérer les coordonnées de votre curseur dans votre document pour affecter les valeurs x et y à votre div en absolute.

const cercle = document.getElementById('cercle');

document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;
    const rect = cercle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    cercle.style.left = `${x}px`;
    cercle.style.top = `${y}px`;
    cercle.style.setProperty('--rotation', `${angle}deg`);
});