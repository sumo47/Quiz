import React from 'react'

function Quiz() {

  console.log("First commit ")
  return (
    <div className='container border border-danger'>
       <div className="container">
       <h4>
            Question:-
        </h4>
        <ul className='m-0'>what is your name?</ul>
       </div>
        <table>
            <ul>
               <div className="container">
               <li>harry</li>
                <input type="checkbox" className='' />
               </div>

               <div className="container">
               <li>potter</li>
                <input type="checkbox" />
               </div>

               <div className="container">
               <li>Dark</li>
                <input type="checkbox" />
               </div>

               <div className="container">
               <li>Thor</li>
                <input type="checkbox" />
               </div>

            </ul>
        </table>
    </div>
  )
}

export default Quiz