
export default function AppButtons({ element, index, removeItem, saveEditItem, setEditText, setEdit }) {

    return (
        <>
            <span>
                
                <button onClick={() => { setEditText(element); setEdit(index) }} className="btn btn-outline-secondary m-1">
                    <i className="bi bi-pen"></i>
                </button>
                <button onClick={() => removeItem(index)} className="btn btn-outline-danger m-1">
                    <i className="bi bi-trash3"></i>
                </button>
                
                <button onClick={() => saveEditItem(index)} className="btn btn-outline-success m-1">
                    <i className="bi bi-floppy"></i>
                </button>
            </span >
        </>
    )
}