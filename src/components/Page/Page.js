import { setYear } from "../../actions/PageActions";
import { useDispatch, useSelector } from "react-redux";
// import './App.css';


function Page() {
    const year = useSelector((state) => state.page.year);
    const photos = useSelector((state) => state.page.photos);
    const  dispatch = useDispatch()
    function onBtnClick(e) {
        const year = +e.currentTarget.innerText
        dispatch(setYear(year))
    }
  return (
    <div>
      <div>
        <button onClick={onBtnClick}>2018</button>
        <button onClick={onBtnClick}>2017</button>
        <button onClick={onBtnClick}>2016</button>
        <button onClick={onBtnClick}>2015</button>
        <button onClick={onBtnClick}>2014</button>
      </div>
      <p>
        У тебя {photos.length} фото за {year} год
      </p>
    </div>
  );
}

export default Page;
