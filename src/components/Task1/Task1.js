  // let x = [50, 100, 30, 300, 800, 60, 10, 70, 20];
  let y = [30, 100, 300, 200, 1000, 10, 20];

  let CostructorFunc = (arr1, n) => {
    let sorted = [...arr1].sort(function (a, b) {
      return a - b;
    });
    let arr2 = sorted.slice(0, n);
    let numberOut = Math.max(...arr2) - Math.min(...arr2);
    console.log("Number = ", numberOut);
    console.log("Array2: ", arr2);
    // ----------------------------
    let arrAsIndexSort = [];
    //   if it's important to the task to output array as the same sort of indexes of original array
    //   here we find the value of elm of arr2 in arr1 and push it at the index of the original sort
    for (let i = 0; i < arr2.length; i++) {
      let ind = arr1.indexOf(arr2[i]);
      arrAsIndexSort.splice(ind, 0, arr2[i]);
    }
    console.log("arrAsIndexSort: ", arrAsIndexSort);
  };

  CostructorFunc(y, 3);