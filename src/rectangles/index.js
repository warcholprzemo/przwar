import React, { useState } from 'react';
import './styles.scss';

const N = 10;

function RectanglesGame(){
    let [generated, setGenerated] = useState(false);
    let [board, setBoard] = useState([]);
    let [translatedSolutionBoard, setTranslatedSolutionBoard] = useState([]);
    let [hintsRow, setHintsRow] = useState([]);
    let [hintsColumn, setHintsColumn] = useState([]);
    let [testBox, setTestBox] = useState(false);
    let [gameStatus, setGameStatus] = useState(false); /* true for win */
    /* playingBoard */
    let [playingBoard, setPlayingBoardBoard] = useState([]);

    function computeHintsRow() {
        for(let i=0; i<N; i++){
            let counter = 0;
            hintsRow.push([]);
            for(let j=0; j<N; j++){
                const value = board[i][j];
                if(value) {
                    counter++;
                } else {
                    if(counter) {
                        hintsRow[i].push(counter);
                        counter = 0;
                    }
                }
            }
            if(counter) {
                /* last hint */
                hintsRow[i].push(counter);
            }
        }
    }

    function computeHintsColumn() {
        for(let i=0; i<N; i++){
            let counter = 0;
            hintsColumn.push([]);
            for(let j=0; j<N; j++){
                const value = board[j][i];
                if(value) {
                    counter++;
                } else {
                    if(counter) {
                        hintsColumn[i].push(counter);
                        counter = 0;
                    }
                }
            }
            if(counter) {
                /* last hint */
                hintsColumn[i].push(counter);
            }
        }
    }

    function generateBoard() {
        if(generated === false){
            for(let i=0; i<N; i++){
                board.push([]);
                translatedSolutionBoard.push([]);
                playingBoard.push([]);
                for(let j=0; j<N; j++){
                    let randomValue = Math.round(Math.random());
                    board[i].push(randomValue);
                    playingBoard[i].push(0);
                    if(randomValue === 0){
                        translatedSolutionBoard[i].push(2);
                    } else {
                        translatedSolutionBoard[i].push(1);
                    }

                }
            }
            computeHintsRow();
            computeHintsColumn();
            setGenerated(true);
        }
    }

    function renderCells(row) {
        return row.map((cell, i) => {
            return (
                <div key={i} className={"cell " + (cell ? 'black' : 'white')}></div>
            );
        })
    }

    function renderColumnCell(column) {
        if(column.length === 0){
            return (
                <div>0</div>
            );
        }
        return column.map((cell, i) => {
            return (
                <div key={i}>{ cell }</div>
            );
        });
    }

    function renderColumns(){
        return hintsColumn.map((column, i) => {
             return (
                 <div key={i} className="hintColumn">{ renderColumnCell(column) }</div>
             );
        });
    }

    function renderBoard() {
        return board.map((row, i) => {
            return (
                <div className="row" key={i}>
                    <div className="hintRow">
                        { hintsRow[i].length ? hintsRow[i] : 0 }
                    </div>
                    { renderCells(row) }
                </div>
            )
        });
    }

    /* RENDER PLAYING BOARD */

    function checkWin(){
        setGameStatus(
            JSON.stringify(playingBoard) === JSON.stringify(translatedSolutionBoard)
        );
    }

    function renderPlayingCells(row, i) {
        function handleClick(e) {
            let ii = parseInt(e.target.attributes.positionx.value);
            let jj = parseInt(e.target.attributes.positiony.value);
            if(e.type === "click"){
                playingBoard[ii][jj] = 1;
                setTestBox(!testBox);
            } else if (e.type === "contextmenu"){
                playingBoard[ii][jj] = 2;
                e.preventDefault();
                setTestBox(!testBox);
            }
            checkWin();
        }


        return row.map((cell, j) => {
            return (
                <div key={j}
                     className={"cell playing-box-" + cell}
                     onClick={ handleClick }
                     onContextMenu={ handleClick }
                     positionx={ i }
                     positiony={ j }
                ></div>
            );
        })
    }

    function renderPlayingBoard() {
        return playingBoard.map((row, i) => {
            return (
                <div className="row" key={i}>
                    <div className="hintRow">
                        { hintsRow[i].length ? hintsRow[i] : 0 }
                    </div>
                    { renderPlayingCells(row, i) }
                </div>
            )
        });
    }

    /* RENDER STATUS */

    function renderStatus(){
        if(gameStatus) {
            return (
                <div className='game-status win-game'>You win!</div>
            );
        }
        return (
            <div className='game-status'>Not win yet</div>
        );
    }

    generateBoard();
    return (
        <div>
            <h3>Game</h3>
            <div className="board">
                <div className="allHintsColumn">
                    { renderColumns() }
                </div>
                <div>{ renderPlayingBoard() }</div>
            </div>

            <h3>Status</h3>
            <div>{ renderStatus() }</div>

            <h3>Solution</h3>
            <div className="board">
                <div className="allHintsColumn">
                    { renderColumns() }
                </div>
                { renderBoard() }
            </div>
        </div>

    );
}

export default RectanglesGame;
