import { Routes } from '@angular/router';
import { InicioComponent } from './web/inicio/inicio.component';
import { ContactosComponent } from './web/contactos/contactos.component';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: InicioComponent
            },
            {
                path: 'contactos',
                component: ContactosComponent
            },
            {
                path: 'servicios',
                component: ServiciosComponent
            }

        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];
