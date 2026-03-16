import { use, useState } from "react"
import AppButtons from "./AppButtons"


export default function AppMain({ recipes }) {
  const [list, setList] = useState(recipes)
  const [newItem, setNewItem] = useState('')
  const [error, setError] = useState(false)
  const [edit, setEdit] = useState(-1)
  const [editText, setEditText] = useState('')

  function addNewItem(e) {
    e.preventDefault()
    if (newItem.length >= 10) {
      setList([newItem, ...list])
      setError(false)
    } else {
      setError(true)
      setNewItem('')
    }
  }

  function saveEditItem(index) {
    const updatedList = [...list]
    updatedList[index] = editText;
    setList(updatedList)
    setEdit(-1)
  }

  function removeItem(i) {
    const changedList = list.filter((element, index) => index !== i)
    
  }


  return (
    <main className="container">
      <div className="row my-3">
        <div className="col">
          <form className="input-group mt-3" onSubmit={addNewItem}>
            <input type="text" className="form-control" placeholder="Aggiungi Nuova Sezione" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
          </form>
          {error && <small className="text-danger m-1">INSERISCI ALMENO 10 CARATTERI!</small>}
          <ul className="list-group my-3">
            {list.map((element, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <h2 className="h4">{edit !== index ? element : <input value={editText} onChange={(e) => setEditText(e.target.value)} />}</h2>
                <AppButtons
                  element={element}
                  index={index}
                  removeItem={removeItem}
                  saveEditItem={saveEditItem}
                  setEditText={setEditText}
                  setEdit={setEdit}
                />
              </li>
            ))
            }
            {list.length === 0 && <li className="list-group-item d-flex justify-content-between align-items-center">
              <h2 className="h4">NON CI SONO RICETTE</h2>
            </li>
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
