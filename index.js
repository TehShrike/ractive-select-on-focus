module.exports = function selectOnFocusDecorator(node) {
	function onFocus() {
		node.select()
	}
	var events = ['click', 'focus']

	events.forEach(function(key) {
		node.addEventListener(key, onFocus)
	})

	return {
		teardown: function () {
			events.forEach(function(key) {
				node.removeEventListener(key, onFocus)
			})
		}
	}
}
