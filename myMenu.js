/**
 * myMenu.js
 */

function myMenu(status) {
	var menu = document.getElementById("menuTable");
	var mmore = docuent.getElementById("seemore");
	if (status == 1) {
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu.style.display = "block";
		more.style.display="block";
	}
	else {

		//메뉴 감추기
		//alert("메뉴 감추기");
		menu.style.display = "none";
		more.style.display="none";
	}
}