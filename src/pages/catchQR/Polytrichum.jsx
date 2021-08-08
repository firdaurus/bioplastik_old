//link : /34c0df48
import React from 'react'
import { useHistory } from 'react-router'

import { getHashFromGenus } from '../../data/genusHashes'
import { useData } from '../../providers/DataProvider'
import Loading from '../../pages/Loading'
import db from '../../utils/DB'

export default function Polytrichum() {

    const { setData } = useData()
    const history = useHistory()

    React.useEffect(() => {
        setData({
            genus: 'Polytrichum',
            nilai: 0,
        })
        db.data.put({key: 'hash', value: getHashFromGenus('Polytrichum')})
        history.replace('/')
    }, [])

    return <Loading />
}
