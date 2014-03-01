var $ = require('jquery');
var QRCode = require('qrcode-npm');
var win = require('nw.gui').Window.get();

$('#close').on('click', function() {
	win.close();
});
$('#render').bind('click', function() {
	$('#pasteZone').focus();
});
$(window).bind({
	paste: function() {
		setTimeout(function() {
			var qr = QRCode.qrcode(8, 'L');
			qr.addData($('#pasteZone').val());
			qr.make();
			$('#render').html(qr.createImgTag(4))
		}, 33);
	}
});



