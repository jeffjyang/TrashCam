const AWS = require('aws-sdk');

module.exports.rekog = function(){
	var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
	console.log("running rekog");
	var params = {
	Image: {
		S3Object: {
			Bucket: "trash-cam",
			Name: "toProcess.jpg"
		}
	},
	MaxLabels: 15,
	MinConfidence: 50
};
rekognition.detectLabels(params, function(err, data){
	if(err){
		console.log(err, err.stack);
	}
	else{
		console.log(data);
	}
	});
}