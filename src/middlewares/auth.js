export const checkRole = (roles)=>{
   return (req,res,next) => {
    if(roles.includes(req.user.role)){
        next();
    } else {
        res.json ({status:"error", message:"no tienes el permiso necesario"});
        
    }
   }
};

export const showLoginView = (req,res,next)=>{
    if(req.user){
        res.redirect("/perfil");
    } else {
        next();
    }
};

export const checkUserAuthenticated = (req,res,next) => {
    if (req.user) {
        next();
    } else {
        res.json ({status:"error", message:"debes estar autenticado"})
        res.redirect("/login");
    }
}
