// Yup, portals
// https://github.com/WICG/portals
// visit chrome://flags/#enable-portals, to enable the experimental feature

const portal = HTMLPortalElement ? document.createElement('portal') : null;

function changePortal(e) {
    e.preventDefault()
    portal.classList.add('portal-transition');
    portal.addEventListener('click', (evt) => {
      // Animate the portal once user interacts
      portal.classList.add('portal-reveal');
    });
    portal.addEventListener('transitionend', (evt) => {
      if (evt.propertyName == 'transform') {
        // Activate the portal once the transition has completed
        portal.activate();
      }
    });
    portal.src = e.target.href
}


if(portal) {
  document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', changePortal)
  })
  document.body.appendChild(portal)
}