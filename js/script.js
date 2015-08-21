$(document).ready(function(){
	var player = 'x', //the first step is X
		step = 0, // counting steps
		sqr1 = $('#tl'), //easy names for cells
		sqr2 = $('#tm'),
		sqr3 = $('#tr'),
		sqr4 = $('#cl'),
		sqr5 = $('#cm'),
		sqr6 = $('#cr'),
		sqr7 = $('#bl'),
		sqr8 = $('#bm'),
		sqr9 = $('#br'),
		unbind = function(){   //function to stop looking for clicks on cells
			$('.table-cell').unbind('click');
		}

	$('.table-cell').on('click', function(){  //looking for clicks
		if (!$(this).hasClass('busy')) { // if this cell is NOT busy
			if (player == 'x') { //to check whoes step is now. If it is X player, then
				$(this).html('<span>x</span>').addClass('x'); // then add X to cell and class, count steps, change player
				player ='o';
				$('.line span').text('o');
				step += 1;
			} else {
				$(this).html('<span>o</span>').addClass('o'); //if not - the same for another player
				player ='x';
				$('.line span').text('x');
				step += 1;
			}
			$(this).addClass('busy'); // add to this cell class 'busy'
			if (sqr1.hasClass('o') && sqr2.hasClass('o') && sqr3.hasClass('o') ||   //checks winning compositions for O player - 3 row, 3 columns and 2 diagonals
				sqr4.hasClass('o') && sqr5.hasClass('o') && sqr6.hasClass('o') ||
				sqr7.hasClass('o') && sqr8.hasClass('o') && sqr9.hasClass('o') ||
				sqr1.hasClass('o') && sqr4.hasClass('o') && sqr7.hasClass('o') ||
				sqr2.hasClass('o') && sqr5.hasClass('o') && sqr8.hasClass('o') ||
				sqr3.hasClass('o') && sqr6.hasClass('o') && sqr9.hasClass('o') ||
				sqr1.hasClass('o') && sqr5.hasClass('o') && sqr9.hasClass('o') ||
				sqr3.hasClass('o') && sqr5.hasClass('o') && sqr7.hasClass('o')) {
				alert('Player O win!'); // if any of this composition works - game is over - O player win
				unbind();
				setTimeout(function(){location.reload()},3000);
			}
			else if (sqr1.hasClass('x') && sqr2.hasClass('x') && sqr3.hasClass('x') || //the same for X player
					sqr4.hasClass('x') && sqr5.hasClass('x') && sqr6.hasClass('x') ||
					sqr7.hasClass('x') && sqr8.hasClass('x') && sqr9.hasClass('x') ||
					sqr1.hasClass('x') && sqr4.hasClass('x') && sqr7.hasClass('x') ||
					sqr2.hasClass('x') && sqr5.hasClass('x') && sqr8.hasClass('x') ||
					sqr3.hasClass('x') && sqr6.hasClass('x') && sqr9.hasClass('x') ||
					sqr1.hasClass('x') && sqr5.hasClass('x') && sqr9.hasClass('x') ||
					sqr3.hasClass('x') && sqr5.hasClass('x') && sqr7.hasClass('x')) {
				alert('Player X win!');  // if any of this composition works - game is over - X player win
				unbind();
				setTimeout(function(){location.reload()},3000);
			}
		}
		else { alert("This cell is busy already. Choose an empty one"); } //if cleck to busy cell
		if (step == 9) { 
			unbind(); 
			alert('Draw. Try one more time'); //if steps are over - draw
			setTimeout(function(){location.reload()},3000);
		}; 
	});


});