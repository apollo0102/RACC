import { useTotalSupply, useName } from '../../hooks/DDEFIREContract'
import { Fragment } from 'react'
import AppLayout from '../AppLayout'
import './Home.scss'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/react/solid'
import { useEthers, shortenAddress, Mainnet, Ropsten } from '@usedapp/core'
import { toast } from 'react-toastify'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import 'react-toastify/dist/ReactToastify.css'
import SmallEarth from '../../assets/images/small-earth.png'
import WhiteCircle from '../../assets/images/white-circle.png'
import HeroLeftLines from '../../assets/images/hero-left-lines.png'
import HeroImg from '../../assets/images/hero-img.png'

function classNames(...classes) {
  return classes.filter(Boolean).join('fff ')
}

const Home = () => {
  const { account, activate, chainId, deactivate } = useEthers()
  const handleConnect = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: 'Metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    }

    if (!account) {
      const web3Modal = new Web3Modal({
        providerOptions,
      })
      const provider = await web3Modal.connect()
      await activate(provider)
    }
  }

  return (
    <AppLayout>
      <div className=''>
        <img className='hero-left-lines' src={HeroLeftLines} alt='' />
        <img className='hero-left-lines-static' src={HeroLeftLines} alt='' />
        <img className=' earth-1' src={SmallEarth} alt='' />
        <img className=' earth-2' src={SmallEarth} alt='' />
        <img className='  earth-3' src={SmallEarth} alt='' />
        <img className=' star1' src={WhiteCircle} alt='' />
        <img className=' star2' src={WhiteCircle} alt='' />
        <img className=' star3' src={WhiteCircle} alt='' />
        <img className=' star4' src={WhiteCircle} alt='' />
      </div>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-y-10 pb-96'>
        <ul className='text-center px-10 gap-y-10'>
          <li>
            <span className='text-[40px] md:text-[65px] text-white tracking-wide font-bold lg:leading-loose'>
              MINT YOUR <span className='text-[#ff0000]'>RACC!</span>
            </span>
          </li>
          <li>
            <span className='text-2xl font-normal text-white leading-loose'>
              {' '}
              2758 / 10000
            </span>
          </li>
          <li>
            <span className='text-3xl  font-normal text-[#ff0000] leading-loose'>
              Cost: 0.12 ETH{' '}
            </span>
          </li>
          <li>
            <span className=' text-md sm:text-2xl text-white leading-loose font-normal'>
              You may mint up to 4 at a time
            </span>
          </li>
          <li>
            <div className='flex justify-center items-center gap-x-16 my-10'>
              <button className='rounded-full p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:drop-shadow-5xl drop-shadow-xl hover:bg-[#ff0000]'>
                <MinusIcon className='h-8 w-8 text-white' />
              </button>
              <span className='text-3xl text-white font-bold'>1</span>
              <button className='rounded-full p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 drop-shadow-5xl hover:drop-shadow-5xl drop-shadow-xl hover:bg-[#ff0000]'>
                <PlusIcon className='h-8 w-8 text-white' />
              </button>
            </div>
          </li>
          <li>
            <button className='text-white bg-[#ff0000] rounded-[50px] px-24 py-4 text-2xl font-bold tracking-[0.1em] hover:shadow-[-4px_4px_0px_-0px_white] focus:shadow-[-4px_4px_0px_-0px_white] transition ease-in-out delay-300'>
              Mint
            </button>
          </li>
        </ul>
        <div
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img className="w-100" src={HeroImg} alt="" />
      </div>
      </main>
    </AppLayout>
  )
}

export default Home
