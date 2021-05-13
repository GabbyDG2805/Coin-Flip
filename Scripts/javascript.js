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
		result = Math.floor(Math.random() * 12000);

		if (result <= 5998) {
			side = "heads";
		} else if (result >= 5999 && result < 11998) {
			side = "tails";
		} else if (result == 11998 || result == 11999) {
			side = "side";
		} else {
			document.getElementById("test").innerHTML = "Error";
		}

		var d = new Date();

		document.getElementById('time').innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

		console.log(result);

		return side;
	}

	function showCoinFlipResult(side)
	{
		document.getElementById("test").innerHTML = side;
		if (side == "heads") {
			document.getElementById('coinImage').src='images/coin_heads.jpg';
		} else if (side == "tails") {
			document.getElementById('coinImage').src='images/coin_tails.jpg';
		} else if (side == "side") {
			document.getElementById('coinImage').src='images/coin_side.jpg';
		} else {
			document.getElementById("test").innerHTML = "Error";
		}
	}
});
