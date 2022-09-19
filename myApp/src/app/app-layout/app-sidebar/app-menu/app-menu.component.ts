import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            
            {
                items: [
                    { label: 'News', icon: 'pi pi-book', routerLink: ['#'] },
                    { label: 'NFT', icon: 'pi pi-clone', routerLink: ['#'] },
                    { label: 'Stacking', icon: 'pi pi-database', routerLink: ['#'] },
                    { label: 'wallets', icon: 'pi pi-credit-card', routerLink: ['#'] },
                    { label: 'secuurity', icon: 'pi pi-lock', routerLink: ['#'], class: 'rotated-icon' },
                    { label: 'setting', icon: 'pi pi-cog', routerLink: ['#'] },
                    
                ]
            }
        ];
    }
}
