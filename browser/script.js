// Namespace
if (Object.create)
	window.Writeo = Object.create(null);
else
	window.Writeo = {};

// Configs
Writeo.themes = [
	{
		background: '#f0f0f0',
		color: '#000'
	},
	{
		background: '#000',
		color: '#fff'
	},
	{
		background: '#fed',
		color: '#333'
	}
];
Writeo.fonts = [
	'Georgia, serif', 'sans-serif', 'monospace'
];

// Important selectors
Writeo.textarea = document.getElementById('text');
Writeo.toolbar = document.getElementById('toolbar');
Writeo.themesElement = document.getElementById('themes');
Writeo.fontsElement = document.getElementById('fonts');

// Apply themes and fonts
Writeo.applyTheme = function(theme) {
	document.body.style.background = theme.background;
	Writeo.textarea.style.color = theme.color;
};
Writeo.applyFont = function(font) {
	Writeo.textarea.style.fontFamily = font;
}

// Create toolbar and things
var themesLength = Writeo.themes.length;
for (var i = 0; i < themesLength; i ++) {
	var li = document.createElement('li');
	var a = document.createElement('a');
	a.href = 'javascript:Writeo.applyTheme(Writeo.themes[' + i + ']);';
	a.style.background = Writeo.themes[i].background;
	li.appendChild(a);
	Writeo.themesElement.appendChild(li);
}
var fontsLength = Writeo.fonts.length;
for (var i = 0; i < fontsLength; i ++) {
	var li = document.createElement('li');
	var a = document.createElement('a');
	a.href = 'javascript:Writeo.applyFont(Writeo.fonts[' + i + ']);';
	a.style.fontFamily = Writeo.fonts[i];
	a.innerHTML = 'W';
	li.appendChild(a);
	Writeo.fontsElement.appendChild(li);
}

// Default
Writeo.applyTheme(Writeo.themes[0]);
Writeo.applyFont(Writeo.fonts[0]);