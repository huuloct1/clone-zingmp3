import icons from './icons'

const { MdOutlineLibraryMusic, AiOutlineTrademarkCircle, AiOutlinePieChart } =
  icons

export const sidebarMenu = [
  {
    path: 'mymusic',
    text: 'Ca Nhan',
    icons: <MdOutlineLibraryMusic size={21} />,
  },
  {
    path: '',
    text: 'Kham pha',
    icons: <AiOutlineTrademarkCircle size={21} />,
  },
  {
    path: 'zing-chart',
    text: '#zingchart',
    icons: <AiOutlinePieChart size={21} />,
  },
  {
    path: 'follow',
    text: 'Theo doi',
    icons: <MdOutlineLibraryMusic size={21} />,
  },
]
