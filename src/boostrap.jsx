export default function Boostrap(){
    return (
        <>
  {/*   <div className="container text-center mt-5">
      <h1 className="text-primary">Hello Bootstrap in React!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
    <section>
     <div className="container">
        <div className="row">
            <div className="col-4">column1</div>
           <div className="col-4">column2</div>
           <div className="col-4">column3</div>
        </div>

     </div>
     <div class="container bg-dark p-3 pb-5">Fixed width</div>
<div class="container-fluid bg-dark text-white p-3">Full width</div>

    </section>
    <div className="container">
        <div className="row">
       <div className="col-3 bg-danger">full</div>
       <div className="col-9 bg-success">col6</div>
       <div className="col-4 bg-info">col4</div>
        </div>
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4 bg-primary text-white">Column 1</div>
    <div class="col-sm-12 col-md-6 col-lg-4 bg-success text-white">Column 2</div>
    <div class="col-sm-12 col-md-12 col-lg-4 bg-danger text-white">Column 3</div>
  </div>
</div>
<div className="container ">
 <div className="text-start bg-light">text1</div>
 <div className="text-center bg-light">text2</div>
 <div className="text-end bg-light">text3</div>
</div>
<div className="container">
 <div className="btn btn-outline-info text-black">button one</div>
 <div className="btn btn-danger">button one</div>
 <div className="btn hover:btn-info">button three</div>
 <div className="btn btn-outline-danger">button four</div>
</div>
<div class="container mt-3">
  <input type="text" class="form-control mb-2 " placeholder="Enter your name"/>
  <input type="email" class="form-control mb-2" placeholder="Enter your email"/>
  <textarea class="form-control mb-2" rows="3" placeholder="Message"></textarea>
</div>
<div class="container mt-4">
  <div class="row">
    <div class="col-md-6">
      <h3>Login Form</h3>
      <input type="email" class="form-control mb-2" placeholder="Email"/>
      <input type="password" class="form-control mb-2" placeholder="Password"/>
      <button class="btn btn-primary w-100">Login</button>
    </div>
    <div class="col-md-6">
      <h3>Subscribe</h3>
      <div class="input-group mb-2">
        <input type="email" class="form-control" placeholder="Enter your email"/>
        <button class="btn btn-success">Subscribe</button>
      </div>
    </div>
  </div>
</div>
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="number" class="form-control"/>
  <button class="btn btn-success">Pay</button>
</div> */}


<nav class="navbar navbar-expand-lg navbar-primary bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#navbarNav">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<li class="nav-item dropdown dropup">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">More</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="">Action</a></li>
    <li><a class="dropdown-item" href="">Another Action</a></li>
  </ul>
</li>
</>
  );
}