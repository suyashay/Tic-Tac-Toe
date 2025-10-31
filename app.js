let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1val = boxes[pattern[0]].innerText;
        let p2val = boxes[pattern[1]].innerText;
        let p3val = boxes[pattern[2]].innerText;

        if(p1val != "" && p2val != "" && p3val != ""){
            if(p1val === p2val && p2val === p3val){
                showWinner(p1val);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes =() => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);