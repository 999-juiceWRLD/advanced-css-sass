import './App.css';
import HeaderComp from './component/header-component/header-top/header.component';
import Body from './component/about-component/about-body/about-body.component';
import FirstFeature from './component/features-component/first-feature/first-feature.component';
import SecondFeature from './component/features-component/second-feature/second-feature.component';
import ThirdFeature from './component/features-component/third-feature/third-feature.component';
import FourthFeature from './component/features-component/fourth-feature/fourth-feature.component';
import Feature from './component/features-component/feature-section/features-section.component';
import ToursCore from './component/tours-component/tours-core/tours-core.component';
import SectionHeader from './component/stories-component/section-header/section-header.component';
import BaseStoryComp from './component/stories-component/story-base/base-story.component';
import SectionCore from './component/stories-component/section-core/section-core.component';

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
      <ToursCore />
      <SectionHeader />
      <SectionCore 
        childComponent={<BaseStoryComp text={"hey there"} />}
      />
    </div>
  );
}

export default App;
