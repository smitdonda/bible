//create the innerhtml div and img tag
document.body.innerHTML = `
<div class="heading-container">
    <h2>Bidle Data</h2>
    <img src="https://static3.depositphotos.com/1000947/152/i/600/depositphotos_1523697-stock-photo-old-book-with-ray-of.jpg" class = "img-fluid. max-width: auto">
</div>
<div id = "mainContainer" class = "main-container"></div>;
`;
//fetch the api link

const getData = async () => {
    try {
        const data = await fetch ("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10")
        const bible = await data.json();
        
        mainContainer.innerHTML ="";
        bible.verses.forEach((data) => {
            displaydata(data)
        });
    }

    //print the in console log  error
    catch (error) {
        console.log(error);
    }
};

getData();
//display data in innerHTML of bible
const displaydata = (obj)=>{
    mainContainer.innerHTML +=`
        <div class="container main-container" id = "demo">
            <h3 class="blue"> Book id: <span>${obj.book_id}</span> </h3>
            <p>Book Name: <span>${obj.book_name}</span></p>
            <p>Chapter: <span>${obj.chapter}</span></p>
            <p>Verse: <span>${obj.verse}</span></p>
            <p>Text: <span>${obj.text}</span></p>
        </div>`
};
