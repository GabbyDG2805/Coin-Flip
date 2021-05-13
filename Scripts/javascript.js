$(document).ready(function(){

	document.getElementById('btn').onclick = click;

	function click ()
	{
		//Get result of coin flip
		let result_of_coin_flip = getCoinFlipResult();

		//show result of coin flip
		showCoinFlipResult(result_of_coin_flip);

		//store result of coin flip
	}

	function getCoinFlipResult ()
	{
		let random = Math.floor(Math.random() * 12000);
		let side = "";
		let date = new Date();

		if (random <= 5998) {
			side = "heads";
		} else if (random >= 5999 && random < 11998) {
			side = "tails";
		} else if (random == 11998 || random == 11999) {
			side = "side";
		} else {
			document.getElementById("test").innerHTML = "Error";
		}

		console.log(random);

		let result = {
			side: side,
			date: date
		};

		//console.log(result);

		return result;
	}

	function showCoinFlipResult(result)
	{
		console.log(result);
		document.getElementById("test").innerHTML = result.side;
		if (result.side == "heads") {
			document.getElementById('coinImage').src='images/coin_heads.jpg';
		} else if (result.side == "tails") {
			document.getElementById('coinImage').src='images/coin_tails.jpg';
		} else if (result.side == "side") {
			document.getElementById('coinImage').src='images/coin_side.jpg';
		} else {
			document.getElementById("test").innerHTML = "Error";
		}

		document.getElementById('time').innerHTML = result.date.getHours() + ":" + result.date.getMinutes() + ":" + result.date.getSeconds();
	}
});
