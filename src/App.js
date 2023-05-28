import './App.css';
import HeaderComp from './component/header-component/header-top/header.component';
import Body from './component/about-component/about-body/about-body.component';
import FirstFeature from './component/features-component/first-feature/first-feature.component';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Body />
      <FirstFeature />
    </div>
  );
}

export default App;
