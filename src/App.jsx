import { Toaster } from "sonner"
import Login from "./Login"
import InvoiceForm from "./InvoiceForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BillContextProvider from "./BillContext"
import Protected from "./Protected"

const App = () => {
  return (
    <div className="flex items-center justify-center w-full bg-green-100/50">
      <Toaster richColors position="top-right" />
      <BillContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Protected />}>
              <Route path="/" element={<InvoiceForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BillContextProvider>
    </div>
  )
}

export default App
