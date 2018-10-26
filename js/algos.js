// Converts from degrees to radians.
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};


function distanceFromAnnecy(city) {
    let radius = 6371;
    var annecyPos = [45.8494545, 6.1106385];
    let positionVille = [parseFloat(city.latitude), parseFloat(city.longitude)];

    let latitude1 =  annecyPos[0].toRadians();
    let latitude2 = positionVille[0].toRadians();

    let deltaLat = (positionVille[0] - annecyPos[0]).toRadians();
    let deltalong = (positionVille[1] - annecyPos[1]).toRadians();

    let calculeA = Math.sin(deltaLat/2) * Math.sin(deltaLat/2)
                    Math.cos(latitude1) * Math.cos(latitude2/2)
                    Math.sin(deltalong/2) * Math.cos(deltalong/2)

    let c = 2 * Math.atan2(Math.sqrt(calculeA), Math.sqrt(1-calculeA));
    let d = Math.round(radius * c);

    console.log(city.nom_commune + ", " + city.nom_ddpt + ", " + d + " Km.");

    return d;
}

function swap(i, j) // Swap the values in array csvData
{
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
    let ville = csvData[i];
    csvData[i] = csvData[j];
    csvData[j] = ville;

}

function isLess(A, B) {
    displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)

    if(distanceFromAnnecy(csvData[A]) < distanceFromAnnecy(csvData[B])){
        return true;
    }
        return false;

}


function insertsort() {

  for (let i = 1; i < csvData.length  ; i++){
        let j = i;
      while(j > 0 && j < csvData.length ){
          if (isLess(j, j - 1)){
              swap(j-1, j)
          }
          j--

          }
        //Deuxieme manière de le faire
      // for(let i = 0; i < csvData.length - 1 ; i++){
      //     let j = 0
      //     while(j < csvData.length - 1){
      //         if(isLess(i, j - 1)){
      //
      //             swap(i, j - 1)
      //         }
      //         j++
      //     }
      //
      // }

  }
    // console.log("implement me !");
}

function selectionsort() {
    // console.log("implement me !");
for(let i = 0; i < csvData.length -1 ; i++){
    let j = i
    while( j < csvData.length - 1){
        if(isLess( j + 1, i)){
            swap(i, j+1)
        }
        j++
    }
}
}

function bubblesort() {
    // console.log("implement me !");
    for(let i = 0; i < csvData.length ; i++){
        for(let j = 0; j < csvData.length - i -1; j++){
            if(isLess(j+1, j)){
                swap(j+1, j)
            }
        }
    }
}

function shellsort() {
    console.log("implement me !");
}

function mergesort(data) {
    console.log("implement me !");
}

function heapsort(data) {
    console.log("implement me !");
}

function quicksort() {

    let pivot = Math.floor(csvData.length-1)/2;
    let j = itemRight;

    for(let i =itemLeft; i < csvData.length-1; i++){
        while(i < j){
            if(isLess(csvData[i], csvData[j])){
                swap(csvData[i], csvData[j]);
            }
        }
    }



}

function quick3sort(data) {
    console.log("implement me !");
}


var algorithms = {
    'insert': insertsort,
    'select': selectionsort,
    'bubble': bubblesort,
    'shell': shellsort,
    'merge': mergesort,
    'heap': heapsort,
    'quick': quicksort,
    'quick3': quick3sort
}

function sort(algo) {
    if (!algorithms.hasOwnProperty(algo)) {
        throw 'Invalid algorithm ' + algo;
    }
    var sort_fn = algorithms[algo];
    sort_fn();
}
