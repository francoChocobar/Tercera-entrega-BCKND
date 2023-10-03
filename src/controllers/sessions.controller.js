export class sessionsController {
    static redirectLogin = (req,res)=>{
        res.render("login",{message:"usuario registrado"});
    };
    static failSingup = (req,res)=>{
        res.render("signup",{error:"No se pudo registrar el usuario"});
    };
    static renderProfile = (req,res)=>{
        res.redirect("/perfil");
    };
    static failLogin = (req, res) => {
        res.render("login", { error: "Credenciales invalidas" });
      };

}