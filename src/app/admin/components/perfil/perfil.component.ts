import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  perfil: any = {}

  authService = inject(AuthService)

  constructor(){
    this.funGetPerfil()
  }

  funGetPerfil(){
    this.authService.perfil().subscribe(
      (resp) => {
        this.perfil = resp;
      },
      (error) => {
        alert("Error al recuperar el Perfil")
      },
    )
  }
}
