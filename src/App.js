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
import SectionCore from './component/stories-component/section-core/section-core.component';
import BaseStoryComp from './component/stories-component/story-base/base-story.component';
import StoriesButton from './component/stories-component/stories-button/stories-button.component';

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
        childComponent1={
          <BaseStoryComp 
            path={"nat-8.jpg"}
            name={"Marry Smith"}
            title={"I had the best week with my family"}
            text={"I did not think our Forrest Hiker program to be amazing.\
                  Looking forward to do it again next season. Creating \
                  lifelong memories, my family and I had an incredible week \
                  filled with love, laughter, and unforgettable adventures."}
          />}
        childComponent2={
          <BaseStoryComp 
            path={"nat-9.jpg"}
            name={"Jack Willson"}
            title={"My experiences with Natours changed my life"}
            text={"Embarking on a transformative journey with Natours, my life \
                  took a remarkable turn as I discovered new passions, forged meaningful \
                  connections, and experienced personal growth like never before."}
          />}
      />
        <StoriesButton />
    </div>
  );
}

export default App;
