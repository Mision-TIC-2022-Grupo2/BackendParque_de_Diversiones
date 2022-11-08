import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';

const generador = require('password-generator');
const cryptoJs = require('crypto-js');
const jwt = require ('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository
  ) {}
  GeneralClave(){
    let clave = generador(8, false);
    return clave;
  }
  CifrarCalve(clave:string){
    let claveCifrada = cryptoJs.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificacionUsuario(usuario: string, clave:string){
    try{
      let u = this.usuarioRepository.findOne({where: {email:usuario, clave:clave}});
      if(u){
        return u;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data:{
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombres + ' ' + usuario.apellidos
      }
    },Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }

}
