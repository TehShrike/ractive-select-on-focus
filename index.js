module.exports = function selectOnFocusDecorator(node) {
	function onFocus() {
		node.select()
	}
	var events = ['click'] // I don't know if focus would be beneficial?  If so, add it here

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
