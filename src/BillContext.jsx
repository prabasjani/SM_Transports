import React, { createContext, useState } from "react"
export const AppContext = createContext(null)

const BillContextProvider = ({ children }) => {
  const [invoice, setInvoice] = useState("")
  const [date, setDate] = useState("")
  const [lading, setLading] = useState("")
  const [fromAddress, setFromAddress] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [vehicleNo, setVehicleNo] = useState("")
  const [transportCharge, setTransportCharge] = useState(0)
  const [haltCharge, setHaltCharge] = useState(0)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const contextValues = {
    invoice,
    date,
    lading,
    fromAddress,
    toAddress,
    vehicleNo,
    transportCharge,
    haltCharge,
    setInvoice,
    setDate,
    setLading,
    setFromAddress,
    setToAddress,
    setVehicleNo,
    setTransportCharge,
    setHaltCharge,
    isAuthenticated,
    setIsAuthenticated,
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export default BillContextProvider
