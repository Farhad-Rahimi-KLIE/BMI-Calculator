
function fortune()
{
    var luck = new Array();
    
    
    
    luck.push("A beautiful, smart, and loving person will be coming into your life.");
    luck.push("A dubious friend may be an enemy in camouflage.");
    luck.push("A faithful friend is a strong defense.");
    luck.push("A feather in the hand is better than a bird in the air. (2)");
    luck.push("A fresh start will put you on your way.");
    luck.push("A friend asks only for your time not your money.");
    luck.push("A friend is a present you give yourself.");
    luck.push("A gambler not only will lose what he has, but also will lose what he doesn’t have.");
    luck.push("A golden egg of opportunity falls into your lap this month.");
    luck.push("A good friendship is often more important than a passionate romance.");
    luck.push("A good time to finish up old tasks. (2)");
    luck.push("A hunch is creativity trying to tell you something.");
    luck.push("A lifetime friend shall soon be made.");
    luck.push("A lifetime of happiness lies ahead of you.");
    luck.push("A light heart carries you through all the hard times.");
    luck.push("A new perspective will come with the new year. (2)");
    luck.push("A person is never to (sic) old to learn. (2)");
    luck.push("A person of words and not deeds is like a garden full of weeds.");
    luck.push("A pleasant surprise is waiting for you.");
    luck.push("A short pencil is usually better than a long memory any day.");
    luck.push("A small donation is call for. It’s the right thing to do.");
    luck.push("A smile is your personal welcome mat.");
    luck.push("A smooth long journey! Great expectations.");
    luck.push("A soft voice may be awfully persuasive.");
    luck.push("A truly rich life contains love and art in abundance.");
    luck.push("Accept something that you cannot change, and you will feel better.");
    luck.push("Adventure can be real happiness.");
    luck.push("Advice is like kissing. It costs nothing and is a pleasant thing to do.");
    luck.push("Advice, when most needed, is least heeded.");
    luck.push("All the effort you are making will ultimately pay off.");
    luck.push("All the troubles you have will pass away very quickly.");
    luck.push("All will go well with your new project.");
    luck.push("All your hard work will soon pay off.");
    luck.push("Many will travel to hear you speak.");
    luck.push("All your hard work will soon pay off.");
    luck.push("Any decision you have to make tomorrow is a good decision.");
    luck.push("Competence like yours is underrated.");
    luck.push("Better ask twice than lose yourself once.");

    
    
    
    let fortune=(Math.floor(Math.random()*luck.length));
    
    alert("Your Fortune: "+luck[fortune]);
    var node=document.getElementById('myb');
    node.style.visibility='hidden';
}