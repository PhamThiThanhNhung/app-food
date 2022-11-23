import Header from '../../layouts/header/header';
import Navbar from '../../layouts/navbar/navbar';
interface IProps {
  currentItem: string;
  setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
}
const BlogPage: React.FC<IProps> = ({ currentItem, setCurrentItem }) => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-2">
          <Navbar currentItem={currentItem} setCurrentItem={setCurrentItem} />
        </div>
        <div className="col-span-10 bg-red-500">
          <p>Hllllll</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
