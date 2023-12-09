var turnNr=Math.floor(Math.random()*2), nr=0;
var turn;
if(turnNr==1)turn="X";else turn="O";
$("h2").text("Turn: "+turn);

$(".cell").click(function () { 
    if(turn==="X"){$(this).text("X");turn="O";}else {$(this).text("O");turn="X"}
    $("h2").text("Turn: "+turn);
    $(this).off("click");
    nr++;
    if(nr>=5){
        if(searchForWin("X")) winDisplay("X");
         else if(searchForWin("O")) winDisplay("O");
          else if(nr==9)
           winDisplay("Draw")
    } 
});
function searchForWin(player)
{ 
    for(i=1;i<=3;i++)
     if($(".cell"+i).text()!==player)
      for(i=4;i<=6;i++)
       if($(".cell"+i).text()!==player)
        for(i=7;i<=9;i++)
         if($(".cell"+i).text()!==player)
         for(i=1;i<=7;i+=3)
          if($(".cell"+i).text()!==player)
           for(i=2;i<=8;i+=3)
            if($(".cell"+i).text()!==player)
             for(i=3;i<=9;i+=3)
              if($(".cell"+i).text()!==player)
               for(i=1;i<=9;i+=4)
                if($(".cell"+i).text()!==player)
                 for(i=3;i<=7;i+=2)
                  if($(".cell"+i).text()!==player)

          return false;
    return true;
      
}
function winDisplay(player)
{   
    if(player=="Draw") $("h2").text("Draw! Press a key to play again..");
    else  $("h2").text(player+" win the game! Press a key to play again..");
    $(".cell").off("click");
    setTimeout(function(){$(document).click(function () { location.reload();});},200);
    $(document).keydown(function () { location.reload();});
}