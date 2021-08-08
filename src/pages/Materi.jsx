import React from 'react';

import {useHistory} from 'react-router-dom'
import { useData } from '../providers/DataProvider'

import Header from '../components/Header';
import materis from '../data/materi'

export default function Materi() {

    const history = useHistory()
    const {data} = useData()
    const [materiGenus, setMateriGenus] = React.useState(null)

    React.useEffect(() => {
        let materi = materis.find(function(materi){
            return materi.genus === data.genus
        })
        setMateriGenus(materi)
    }, [])

    function handleClick(){
        history.replace('/kuis')
    }

    function capitalize(teks){
        return teks.charAt(0).toUpperCase() + teks.slice(1)
    }

    return materiGenus ? (
        <div>
            <Header />
            <div className="px-8">
                <h1 className="text-center font-bold text-3xl mt-6 italic">{materiGenus.genus}</h1>
                <div className="mt-8 flex justify-center">
                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-xl p-4">
                        <img src={materiGenus.gambar.img} alt="Gambar Bryophyta" className="object-scale-down object-center" />
                        <span className="italic font-semibold text-lg mt-2">{materiGenus.genus}</span>
                        <span className="">({materiGenus.gambar.sumber})</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mt-8">
                    <p className="border-b border-gray-400 font-medium">Taksonomi</p>
                    <div className="mt-2 grid grid-cols-10">
                        {
                            ['kingdom','divisio','classis','ordo','familia','genus'].map(function(tingkatan){
                                return <>
                                    <span className="col-span-2">{capitalize(tingkatan)}</span>
                                    <span className="col-start-3 col-end-4 text-center">:</span>
                                    <span className="col-start-4 col-end-11">{materiGenus.taksonomi[tingkatan]}</span>
                                </>  
                            })
                        }

                        {/* <span className="col-span-2">Kingdom</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.kingdom}</span>
                        <span className="col-span-2">Divisio</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.divisio}</span>
                        <span className="col-span-2">Classis</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.classis}</span>
                        <span className="col-span-2">Ordo</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.ordo}</span>
                        <span className="col-span-2">Familia</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.familia}</span>
                        <span className="col-span-2">Genus</span>
                        <span className="col-start-3 col-end-4 text-center">:</span>
                        <span className="col-start-4 col-end-11">{materiGenus.taksonomi.genus}</span> */}
                    </div>
                    <p className="mt-4" dangerouslySetInnerHTML={{__html: materiGenus.materi}} ></p>
                </div>
                <div className="flex justify-end">
                    <button className="text-white mt-8 mb-8 bg-primary px-6 py-1 rounded-lg shadow-md" onClick={handleClick}>Lanjut...</button>
                </div>
            </div>
        </div>
    ) : <div>Loading...</div>
}
