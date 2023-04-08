import search from './search.hbs'
import sidebarTmp from './sidebar.hbs'
import img from '../../../static/img/avatar.png'
import './search.modules.scss'
import './sidebar.modules.scss'

const Sidebar = () => {
    const content = {
      imageUrl: img,
      wordName: 'в',
      name: 'Вадим',
      search: search({})
    }
  
    return sidebarTmp(content)
}
  
export default Sidebar
