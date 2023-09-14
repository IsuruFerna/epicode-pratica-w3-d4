const container = document.querySelector(".container");
const size = 76;
const arrSaveClick = [];

const generateNum = function (arr) {
   const btn = document.querySelector("#btn");
   btn.addEventListener("click", function () {
      // generating random number
      let num;

      // number shoud not includes in the array
      do {
         num = Math.floor(Math.random() * 76) + 1;
         console.log("num generating inside: ", num);
      } while (arr.includes(num));

      // add the number into the arry
      arr.push(num);

      // change the backgound color of the cell
      const cells = document.querySelectorAll(".cell");
      const number = document.querySelector(".number");
      number.textContent = num;
      cells[num - 1].classList.add("activate");

      console.log("cells: ", cells[1]);

      let opacity = arr.length / 100;
      let green = 0;
      for (let i = 0; i < arr.length; i++) {
         cells[arr[i] - 1].style.backgroundColor = `rgba(255, ${
            green + 250 / i
         }, 10, ${opacity * i})`;
         console.log("this is cell: ", cells[arr[i] - 1]);
      }
   });
};

// reset all the values not usefull when you can directly reload the page
// const reset = function (arr) {
//    const btnDelete = document.querySelector("#btn-rest");
//    btnDelete.addEventListener("click", function () {
//       arr = [];
//       const number = document.querySelector(".number");
//       number.textContent = null;

//       // remove each cell background
//       const cells = document.querySelectorAll(".cell");
//       cells.forEach((element) => {
//          element.classList.remove("activate");
//       });
//    });
// };

// simulating the board
const boardSimulate = function () {
   for (let i = 0; i < size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerHTML = i + 1;

      container.appendChild(cell);
   }
};

boardSimulate();
generateNum(arrSaveClick);
// reset(arrSaveClick);
