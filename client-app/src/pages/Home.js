import Navbar from '../components/NavBar';
import BlockCarousel from '../components/BlockCarousel';
import ImageViewer from '../components/ImageViewer';
import Paragraph from '../components/Paragraph';
import '../css/Home.css';

export function Home() {
    const blocks = ['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5'];
    return (
      <div>
            <Navbar />
            <BlockCarousel blocks={blocks} />
            <Paragraph />
            <ImageViewer />
            <div>
                <h1 className='footer'>Made by TUSUR</h1>
            </div>
      </div>
  )
}