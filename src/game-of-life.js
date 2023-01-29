// const myArray = [
//   [false, true, false],
//   [false, true, false],
//   [false, true, false],
// ];
// let position = [];
// let cellSurvive = 0;

// const checkSurvive = (array) => {
//   if (position === [i - 1][j - 1]) {
//     if (array[i - 1][j - 1]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i][j - 1]) {
//     if (array[i - 1][j]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i + 1][j - 1]) {
//     if (array[i - 1][j + 1]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i - 1][j]) {
//     if (array[i][j - 1]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i + 1][j]) {
//     if (array[i][j + 1]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i - 1][j + 1]) {
//     if (array[i + 1][j - 1]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i][j + 1]) {
//     if (array[i + 1][j]) {
//       cellSurvive++;
//     }
//   }
//   if (position === [i + 1][j + 1]) {
//     if (array[i + 1][j + 1]) {
//       cellSurvive++;
//     }
//   }
// };

// for (i = 0; i < myArray.length; i++) {
//   for (j = 0; j < myArray.length; j++) {
//     position = [i, j];
//     checkSurvive(myArray);
//   }
// }

// console.log(cellSurvive);

const myArray = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
];
let position = [];
let cellSurvive = 0;

const checkSurvive = (array) => {
  if (position === [(0, 0)]) {
    if (array[(1, 0)]) {
      cellSurvive++;
    }
    if (array[(0, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
  }
  if (position === [1, 0]) {
    if (array[(0, 0)]) {
      cellSurvive++;
    }
    if (array[(2, 0)]) {
      cellSurvive++;
    }
    if (array[(0, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(2, 1)]) {
      cellSurvive++;
    }
  }
  if (position === [2, 0]) {
    if (array[(1, 0)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(2, 1)]) {
      cellSurvive++;
    }
  }
  if (position === [0, 1]) {
    if (array[(0, 0)]) {
      cellSurvive++;
    }
    if (array[(1, 0)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(0, 2)]) {
      cellSurvive++;
    }
    if (array[(1, 2)]) {
      cellSurvive++;
    }
  }
  if (position === [1, 1]) {
    if (array[(0, 0)]) {
      cellSurvive++;
    }
    if (array[(1, 0)]) {
      cellSurvive++;
    }
    if (array[(2, 0)]) {
      cellSurvive++;
    }
    if (array[(0, 1)]) {
      cellSurvive++;
    }
    if (array[(2, 1)]) {
      cellSurvive++;
    }
    if (array[(0, 2)]) {
      cellSurvive++;
    }
    if (array[(1, 2)]) {
      cellSurvive++;
    }
    if (array[(2, 2)]) {
      cellSurvive++;
    }
  }
  if (position === [2, 1]) {
    if (array[(1, 0)]) {
      cellSurvive++;
    }
    if (array[(2, 0)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 2)]) {
      cellSurvive++;
    }
    if (array[(2, 2)]) {
      cellSurvive++;
    }
  }
  if (position === [0, 2]) {
    if (array[(0, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 2)]) {
      cellSurvive++;
    }
  }
  if (position === [1, 2]) {
    if (array[(0, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(2, 1)]) {
      cellSurvive++;
    }
    if (array[(0, 2)]) {
      cellSurvive++;
    }
    if (array[(2, 2)]) {
      cellSurvive++;
    }
  }
  if (position === [2, 2]) {
    if (array[(1, 1)]) {
      cellSurvive++;
    }
    if (array[(2, 1)]) {
      cellSurvive++;
    }
    if (array[(1, 2)]) {
      cellSurvive++;
    }
  }
};

for (i = 0; i < myArray.length; i++) {
  for (j = 0; j < myArray.length; j++) {
    position = [i, j];
    checkSurvive(myArray);
  }
}

console.log(cellSurvive);
