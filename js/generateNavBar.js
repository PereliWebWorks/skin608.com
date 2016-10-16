




var pagename = $("page-name")[0].id;

var beginning = `
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.html">SKIN608</a>
		    </div>
			<div class="collapse navbar-collapse" id="navbar-collapse">
				<ul class="nav navbar-nav">`;


var end = `		</ul>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="https://www.facebook.com/SKIN608-957230421020868/" class="navbar-fb-link">
						<img src="images/facebookLogo.png" class="navbar-fb-logo img-responsive"/>
						</a>
					</li>
				</ul>
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
		<li><a href="services.html">Services</a></li>
		<li><a href="contact.html">Contact</a></li>
	`;
}
else if (pagename === "about")
{
	middle = 
	`
		<li class="active"><a href="about.html">About</a></li>
		<li><a href="services.html">Services</a></li>
		<li><a href="contact.html">Contact</a></li>
	`;
}
else if (pagename === "services")
{
	middle = 
	`
		<li><a href="about.html">About</a></li>
		<li class="active"><a href="services.html">Services</a></li>
		<li><a href="contact.html">Contact</a></li>
	`;
}
else if (pagename === "contact")
{
	middle = 
	`
		<li><a href="about.html">About</a></li>
		<li><a href="services.html">Services</a></li>
		<li class="active"><a href="contact.html">Contact</a></li>
	`;
}

document.write(beginning + middle + end);



/*
var thing = `
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
`;

document.write(thing);
*/

