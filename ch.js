function myfunc (name, language)
{

	let myLanguages = {
		english: {
			greeting: "welcome!"
		},
		czech: {
			greeting: "Vitejte",
		},
		danish: {
			greeting: "Velkomst!"
		},
		dutch: {
			greeting: "Welkom!"
		},
		estonian: {
			greeting: "Tere tulemast!"
		},
		finnish: {
			greeting: "tervetuloa!"
		},
		flemish: {
			greeting: "welgekomen!"
		},
		french: {
			greeting: "bienvenue"
		},
		german: {
			greeting: "willkommen"
		},
		irish: {
			greeting: "laukiamas!"
		},
		italian: {
			greeting: "benvenuto!"
		},
		latvian: {
			greeting: "gaidits"
		},
		lithuanian: {
			greeting: "laukiamas"
		},
		polish: {
			greeting: "witamy"
		},
		spanish: {
			greeting: "bienvenido!"
		},
		swedish: {
			greeting: "valkommen!"
		},
		welsh: {
			greeting: "croeso!"
		},
	}

	console.log(name + ", " + myLanguages[language.toLowerCase()].greeting)
	
}

myfunc("nathan","german");