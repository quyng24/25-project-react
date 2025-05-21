import './App.css'
import Tabs from './component/Tabs'

function App() {
  const tabsData = [
    {
      title: "Home",
      content: (
        <div>
          <h2>Welcome to the Home Tab</h2>
          <p>This is a simple example of a tabs interface built with React.</p>
          <p>Click on different tabs to see their content!</p>
        </div>
      )
    },
    {
      title: "About",
      content: (
        <div>
          <h2>About Us</h2>
          <p>We are a team passionate about creating great React components.</p>
          <p>This tab component is just one example of what we can build!</p>
        </div>
      )
    },
    {
      title: "Contact",
      content: (
        <div>
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 React Street, JavaScript City</p>
        </div>
      )
    }
  ];
  return (
    <>
      <div className='app'>
        <h1>React Tabs Demo</h1>
        <Tabs data={tabsData}/>
      </div>
    </>
  )
}

export default App
