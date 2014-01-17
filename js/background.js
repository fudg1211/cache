(function(){

	chrome.browserAction.onClicked.addListener(function(tab) {

		function clearCache(){

			chrome.browsingData.remove({'since':new Date().getTime()-360*24*3600},{
				'cache':true
			});

			chrome.runtime.sendMessage({
				'msgName':'clearCache'
			});
		}

		clearCache();
	});
})();

