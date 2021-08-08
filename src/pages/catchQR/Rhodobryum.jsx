//link : /a5772ff3
import React from 'react'
import { useHistory } from 'react-router'

import { getHashFromGenus } from '../../data/genusHashes'
import { useData } from '../../providers/DataProvider'
import Loading from '../../pages/Loading'
import db from '../../utils/DB'

export default function Rhodobryum() {

    const { setData } = useData()
    const history = useHistory()

    React.useEffect(() => {
        setData({
            genus: 'Rhodobryum',
            nilai: 0,
        })
        db.data.put({key: 'hash', value: getHashFromGenus('Rhodobryum')})
        history.replace('/')
    }, [])

    return <Loading />
}
