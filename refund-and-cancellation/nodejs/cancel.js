var MP = require ("mercadopago");

var mp = new MP ("CLIENT_ID", "CLIENT_SECRET");

mp.cancelPayment (":ID", function (err, data){
	if (err) {
		console.log (err);
	}
});