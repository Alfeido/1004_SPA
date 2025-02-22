const cardObjectDefinitions = [
    {id:1, imagePath:'images/card-KingHearts.png'},
    {id:2, imagePath:'images/card-JackClubs.png'},
    {id:3, imagePath:'images/card-QueenDiamonds.png'},
    {id:4, imagePath:'images/card-AceSpades.png'}
];

{/* <div class="card">
<div class="card-inner">
    <div class="card-front">
        <img src="images/card-JackClubs.png" alt="" class="card-img">
    </div>
    <div class="card-back>
        <img src="images/card-back-Blue.png" alt="" class="card-img">
    </div>
</div>
</div> */}

function createCard(cardItem){
    //div elements that make up a card
    const cardElem = document.createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    addClassToElement(cardInnerElem, 'card-inner')

    addClassToElement(cardFrontElem, 'card-front')

    addClassToElement(cardBackElem, 'card-back')

    

}
function createElement(elemType){
    return document.createElement('div')
}
function addClassToElement(elem, class) {
    elem.classList.add(className)
}
function addIdToElement(elem, id){
    elem.id = id
}