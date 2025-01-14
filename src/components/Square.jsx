export default function Square({value, onSquareClick}) {

    return (
            <button 
                className="square text-stone-50 border-white"
                onClick={onSquareClick}
            >
                {value}
            </button>
    );
}