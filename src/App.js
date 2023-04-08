import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import Deposit from "./components/deposit";
import Deposit2 from "./components/deposit2";
export const UserContext = React.createContext(null);
export const BalanceContext = React.createContext(100);
 
const App = () => {
 return (
   <div>
     <Navbar />
     <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <BalanceContext.Provider value = {{balance:100}}>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/deposit2/:id" element={<Deposit2/>}/>
       <Route path="/create" element={<Create />} />
       <Route path="/alldata" element = {<RecordList />} />
       <Route path="/deposit" element = {<Deposit/>}/>
     </Routes>
     </BalanceContext.Provider>
     </UserContext.Provider>
   </div>
 );
};
 
export default App;