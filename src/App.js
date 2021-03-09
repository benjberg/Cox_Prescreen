import TextArea from './components/TextArea';
import './App.css';
// change font, make add opacity to output text
function App() {
  return (
    <div className="App">
      <h1>Prescreen</h1> 
      <div className='text-container'>
        <p className='explination-text'>The objective is to sum the counts for each key in the textarea, and display the totals for each key within the HTML
        document. The default value should result in the output, "The total for John is 6. The total for Jane is 8."</p>
</div>
      <TextArea/>
      
    </div>
  );
}

export default App;
