function activar(quien:string,
                objeto:string="sensor",
              momento?:string){
  let mensaje:string;
  if(momento){
    mensaje =`${quien} activó el ${objeto} en la ${momento}`;
  }else{
    mensaje =`${quien} activó el ${objeto}`;
  }

  console.log(mensaje);
}

activar("Diego", "auto");
