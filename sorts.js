a = [1, 22, 10, 2, 300, 100];

function bubble(arr) {
	var temp

	for (var i = arr.length - 1; i >=0; i--) {
		for(var j = 0; j<= i; j++) {
			if (arr[j - 1] > arr[j]) {
				temp = arr[j- 1];
				arr[j - 1] = arr[j];
				arr[j] = temp; 
			}

		}
	}
	return arr;
}

console.log(bubble(a));

j = [55, 1, 3, 356, 22];

function selectSort(arr) {
	var temp, minIxd;

	for (var i = 0; i < arr.length; i++) {

		minIxd = i;
		for (var j = i+1; j < arr.length; j++) {
			if(arr[j] < arr[minIxd]) {
				minIxd = j;
			}
		}

	temp = arr[i];
	arr[i] = arr[minIxd];
	arr[minIxd] = temp;
	}
	return arr;
}

console.log(selectSort(j));

p = [3, 2, 4, 1];
  
function insert(arr) {
	var temp;
	for(var i = 0; i < arr.length; i++) {
		temp = arr[i];
		for(var j = i - 1; j<=i &&(arr[j] > temp); j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = temp;
	}

	return arr;
}

console.log(insert(p));
