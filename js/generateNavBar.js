
/*
var stringToWrite = `
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="index.html">Home</a>
		    </div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><a href="about.html">About</a></li>
					<li><a href="services.html">Services and Prices</a></li>
					<li><a href="contact.html">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</nav>
	`;
*/

var pagename = $("page-name")[0].id;
var beginning = `
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.html">Home</a>
		    </div>
			<div class="collapse navbar-collapse" id="navbar-collapse">
				<ul class="nav navbar-nav">`;


var end = `</ul>
			</div>
		</div>
	</nav>
	`;


var middle;
if (pagename === "index")
{
	middle = 
	`
		<li><a href="about.html">About</a></li>
		<li><a href="services.html">Services and Prices</a></li>
		<li><a href="contact.html">Contact Us</a></li>
	`;
}
else if (pagename === "about")
{
	middle = 
	`
		<li class="active"><a href="about.html">About</a></li>
		<li><a href="services.html">Services and Prices</a></li>
		<li><a href="contact.html">Contact Us</a></li>
	`;
}
else if (pagename === "services")
{
	middle = 
	`
		<li><a href="about.html">About</a></li>
		<li class="active"><a href="services.html">Services and Prices</a></li>
		<li><a href="contact.html">Contact Us</a></li>
	`;
}
else if (pagename === "contact")
{
	middle = 
	`
		<li><a href="about.html">About</a></li>
		<li><a href="services.html">Services and Prices</a></li>
		<li class="active"><a href="contact.html">Contact Us</a></li>
	`;
}

document.write(beginning + middle + end);




