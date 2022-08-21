
//Configure app to use NodeJS as the main scripting engine
//giving you the full power of Node directly in your app!
cfg.Node

//Configure for Material UI and light theme.
cfg.MUI, cfg.Light

//Make sure the required node modules are installed to ide.
//(This downloads modules from https://www.npmjs.com).
ide.AddModule( "moment" )

//Called when application is started.
function OnStart()
{
	//Create full screen layout with controls vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	//Add an image 20% of screen width.
	img = app.AddImage( lay, "Img/Hello Dave.png", 0.2 )
	
	//Add some text, with a top margin and set the font size.
	txt = app.AddText( lay, "Hello World!" )
	txt.SetMargins( 0, 0.05, 0, 0 )
	txt.SetTextSize( 22 )
	
	//Use the NodeJS 'moment' module to format date.
    moment = require('moment')
    var text = moment().format() + "\n"
     + moment().format("dddd, MMMM Do YYYY, h:mm:ss a") + "\n"
     + moment().format("ddd, hA") + "\n"
     + moment().format("[Today is] dddd") + "\n"
     txt.SetText( text )
     
	//Add layout to app.	
	app.AddLayout( lay )
}