//1. Bubbling sorting algorithm

const array = [2,4,7,3,1];

let swapped;
function bubbleSort(arr) {
	let ends = arr.length - 1;
	 swapped = false;
	for (let i = 0; i < ends; i++) {
		if (arr[i] > arr[i+1]) {
			swapped = true;
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	ends--;
}

do{
	bubbleSort(array)
}while(swapped)

console.log(array)

// 2. Insertion sorting algorithm

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let hole = i,
            value = arr[i]; 
        while (hole > 0 && arr[hole - 1] > value) {
            arr[hole] = arr[hole-1];
            hole = hole - 1;
        }   
        arr[hole] = value;
    }
    return arr;
}

insertionSort(array)
