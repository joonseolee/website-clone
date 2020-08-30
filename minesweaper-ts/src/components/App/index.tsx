import React, { useState } from "react";
import "./App.scss";
import NumberDisplay from "../NumberDisplay";
import { generateCells } from "../../utils";
import Button from "../Button";

const App = () => {
    const [cells, setCells] = useState(generateCells());

    console.log("cells", cells);
    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) =>
            row.map((cell, colIndex) =>
                <Button key={`${rowIndex}-${colIndex}`} state={cell.state} value={cell.value} row={rowIndex} col={colIndex}/>
                )
        )
    };

    return (
        <div className={"App"}>
            <div className={"Header"}>
                <NumberDisplay value={0}/>
                <div className={"Face"}>
                    <span role={"img"} aria-label={"face"}>
                        😛
                    </span>
                </div>
                <NumberDisplay value={12}/>
            </div>
            <div className={"Body"}>{renderCells()}</div>
        </div>
    )
}

export default App;