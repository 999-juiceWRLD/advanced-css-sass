import './App.css';
import HeaderComp from './component/header-component/header-top/header.component';
import Body from './component/about-component/about-body/about-body.component';
import FirstFeature from './component/features-component/first-feature/first-feature.component';
import SecondFeature from './component/features-component/second-feature/second-feature.component';
import ThirdFeature from './component/features-component/third-feature/third-feature.component';
import FourthFeature from './component/features-component/fourth-feature/fourth-feature.component';
import Feature from './component/features-component/feature-section/features-section.component';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Body />
      <Feature 
        childComponent1={<FirstFeature />}
        childComponent2={<SecondFeature />}
        childComponent3={<ThirdFeature />}
        childComponent4={<FourthFeature />}
      />
    </div>
  );
}

export default App;
