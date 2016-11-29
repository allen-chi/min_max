module.exports ={
	findMinMax:function(arr){
				var min = arr[0];
		var max = arr[0];
		var answer = [];

		for(var i = 0; i<arr.length; i++){
			if (arr[i] > max)
				max = arr[i];
			if (arr[i] < min)
				min = arr[i];
		}
		if (max==min){
		  answer=[min];
		return answer;
	  }
		answer=[min, max];
		return answer;
	}

}