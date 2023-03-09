import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [
        FormsModule,

        //primeng component modules
        InputTextModule,
        SidebarModule,
        BadgeModule,
        ButtonModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        CheckboxModule,
        PasswordModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,



        // translate i18n
        TranslateModule

    ],
    providers: [],
})
export class PrimeNgUIComponentModule {}
