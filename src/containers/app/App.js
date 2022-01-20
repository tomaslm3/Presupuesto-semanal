import React from "react";
import Header from "../../components/header/Header";

function App() {
  return (
    <div class='container-fluid bg-danger' >
      <div class="container  bg-light ">
          <div class="row justify-content-center  text-center">
            <div>
              <Header 
                titulo='Gasto Semanal'
                />
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
