import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: ``,
        pathMatch: `full`,
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent);
        }
    },
    {
        path: `nettoyer`,
        pathMatch: `full`,
        loadComponent: () => {
            return import('./nettoyer/nettoyer.component').then((m) => m.NettoyerComponent);
        }
    },
    {
        path: `explorer`,
        pathMatch: `full`,
        loadComponent: () => {
            return import('./explorer/explorer.component').then((m) => m.ExplorerComponent);
        }
    },
];
