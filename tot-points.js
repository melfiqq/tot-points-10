function points(games) {
  
    let totalPoints = 0;
 
     for (let i = 0; i < games.length; i++) {
         const match = games[i].split(':');
         const ourScore = parseInt(match[0]);
         const opponentScore = parseInt(match[1]);
 
         if (ourScore > opponentScore) {
             totalPoints += 3; // 3 points for a win
         } else if (ourScore === opponentScore) {
             totalPoints += 1; // 1 point for a tie
         }
         // No points for a loss
     }
 
     return totalPoints;
   
   return 0
 }