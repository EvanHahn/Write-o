// Namespace
if (Object.create)
	window.Writeo = Object.create(null);
else
	window.Writeo = {};

// Configs
Writeo.themes = [
	{
		background: '#000',
		color: '#fff'
	},
	{
		background: '#fff',
		color: '#000'
	},
	{
		background: '#fed',
		color: '#333'
	}
];
Writeo.fonts = [
	'Inconsolata, Droid Sans Mono, Monaco, monospace', 'sans-serif', 'Georgia, serif'
];

// Important selectors
Writeo.textarea = document.getElementById('text');

// Apply themes and fonts
Writeo.applyTheme = function(theme) {
	document.body.style.background = theme.background;
	Writeo.textarea.style.color = theme.color;
};
Writeo.applyFont = function(font) {
	Writeo.textarea.style.fontFamily = font;
}