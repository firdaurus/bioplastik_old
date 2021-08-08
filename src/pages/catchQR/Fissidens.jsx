//link : /9cec5302
import React from 'react'
import { useHistory } from 'react-router'

import { getHashFromGenus } from '../../data/genusHashes'
import { useData } from '../../providers/DataProvider'
import Loading from '../../pages/Loading'
import db from '../../utils/DB'

export default function Fissidens() {

    const { setData } = useData()
    const history = useHistory()

    React.useEffect(() => {
        setData({
            genus: 'Fissidens',
            nilai: 0,
        })
        db.data.put({key: 'hash', value: getHashFromGenus('Fissidens')})
        history.replace('/')
    }, [])

    return <Loading />
}
