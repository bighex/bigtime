//==============================================================================	URL mapping
// URL mapping, from hash to a function that responds to that URL action
const router = {
	"/": () => showContent("content-home"),
	"/profile": () =>
		requireAuth(() => showContent("content-profile"), "/profile"),
	"/login": () => login()
};



//==============================================================================	Declare helper functions



/** Iterates over the elements matching 'selector' and passes them
 * to 'fn'
 * @param {*} selector The CSS selector to find
 * @param {*} fn The function to execute for every element */
const eachElement = (selector, fn) => {
	for (let e of document.querySelectorAll(selector)) {
		fn(e);
	}
};



/** Tries to display a content panel that is referenced
 * by the specified route URL. These are matched using the
 * router, defined above.
 * @param {*} url The route URL */
const showContentFromUrl = (url) => {
	if (router[url]) {
		router[url]();
		return true;
	}

	return false;
};



/** Returns true if `element` is a hyperlink that can be considered a link to another SPA route
 * @param {*} element The element to check */
const isRouteLink = (element) =>
	element.tagName === "A" && element.classList.contains("route-link");



/** Displays a content panel specified by the given element id.
 * All the panels that participate in this flow should have the 'page' class applied,
 * so that it can be correctly hidden before the requested content is shown.
 * @param {*} id The id of the content to show */
const showContent = (id) => {
	eachElement(".page", (p) => p.classList.add("hidden"));
	document.getElementById(id).classList.remove("hidden");
};



/** Updates the user interface */
const updateUI = async () => {
	try {
		const isAuthenticated = await auth0.isAuthenticated();

		if (isAuthenticated) {
			const user = await auth0.getUser();

			document.getElementById("profile-data").innerText = JSON.stringify(
				user,
				null,
				2
			);

			document.querySelectorAll("pre code").forEach(hljs.highlightBlock);

			eachElement(".profile-image", (e) => (e.src = user.picture));
			eachElement(".user-name", (e) => (e.innerText = user.name));
			eachElement(".user-email", (e) => (e.innerText = user.email));
			eachElement(".auth-invisible", (e) => e.classList.add("hidden"));
			eachElement(".auth-visible", (e) => e.classList.remove("hidden"));


			//test for email verification
			if( false === user.email_verified )
			{
				window.message.push( ["User e-mail NOT verified", "alert-danger"]);
			}
			else
			{
				// do nothing //
			}

			//Country Flag
			const flag = new CountryFlag(document.querySelector("#profile-flag .country-flag"));
			const nameElement = document.querySelector("#sample-country .country-name");
			flag.selectByAlpha2( user['https://example.com/country_code'] );

		} else {
			eachElement(".auth-invisible", (e) => e.classList.remove("hidden"));
			eachElement(".auth-visible", (e) => e.classList.add("hidden"));
		}
	} catch (err) {
		console.log("Error updating UI!", err);
		return;
	}


	// Display Messages to users
	let messageDisplay = document.getElementById("window-message");

	window.message.forEach(function(aMessage) {
		var alert = document.createElement("div");
		alert.className = 'alert col-12 ' + aMessage[1];
		alert.role = 'alert';
		alert.innerHTML = aMessage[0];
		messageDisplay.appendChild( alert )
	});

	
	console.log("UI updated");
};


window.onpopstate = (e) => {
	if (e.state && e.state.url && router[e.state.url]) {
		showContentFromUrl(e.state.url);
	}
};