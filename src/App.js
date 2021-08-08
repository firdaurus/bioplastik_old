import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import KunciDeterminasi from './pages/KunciDeterminasi';
import Salah from './pages/Salah';
import Materi from './pages/Materi';
import Kuis from './pages/Kuis';
import Nilai from './pages/Nilai'
import Loading from './pages/Loading'
import Rhodobryum from './pages/catchQR/Rhodobryum'
import Polytrichum from './pages/catchQR/Polytrichum'
import Fissidens from './pages/catchQR/Fissidens'

import { getGenusFromHash, getHashFromGenus } from './data/genusHashes';

import db from './utils/DB'

import {useData} from './providers/DataProvider'

import './App.css';

function App() {

  const {setData} = useData()

  const [isBooting, setBooting] = React.useState(true)

  React.useEffect(() => {
    boot()
  }, [])

  const boot = async function(){
    db.data.bulkGet(['hash'])
      .then(function([hash]){
        //apply data from indexed DB to Context API
        setData({
          genus: getGenusFromHash(hash.value) || '',
        })
      })
      .finally(function(){
        setBooting(false)
      })
  }

  return isBooting ? <Loading /> : (
    <>
      {/* <KunciDeterminasi /> */}
      {/* <Salah /> */}
      <Router>
        <Switch>
          <Route path={'/'+getHashFromGenus('Rhodobryum')}>
            <Rhodobryum />
          </Route>
          <Route path={'/'+getHashFromGenus('Polytrichum')}>
            <Polytrichum />
          </Route>
          <Route path={'/'+getHashFromGenus('Fissidens')}>
            <Fissidens />
          </Route>
          <Route path="/" exact>
            <KunciDeterminasi />
          </Route>
          <Route path="/salah">
            <Salah />
          </Route>
          <Route path="/materi">
            <Materi />
          </Route>
          <Route path="/kuis">
            <Kuis />
          </Route>
          <Route path="/nilai">
            <Nilai />
          </Route>
          {/* todo: hapus link loading */}
          <Route path="/loading">
            <Loading />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
