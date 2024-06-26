'use client'

import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  const [valor, setValor] = useState(0)
  const [data, setData] = useState<Record<number, number>>()
  const [status, setStatus] = useState(0)

  const handleValorChange = (newValor: number) => {
    setValor(newValor)
  }

  const submitValor = async () => {
    const response = await fetch('/api/saque', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ valor: valor })
    })

    setStatus(response.status)

    const data = await response.json()

    setData(data)
  }

  return (
    <div className="bg-moradaBlack w-full h-full flex flex-wrap gap-10">
      <div className='w-full h-full flex flex-nowrap justify-center items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='flex flex-nowrap justify-center items-center gap-2 p-4 rounded-full bg-white'>
            <Image
              src="/images/morada-logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
            <p className='text-3xl font-bold'>
              Bank
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-2 mt-10">
              <label className="text-white">Valor de saque:</label>
              <div className='flex flex-col gap-6'>
                <input
                  type="number"
                  className="bg-gray-700 text-white p-2 rounded-md"
                  onChange={(e) => handleValorChange(Number(e.target.value))}
                />
                <button className="bg-moradaOrange text-white p-2 rounded-md" onClick={() => { submitValor() }}>
                  Sacar
                </button>
              </div>
            </div>
          </div>
        </div>
        {data && (
          <div className='w-full'>
            <div className=" flex flex-col gap-2 p-4 justify-start">
              <h1 className=' text-white text-4xl font-semibold'>
                Resultado de saque:
              </h1>
              {Object.entries(data).map(([key, value]) => {
                return (
                  <div key={key} className={`flex flex-nowrap gap-4 justify-between max-w-80 text-xl ${key != "suggested" ? 'text-green-500' : 'text-moradaOrange'}  font-semibold`}>
                    {status === 200 && (
                      <>
                        <p>
                          R$ {key}:
                        </p>
                        <p>
                          {value}
                        </p>
                      </>
                    )}
                    {status === 406 && (
                      <div className='flex flex-col gap-4'>
                        <p>
                          Não é possível sacar essa quantia com as cédulas disponíveis...
                        </p>
                        <p className='text-white'>
                          Saque sugerido: {value}
                        </p>
                      </div>
                    )}
                    {status === 400 && (
                      <p className='text-red-500'>
                        {value}
                      </p>
                    )}
                  </div>
                )
              })
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
