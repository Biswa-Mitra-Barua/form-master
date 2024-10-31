import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit = data => {
      console.log('Sign Up', data);
  }

  const handleUpdateProfile = data => {
    console.log('Profile Update', data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
        formTitle={'Sign Up'} 
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up Here</h2>
            <p>Please sign up from the below form</p>
          </div>
      </ReusableForm>

      <ReusableForm 
        formTitle={'Profile Update'} 
        submitBtnText={'Update'}
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
      </ReusableForm>
    </>
  )
}

export default App
