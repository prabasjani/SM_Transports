import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AppContext } from "./BillContext"
import BillForm from "./BillForm"

const InvoiceForm = () => {
  const {
    setInvoice,
    setDate,
    setLading,
    setFromAddress,
    setToAddress,
    setVehicleNo,
    setTransportCharge,
    setHaltCharge,
    setIsAuthenticated,
  } = useContext(AppContext)

  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/login")
    setIsAuthenticated(false)
  }
  return (
    <div className="w-full flex flex-col items-center justify-center my-10">
      <div className="p-10 border border-zinc-500/25 rounded-xl bg-white w-[90%]">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">
            SRI MAHALAXMI TRANSPORTS Invoice
          </h1>
          <button
            onClick={handleLogout}
            className="cursor-pointer px-6 py-2 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <form>
          <div className="grid grid-cols-3 gap-10">
            <div className="col flex flex-col gap-2">
              <label
                htmlFor="invoiceNo"
                className="text-zinc-500 font-semibold"
              >
                Invoice No
              </label>
              <input
                onChange={(e) => setInvoice(e.target.value)}
                type="text"
                id="invoiceNo"
                placeholder="Enter the Invoice Number"
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
            <div className="col flex flex-col gap-2">
              <label htmlFor="date" className="text-zinc-500 font-semibold">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id="date"
                placeholder="Enter the Invoice Date"
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
            <div className="col flex flex-col gap-2">
              <label htmlFor="lrrrNo" className="text-zinc-500 font-semibold">
                Bill of Lading/LR-RR No
              </label>
              <input
                onChange={(e) => setLading(e.target.value)}
                type="date"
                id="lrrrNo"
                placeholder="Enter the Invoice Number"
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
          </div>

          <h2 className="text-zinc-700 uppercase font-bold my-4">
            Transportation Info
          </h2>

          <div className="grid grid-cols-3 gap-10">
            <div className="col flex flex-col gap-2">
              <label htmlFor="from" className="text-zinc-500 font-semibold">
                From
              </label>
              <input
                onChange={(e) => setFromAddress(e.target.value)}
                type="text"
                id="from"
                placeholder="Enter the From Location..."
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
            <div className="col flex flex-col gap-2">
              <label htmlFor="to" className="text-zinc-500 font-semibold">
                To
              </label>
              <input
                onChange={(e) => setToAddress(e.target.value)}
                type="text"
                id="to"
                placeholder="Enter the To Location..."
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
            <div className="col flex flex-col gap-2">
              <label
                htmlFor="vehicleNo"
                className="text-zinc-500 font-semibold"
              >
                Vehicle No
              </label>
              <input
                onChange={(e) => setVehicleNo(e.target.value)}
                type="text"
                id="vehicleNo"
                placeholder="Enter the To Location..."
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 my-5">
            <div className="col flex flex-col gap-2">
              <label htmlFor="amount" className="text-zinc-500 font-semibold">
                Transportation Charge
              </label>
              <input
                onChange={(e) => Number(setTransportCharge(e.target.value))}
                type="text"
                id="amount"
                placeholder="Enter the To Location..."
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>

            <div className="col flex flex-col gap-2">
              <label
                htmlFor="haltCharge"
                className="text-zinc-500 font-semibold"
              >
                Halting Charge
              </label>
              <input
                onChange={(e) => Number(setHaltCharge(e.target.value))}
                type="text"
                id="haltCharge"
                placeholder="Enter the To Location..."
                className="focus:outline-zinc-400 border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              />
            </div>
          </div>
        </form>
      </div>

      <BillForm />
    </div>
  )
}

export default InvoiceForm
