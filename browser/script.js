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

// Local storage
Writeo.local = function(key, value) {
    // Getter
	if (arguments.length === 1)
		return localStorage.getItem(key);
    // Clear it no matter what (for iOS)
    localStorage.removeItem(key);
    // Setter
    if (value !== null) {
        if ((typeof value !== 'string') && (!(value instanceof String)))
            value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }
};

// Important selectors
Writeo.textarea = document.getElementById('text');
Writeo.toolbar = document.getElementById('toolbar');
Writeo.themesElement = document.getElementById('themes');
Writeo.fontsElement = document.getElementById('fonts');

// Apply themes and fonts
Writeo.applyTheme = function(theme) {
	document.body.style.background = theme.background;
	Writeo.textarea.style.color = theme.color;
	Writeo.local('theme', theme);
};
Writeo.applyFont = function(font) {
	Writeo.textarea.style.fontFamily = font;
	Writeo.local('font', font);
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

// Load from storage (or fall back to defaults)
var localTheme = JSON.parse(Writeo.local('theme'));
if (localTheme)
	Writeo.applyTheme(localTheme);
else
	Writeo.applyTheme(Writeo.themes[0]);
var localFont = Writeo.local('font');
if (localFont)
	Writeo.applyFont(localFont);
else
	Writeo.applyFont(Writeo.fonts[0]);

// Load text from storage
var localText = Writeo.local('text');
if (localText)
	Writeo.textarea.innerHTML = localText;

// Save all the damn time
Writeo.saveText = function() {
	Writeo.local('text', Writeo.textarea.value)
};
Writeo.textarea.onkeypress = Writeo.saveText;
Writeo.textarea.onkeydown = Writeo.saveText;
Writeo.textarea.onkeyup = Writeo.saveText;
setInterval(Writeo.saveText, 1000);