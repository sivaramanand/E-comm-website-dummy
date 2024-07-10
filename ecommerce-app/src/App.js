import logo from "./logo.svg";
import "./App.css";
import Ecommerce from "./EcommercePage";
import MainPage from "./Daily tasks/Custom Modal/MainPage";
import QuizApplication from "./Daily tasks/Quiz Application/QuizApplication";
import FileUpload from "./Daily tasks/File Uploader/fileUpload";
import Todotasks from "./Redo Tasks/Todo Tasks/todotasks";
import ExpenseTraker from "./Daily tasks/Expense Tracker/ExpenseTraker";
function App() {
  return (
    <>
      {/*<Ecommerce />*/}
      {/*<MainPage />*/}
      {/*<QuizApplication />*/}
      {/* <FileUpload />*/}
      <ExpenseTraker />
    </>
  );
}

export default App;
