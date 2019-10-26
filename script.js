var turn = true;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
function action(coord) {

  if (turn) {
    document.getElementById(coord).innerHTML = 'X';
  } else {
      document.getElementById(coord).innerHTML = 'O';
    }
  var A1 = document.getElementById('A1').innerHTML;
  var A2 = document.getElementById('A2').innerHTML;
  var A3 = document.getElementById('A3').innerHTML;
  var B1 = document.getElementById('B1').innerHTML;
  var B2 = document.getElementById('B2').innerHTML;
  var B3 = document.getElementById('B3').innerHTML;
  var C1 = document.getElementById('C1').innerHTML;
  var C2 = document.getElementById('C2').innerHTML;
  var C3 = document.getElementById('C3').innerHTML;

  if (A1 == B1 && B1 == C1) {
    setWinner(A1);
  }  if (A2 == B2 && B2 == C2) {
      setWinner(A2);
    }  if (A3 == B3 && B3 == C1) {
        setWinner(A3);
      }  if (A1 == A2 && A2 == A3) {
            setWinner(A1);
          }  if (B1 == B2 && B2 == B3) {
                setWinner(B1);
              }  if (C1 == C2 && C2 == C3) {
                  setWinner(C1);
                }  if (A1 == B2 && B2 == C3) {
                    setWinner(A1);
                  }  if (C1 == B2 && B2 == A3) {
                      setWinner(C1);
                    }
  turn = !turn;
}
function setWinner(symbol) {
  let winner = '';
  if(symbol == 'X') {
    winner = 'Player1';
  } else if(symbol == 'O') {
      winner = 'Player2';
    }

  if(winner) {
    document.getElementById('win').innerHTML = winner;
    modal.style.display = 'block';
  }

  span.onclick = function() {
    modal.style.display = 'none';
    this.location.reload();
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      this.location.reload();
    }
  }
}