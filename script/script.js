const data = 
{
    'win' : 0,
    'loose' : 0,
    'tie' : 0,
}

const gameHistory = [];
let gameHistoryData = ``;

function printOp(element){
    const userMove = new String(element.id);
    console.log(`user move is ${userMove}`);


    if(userMove == 'reset-game')
    {
        gamesHistory();

        data.win = 0;
        data.loose = 0;
        data.tie = 0;
        
        console.clear();
        console.log(`Game Data has been reset...`);
    }
    else 
    {
        const moves = ["rock", "paper", "scissors"];
        const computerMove = moves[Math.floor(Math.random()*3)];
        console.log(`Computer's move is ${computerMove}`);

        if((userMove == "scissors" && computerMove =="rock") || (userMove == "rock" && computerMove =="paper") || (userMove == "paper" && computerMove =="scissors"))
        {
            console.log(`The Computer Wins...`);
            data.loose++;
        }
        else if(userMove == computerMove)
        {
            console.log(`Its a Tie...`);
            data.tie++;
        }
        else 
        {
            console.log(`You Win...`);
            data.win++;
        }
        console.log(`\n Game Summary is - `)
        console.table(data);
        console.log(`Total Games: ${data.win + data.loose + data.tie}`);

    }

    gameSummary();
}

function gameSummary ()
{
    document.getElementById('wins').innerHTML = data.win;
    document.getElementById('looses').innerHTML = data.loose;
    document.getElementById('ties').innerHTML = data.tie;
    document.getElementById('games-played').innerHTML = (data.win + data.loose + data.tie);
}

function gamesHistory ()
{
    gameHistory.push({
        'win' : data.win,
        'loose' : data.loose,
        'tie' : data.tie,
        'games-played' : (data.win + data.loose + data.tie),
    });

    console.log();

    if(gameHistory.length-1 == 0)
    {
        gameHistoryData = 
        `
         <tr>
             <th>Wins</th>
             <th>Looses</th>
             <th>Ties</th>
             <th>Games Played</th>
         </tr>
         <tr>
             <td>${gameHistory[gameHistory.length-1].win}</td>
             <td>${gameHistory[gameHistory.length-1].loose}</td>
             <td>${gameHistory[gameHistory.length-1].tie}</td>
             <td>${gameHistory[gameHistory.length-1]['games-played']}</td>
         </tr>
         `
    }

    else
    {
        gameHistoryData += 
        `<tr>
            <td>${gameHistory[gameHistory.length-1].win}</td>
            <td>${gameHistory[gameHistory.length-1].loose}</td>
            <td>${gameHistory[gameHistory.length-1].tie}</td>
            <td>${gameHistory[gameHistory.length-1]['games-played']}</td>
        </tr>`
    }



    document.getElementById('newData').innerHTML = gameHistoryData;

}

