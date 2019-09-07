var button = d3.select(".btn")
var clearButton = d3.select("#clear-btn")
var ufoTable = d3.select("thead")


button.on("click", function (i) {
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	var day = moment(inputValue).format("D/M/YYYY")

	data.forEach((v) => {
		var row = ufoTable.append("tr").attr('class','tRow');
		if (v.datetime === day) {
			row.append("td").text(v.datetime);
			row.append("td").text(v.city)
			row.append("td").text(v.state)
			row.append("td").text(v.country)
			row.append("td").text(v.shape)
			row.append("td").text(v.durationMinutes)
			row.append("td").text(v.comments)
		}
	});

});

clearButton.on("click", function () {
	d3.selectAll(".tRow").remove()
});