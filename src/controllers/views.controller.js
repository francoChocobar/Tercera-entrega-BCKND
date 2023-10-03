export class viewsController {
  static renderHome = (req, res) => {
    res.render("home");
  };
  static renderSingup = (req,res)=>{
    res.render("signup");
  };
  static renderLogin = (req,res)=>{
    res.render("login");
  };
  static renderPerfil = (req,res)=>{
    console.log(req.user);
    res.render("profile",{user: req.user});
  };
}
