import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {

  const recipes = [
    "Spaghetti alla Carbonara: la ricetta originale",
    "Tiramisù fatto in casa in 5 semplici passi",
    "Risotto ai funghi porcini e parmigiano",
    "Pizza Margherita: i segreti per un impasto perfetto",
    "Pollo al forno con patate croccanti" 
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
