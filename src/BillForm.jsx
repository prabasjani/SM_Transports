import React, { useContext, useRef } from "react"
import fmt from "indian-number-format"
import converter from "number-to-words"
import { useReactToPrint } from "react-to-print"
import { useNavigate } from "react-router-dom"
import { AppContext } from "./BillContext"
import { toast } from "sonner"

const BillForm = () => {
  const {
    invoice,
    date,
    lading,
    fromAddress,
    toAddress,
    vehicleNo,
    transportCharge,
    haltCharge,
  } = useContext(AppContext)

  const totalAmount = Number(transportCharge) + Number(haltCharge)

  console.log(totalAmount)

  const contentRef = useRef(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: `SMT-${vehicleNo}`,
    onAfterPrint: () => toast.success("Receipt Downloaded Successfully"),
  })

  const navigate = useNavigate()
  return (
    <div className="w-3/4 my-10">
      <div className="text-black w-full p-5 bg-white" ref={contentRef}>
        {/* HEADER */}
        <div className="flex items-center relative mb-10">
          <h2 className="text-base font-semibold absolute left-[45%] top-0">
            INVOICE
          </h2>
          <p className="absolute right-0 top-0">(ORIGINAL FOR RECIPIENT)</p>
        </div>
        {/* MAIN FORM */}
        <div className="border">
          <div className="grid grid-cols-2 border-b">
            <div className="col border-b border-r p-1">
              <p className="font-semibold">Sri Mahalaxmi Transports 2025</p>
              <p>
                #64, (Old #86), Armenian street, 3rd floor <br />
                Chennai 600 001 <br />
                GSTIN/UIN: 33AMYPS0614A2Z6 <br />
                State Name: Tamil Nadu, Code: 33 <br />
                CIN: <br />
                E-mail: srimahalaxmitransports@gmail.com <br />
              </p>
            </div>
            <div className="col grid grid-cols-2">
              <div className="col h-[46px] border-b border-r px-1">
                <p>Invoice No</p>
                <span className="font-semibold">{invoice}/25-26</span>
              </div>
              <div className="col h-[46px] border-b px-1">
                <p>Dated</p>
                <span className="font-semibold">{date}</span>
              </div>
              <div className="col h-[46px] border-b border-r px-1">
                <p>Delivery Note</p>
              </div>
              <div className="col h-[46px] border-b px-1">
                <p>Mode/Terms of Payment</p>
              </div>
              <div className="col h-[46px] border-b border-r px-1">
                <p>Reference No & Date</p>
              </div>
              <div className="col h-[46px] border-b px-1">
                <p>Other References</p>
              </div>
            </div>
            <div className="col border-b border-r p-1">
              <p>Consignee (Ship to)</p>
              <p className="font-semibold uppercase">
                parseray logistics pvt ltd
              </p>
              <p>
                PLOT NO: P, RANGANATHA NAGAR, 200FEET ROAD <br />
                KORATTUR, CHENNAI - 600 075 <br />
                GST NO: 33AAICP3787C1ZE <br />
                GSTIN/UIN : 33AAICP3787C1ZE <br />
                State Name : Tamil Nadu, Code: 33 <br />
                <br />
              </p>
            </div>
            <div className="col grid grid-cols-2">
              <div className="col h-[38px] border-b border-r px-1">
                <p>Buyer's Order No</p>
              </div>
              <div className="col h-[38px] border-b px-1">
                <p>Dated</p>
              </div>
              <div className="col h-[38px] border-b border-r px-1">
                <p>Dispatch Doc No</p>
              </div>
              <div className="col h-[38px] border-b px-1">
                <p>Delivery Note Date</p>
              </div>
              <div className="col h-[38px] border-b border-r px-1">
                <p>Dispatch through</p>
              </div>
              <div className="col h-[38px] border-b px-1">
                <p>Destination</p>
              </div>
              <div className="col h-[38px] border-r px-1">
                <p>Bill of Lading/LR-RR No</p>
                <span className="font-semibold">dt. {lading}</span>
              </div>
              <div className="col h-[38px] px-1">
                <p>Motor Vehicle No</p>
              </div>
            </div>
            <div className="col border-r p-1">
              <p>Buyer (Bill to)</p>
              <p className="font-semibold uppercase">
                parseray logistics pvt ltd
              </p>
              <p>
                PLOT NO: P, RANGANATHA NAGAR, 200FEET ROAD <br />
                KORATTUR, CHENNAI - 600 075 <br />
                GST NO: 33AAICP3787C1ZE <br />
                GSTIN/UIN : 33AAICP3787C1ZE <br />
                State Name : Tamil Nadu, Code: 33 <br />
                <br />
              </p>
            </div>
            <div className="col border-t p-1">
              <p>Terms of Delivery</p>
            </div>
          </div>

          {/* CHARGES TABLE */}
          <div className="">
            <table className="table-auto border-b w-full">
              <thead>
                <tr>
                  <th className="w-10 border-r font-normal text-[12px] px-4 py-2">
                    S.no
                  </th>
                  <th className="w-1/2 border-r font-normal text-[12px] px-4 py-2">
                    Description of Goods
                  </th>
                  <th className="border-r font-normal text-[12px] px-4 py-2">
                    HSN/SAC
                  </th>
                  <th className="border-r font-normal text-[12px] px-4 py-2">
                    Quantity
                  </th>
                  <th className="border-r font-normal text-[12px] px-4 py-2">
                    Rate
                  </th>
                  <th className="border-r font-normal text-[12px] px-4 py-2">
                    Per
                  </th>
                  <th className="mx-6 font-normal text-[12px] py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-t px-4 py-2 place-content-start">
                    1
                  </td>
                  <td className="border-r border-t px-1 py-2">
                    <p className="font-bold">Transportation Charges</p>
                    <p>
                      FROM:{" "}
                      <span className="uppercase">
                        <span className="font-semibold">{fromAddress}</span> TO{" "}
                        <span className="font-semibold">{toAddress}</span>
                      </span>{" "}
                      <br />
                      V.NO:{" "}
                      <span className="uppercase font-semibold">
                        {vehicleNo}
                      </span>{" "}
                      <br />
                      SB.NO: <span>7399646/23.12.24</span> <br />
                      CONT.NO: <span>TCLU2943378</span> <br />
                      (1X20 FT CONTAINER)
                    </p>
                  </td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-t pl-5 pr-1 py-2 flex justify-end">
                    <p className="font-bold">{fmt.format(transportCharge)}</p>
                  </td>
                </tr>

                <tr>
                  <td className="border-r border-t px-4 py-2 place-content-start">
                    2
                  </td>
                  <td className="border-r border-t px-1 py-2 h-36 flex flex-col flex-start">
                    <p className="font-bold">Halting Charges</p>
                    <p>3 DAYS HALTING CHARGE</p>
                  </td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-r border-t px-4 py-2"></td>
                  <td className="border-t pl-5 pr-1 py-2 flex justify-end">
                    <p className="font-bold">{fmt.format(haltCharge)}</p>
                  </td>
                </tr>

                <tr>
                  <td className="border-r border-t px-4 py-1 place-content-start"></td>
                  <td className="border-r border-t px-1 py-1 flex justify-end">
                    <p className="font-bold">Total</p>
                  </td>
                  <td className="border-r border-t px-4 py-1"></td>
                  <td className="border-r border-t px-4 py-1"></td>
                  <td className="border-r border-t px-4 py-1"></td>
                  <td className="border-r border-t px-4 py-1"></td>
                  <td className="border-t pr-1 py-1 flex justify-end">
                    <p className="font-bold">₹. {fmt.format(totalAmount)}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Declaration and Total amount */}
          <div className="px-1 relative">
            <div className="flex justify-between ">
              <p>Amount Chargeable (In Words)</p>
              <p>E. & O.E</p>
            </div>
            <p className="font-bold mb-2">
              Indian Rupees{" "}
              <span>{converter.toWords(totalAmount)?.toUpperCase()}</span> Only
            </p>
            <p>Company's PAN</p>
            <p className="underline">Declaration</p>
            <p>
              We declare that this invoice shows the actual price of the <br />
              goods described and that all particulars are true and correct{" "}
              <br />
              IGST/CGST/SGST PAYABLE BY PARTY ON REVERSE <br />
              CHARGE BASIS WE HAVE NOT TAKEN I.T.C UNDER <br />
              THE GST ON THE SERVICES PROVIDED TO YOU
            </p>
            <div className="flex flex-col items-end px-1 gap-8 absolute right-0 bottom-0 w-1/2 border-t border-l">
              <p className="font-semibold tracking-wider">
                for Sri Mahalaxmi Transports 2025
              </p>
              <p>Authorised Signature</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p className="text-[12px] text-center">
          This is a Computer Generated Invoice
        </p>
      </div>

      <button
        onClick={reactToPrintFn}
        className="cursor-pointer px-6 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600 mt-5"
      >
        Print
      </button>
    </div>
  )
}

export default BillForm
