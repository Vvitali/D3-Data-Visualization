const courses = [ 
] 
const fs = require("fs");

const readline = require('readline');
var lineReader = require('readline').createInterface({
	input: fs.createReadStream('courses.txt')
});

lineReader.on('line', function (line) { 
	courses.push({
		name: line.split(" ")[0],
		code: line.split(" ")[1],
		description: line.slice(7)
	})
}); 

lineReader.on('close', function ( ) {  
	console.log(courses);

	fs.writeFile("preparedData.js", JSON.stringify(courses), (err)=>{
		console.log(err);
	})
}); 
