window.addEventListener('load', function () {
    const body = this.document.querySelector('body');
    const imgDiv = this.document.createElement('div');
    const h1 = this.document.createElement('h1');
    const h2 = this.document.createElement('h2');
    const p = this.document.createElement('p');
    const ul = this.document.createElement('ul');
    const a = this.document.createElement('a');
    const aDiv = this.document.createElement('div');
    const divItem = this.document.createElement('div');
    const divCard = this.document.createElement('div');
    const listSvg = ['img/free-icon-instagram-1384031.svg', 'img/1485969399-twitersocialnetworkbrandlogo_78853.svg', 'img/global_114550.svg', 'img/FB_icon-icons.com_65484.svg']
    const listElements = [imgDiv, h1, h2, p, ul, aDiv];


    // const img = this.document.createElement('img');
    // img.setAttribute('src', 'img/photo_2021-07-30_19-48-08.jpg');
    // img.setAttribute('alt', 'foto women');
    // imgDiv.appendChild(img);
    imgDiv.setAttribute('class', 'card__foto');
    h1.append('Asel Alimbaeva');
    h2.setAttribute('class', 'card__title')
    h2.append('CEO & Founder');
    p.append('Oxford university');

    for (let i = 0; i < listSvg.length; i++) {
        let li = this.document.createElement('li');
        let img = this.document.createElement('img');
        img.setAttribute('src', `${listSvg[i]}`);
        img.setAttribute('alt', 'link-svg');
        li.append(img);
        ul.append(li);
    }

    a.setAttribute('href', '#');
    a.setAttribute('class', 'card__link');
    a.append('Contact');
    aDiv.setAttribute('class', 'card__linck-bloc');
    aDiv.append(a);

    divItem.setAttribute('class', 'card__item');
    for (let i = 0; i < listElements.length; i++) {
        divItem.append(listElements[i]);
    }

    divCard.setAttribute('class', 'card');
    divCard.append(divItem);

    body.append(divCard);

    console.log(divCard);
})