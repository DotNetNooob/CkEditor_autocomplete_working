var Index = {
	suggestions: [{ "id": "[$Name$]", "label": "Name" }, { "id": "[$CustomerProfile$]", "label": "Customer Profile" }, { "id": "[$Email$]", "label": "Email" }, { "id": "[$Phone$]", "label": "Phone" }],


	init: function () {
		Index.initCkEditor();
		Index.bindEvents();
		$('#getNewSuggestionsButton1').click();

	},

	bindEvents: function () {
		$('#getNewSuggestionsButton1').on('click', function () {
			CKEDITOR.instances.ckeditorBox.execCommand('reloadSuggetionBox', Index.suggestions);
		});
	},

	initCkEditor: function () {
		//Here "CKEDITOR.SHIFT + 51" is the key combination for '#'
		$('textarea#ckeditorBox').ckeditor({ suggestionsTriggerKey: { keyCode: CKEDITOR.SHIFT + 51 } });
		CKEDITOR.on('instanceReady', function (evt) {
			//Here 'Index.suggestions' is the Array which is holding the current list of suggestions
			CKEDITOR.instances.ckeditorBox.execCommand('reloadSuggetionBox', Index.suggestions);
		});
	},
}