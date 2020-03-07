function get_bit_mask(ip_mask) {

	var ip_mask_split = ip_mask.split(".");
	
	return parseInt(ip_mask_split[0]).toString(2) + "." + parseInt(ip_mask_split[1]).toString(2) + "." + parseInt(ip_mask_split[2]).toString(2) + "." + parseInt(ip_mask_split[3]).toString(2)
}

function do_convert(){
    var ip_mask = document.getElementById("IP_MASK");
    var s_mask = parseInt(ip_mask.value);
    var bitmask = get_bit_mask(s_mask);
    var bit_mask = document.getElementById("BIT_MASK");
    bit_mask.value = bitmask;
}