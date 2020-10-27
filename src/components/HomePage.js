import React from 'react';

const HomePage = () => {
    return(
        <div className="container">
        <header className="py-5 bg-image-full" style={{backgroundSize: "cover" , backgroundPosition: "center", backgroundImage: "url('https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&auto=format&fit=crop&w=3074&q=80')"}}>
          <img className="img-fluid d-block mx-auto" style={{height: "200px", border: "5px solid"}} src="https://images.unsplash.com/photo-1597356686959-09e45535e67b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1511&q=80" alt=""/>
        </header>
  
        <section className="py-5">
          <div className="container">
            <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
          </div>
        </section>
  
        <div className="py-5 bg-image-full" style={{backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1994&q=80')"}}>
          <div style={{height: "200px"}}></div>
        </div>
  
        <section className="py-5">
          <div className="container">
            <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
          </div>
        </section>
        </div>
    );
}

export default HomePage; 