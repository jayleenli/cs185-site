
//For image clicking	
modal = document.getElementById("lightbox-modal");
function expandImage(elem) {
    const images = document.querySelector("#photo-col").childNodes;
    //Check that there is some images inside the photo collection
    console.log(elem);
    if (images.length > 0) {
        
        document.getElementById("modal-img").src = elem.src;
        modal.style.display = "flex";
        imageName = elem.src.split('/').pop();
        imageName = imageName.split('.')[0];
        console.log(imageName);
        switch (imageName) {
            case "kimbap":
                $('#caption').text('Made some kimbap during quarantine!'); break;
            case "spam_musubi":
                $('#caption').text('Made some spam musubis during quarantine!'); break;
            case "seaturtles":
                $('#caption').text('Some sea turtles I saw on a Hawaiian beach.'); break;
            case "stickers":
                $('#caption').text('I like stickers a lot and these are some of my recent additions to my collection I got from campus fundraisers.'); break;
            case "stickers2":
                $('#caption').text('Stickers I got from Twitchcon! The Nezuko one is great.'); break;
            case "soap":
                $('#caption').text('Carved this out of soap when I was bored.'); break;
            case "soap2":
                $('#caption').text('Carved this out of soap when I was bored.'); break;
            case "dontdead":
                $('#caption').text('At universal studios!'); break;
            case "viet_coffee":
                $('#caption').text('Definitely not a coffee addict.'); break;
            case "chicago_airport":
                $('#caption').text('Chicago airport has this really cool underground bridge!'); break;
            case "takoyaki":
                $('#caption').text('Delicious takoyaki :)'); break;
            case "tattoo":
                $('#caption').text('A \"tattoo\" my roomate drew on me'); break;
            case "tattoo2":
                $('#caption').text('Another \"tattoo\" of a great meme.'); break;
            case "tattoo3":
                $('#caption').text('Another \"tattoo\" of a great meme.'); break;
            case "doggo":
                $('#caption').text('A dog at my workplace!'); break;
            case "cat":
                $('#caption').text('Cat cafe in Santa Barbara got those cute cats.'); break;
            case "twitchcon":
                $('#caption').text('Took a picture with a random twich streamer... I thought she was lily pichu but she was one of her friends... still cool!'); break;
            case "twitchcon2":
                $('#caption').text('GAME OF KEYBOARDS'); break;
            case "twitchcon3":
                $('#caption').text('Another twitchcon picture!'); break;
            case "turtle_collection":
                $('#caption').text('I like collecting turtles in my free time, definitely not a problem...'); break;
            case "portal_cube":
                $('#caption').text('I made this portal cube for my friend!'); break;
            case "ditto":
                $('#caption').text('I like the ditto pokemon plushie series...'); break;
            case "candle":
                $('#caption').text('Made this candle in Santa Cruz!'); break;
            case "kcon":
                $('#caption').text('Saw my queens MAMAMOO at Kcon 2019 <3'); break;
            case "doggo2":
                $('#caption').text('A doggo at work!'); break;
            case "doggo3":
                $('#caption').text('Another doggo at work!'); break;
            case "mac":
                $('#caption').text('A original Apple Mac someone brought into work!'); break;
            case "banana_slug":
                $('#caption').text('Saw some real banana slugs.'); break;
            case "squirtle":
                $('#caption').text('Tried to make a squirtle from the squirtle squad with polymer clay LOL'); break;
            case "turtles":
                $('#caption').text('Turtles at the UCSB pond!'); break;
            case "avocados":
                $('#caption').text('I have these avocado plushies and I made the rightmost one out of felt to continue the chain :D'); break;
            case "boba":
                $('#caption').text('Cool boba flavors at a boba shop in LA!'); break;
            case "tjturtle":
                $('#caption').text('Just a normal Sunday watching fishing videos with my turtle.'); break;
            case "turtlepenguin":
                $('#caption').text('Some more felt creations I made.'); break;
        }
    }
}
modal.addEventListener("click", e=>{
    //console.log(e.target);
    //console.log(e.currentTarget);
    if(e.target != e.currentTarget)
        return;
    modal.style.display = "none";
})	