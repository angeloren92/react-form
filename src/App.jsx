import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {

  const recipes = [
  { id: 1, title: "Spaghetti alla Carbonara: la ricetta originale" },
  { id: 2, title: "Tiramisù fatto in casa in 5 semplici passi" },
  { id: 3, title: "Risotto ai funghi porcini e parmigiano" },
  { id: 4, title: "Pizza Margherita: i segreti per un impasto perfetto" },
  { id: 5, title: "Pollo al forno con patate croccanti" }
];

  return (
    <>
      <AppHeader />
      <AppMain recipes={recipes} />
      <AppFooter />
    </>
  )
}

export default App
