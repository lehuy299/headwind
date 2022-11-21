
import ChannelBar from './components/ChannelBar';
import SideBar from './components/SideBar';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
