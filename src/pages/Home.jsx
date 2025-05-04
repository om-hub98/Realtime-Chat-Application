import ContactSidebar from '../components/ContactSidebar'
import ConversationWindow from '../components/ConversationWindow'

const Home = () => {

  return (
    <div className='home'>
      <div className="container">
        <ContactSidebar />
        <ConversationWindow />
      </div>
    </div>
  )
}

export default Home
