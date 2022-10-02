import type { NextPage } from 'next'
import UserTable from '../components/UserTable/UserTable'
import Overview from '../components/wallet-overview'


const Home: NextPage = () => {
  return (
    <>
    <Overview/>
    <UserTable/>
    </>
  )
}

export default Home

